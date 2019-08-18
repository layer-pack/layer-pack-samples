/*
 *
 * Copyright (C) 2019 Nathanael Braun
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const wpi      = require('webpack-inherit'),
      fs       = require('fs'),
      fkill    = require('fkill'),
      waitOn   = require('wait-on'),
      rimraf   = require('rimraf'),
      chokidar = require('chokidar'),
      exec     = require('child_process').exec;

function getConfigKey( config, key ) {
	for ( let i = 0; i < config.allCfg.length; i++ )
		if ( config.allCfg[i][key] )
			return config.allCfg[i][key];
};

module.exports = function Profile( profileId ) {
	let config        = wpi.getConfig(profileId),
	    commands      = getConfigKey(config, "commands"),
	    logs          = {},
	    watchers      = {},
	    running       = {},
	    killing       = {},
	    runAfter      = {},
	    onComplete    = [],
	    curSessionNum = 0,
	    nbCmd         = 0;
	
	return {
		raw: config,
		start() {
			if ( !commands )
				return console.error('No commands in this profile', profileId);
			
			curSessionNum++;
			for ( let cmdId in commands )
				if ( commands.hasOwnProperty(cmdId) ) {
					logs[cmdId] = logs[cmdId] || { stdout: [], stderr: [] };
					this.run(cmdId)
				}
		},
		getStatus() {
			let status = { profileId };
			
			for ( let cmdId in commands )
				if ( commands.hasOwnProperty(cmdId) ) {
					status[cmdId] = {
						running : !!running[cmdId],
						lastLogs: logs[cmdId] && logs[cmdId].stdout.slice(-10)
					}
				}
			return status;
		},
		onComplete( cb ) {
			onComplete.push(cb);
		},
		cmdLog( cmdId, text ) {
			logs[cmdId].stdout.push(text);
			process.stdout.write(text + "\n");
		},
		cmdErr( cmdId, text ) {
			text = "\x1b[31m" + text + "\x1b[0m\n";
			logs[cmdId].stdout.push(text);
			logs[cmdId].stderr.push(text);
			process.stdout.write(text);
		},
		stop() {
			curSessionNum++;
			runAfter          = {};
			onComplete.length = 0;
			return Promise.all(
				[
					...Object.keys(commands).map(id => this.kill(id, true)),
					fkill(":8080", { tree: true, force: true, silent: true })
				]
			).then(e => (killing = {}));
		},
		kill( cmdId, stopWatching ) {
			let cmd  = running[cmdId],
			    task = commands[cmdId];
			//this.cmdLog(cmdId, 'Killing ' + ':' + profileId + '::' + cmdId);
			console.warn("Killing " + ':' + profileId + '::' + cmdId);
			stopWatching && watchers[cmdId] && watchers[cmdId].close();
			killing[cmdId] = true;
			return cmd && fkill(cmd.pid, { tree: true, force: true, silent: true })
				.then(
					logs => {
						running[cmdId] = null;
					}
				)
		},
		run( cmdId, cleared, watched, waitDone, sessionNum = curSessionNum ) {
			let cmd  = running[cmdId],
			    task = commands[cmdId];
			
			if ( sessionNum < curSessionNum )// stop previous lost call backs
				return;
			
			if ( cmd ) {
				return this.kill(cmdId).then(e => this.run(cmdId, cleared, watched, waitDone, sessionNum));
			}
			
			if ( !cleared && task.clearBefore ) {
				console.warn("Clear before ", task.clearBefore);
				return rimraf(task.clearBefore, ( err, val ) => this.run(cmdId, true, watched, waitDone, sessionNum));
			}
			
			nbCmd++;
			if ( !waitDone && task.wait ) {
				runAfter[task.wait] = runAfter[task.wait] || [];
				runAfter[task.wait].push(cmdId);
				return;
			}
			if ( !watched && task.watch ) {
				watchers[cmdId] && watchers[cmdId].close();
				
				return waitOn({
					              resources: [
						              task.watch
					              ],
					              delay    : 1000,
					              interval : 100,
					              timeout  : 30000,
				              },
				              err => {
					              if ( err ) {
						              console.warn(cmdId + ": '" + task.watch + "' still not here...");
						              return setTimeout(tm => this.run(cmdId, true, false, true, sessionNum), 3000);
					              }
					
					              watchers[cmdId] = chokidar
						              .watch(task.watch, {
							              ignored           : /(^|[\/\\])\../,
							              usePolling        : true,
							              "aggregateTimeout": 300,
							              "poll"            : 1000
						              })
						              .on('all', ( event, path ) => {
							              console.warn(cmdId + ": '" + task.watch + "' has been updated restarting...", event);
							
							              if ( event === 'add' || event === 'change' ) {
								              console.warn(cmdId + ": '" + task.watch + "' has been updated restarting...");
								
								              this.run(cmdId, true, true, true, sessionNum);
							              }
						              });
					              console.warn(cmdId + ": '" + task.watch + "' waiting updates...");
				              }
				)
			}
			this.cmdLog(cmdId, 'Starting ' + ':' + profileId + '::' + cmdId);
			running[cmdId] = cmd = exec(
				task.run,
				{
					stdio: 'inherit',
					env  : {
						...process.env,
						'__WPI_PROFILE__': undefined,
						...(task.vars && { '__WPI_VARS_OVERRIDE__': JSON.stringify(task.vars) })
					}
				},
				( err ) => {
					//err && console.warn(err);
					if ( killing[cmdId] ) {
						killing[cmdId] = false;
						return;
					}
					//this.cmdLog(cmdId, cmdId + ": '" + task.run + "' ended ...");
					err && this.cmdErr(cmdId, cmdId + ": '" + task.run + "' ended with error : " + err);
					if ( sessionNum === curSessionNum && task.forever ) {
						console.warn(cmdId + " restart ...");
						setTimeout(tm => this.run(cmdId, true, true, true, sessionNum), 5000);
					}
					else {// normal exit
						if ( sessionNum === curSessionNum ) {
							//watchers[cmdId] && watchers[cmdId].close();
							
							if ( runAfter[cmdId] ) {
								while ( runAfter[cmdId].length )
									this.run(runAfter[cmdId].shift(), false, false, true, sessionNum);
							}
							
							nbCmd--;
							if ( nbCmd === 0 )
								while ( onComplete.length )
									onComplete.shift()();
						}
					}
					running[cmdId] = null;
				}
			);
			
			cmd.stdout.on('data', txt => (this.cmdLog(cmdId, txt.toString())))
			cmd.stderr.on('data', txt => (this.cmdErr(cmdId, txt.toString())))
		}
	}
}