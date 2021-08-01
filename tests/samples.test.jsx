/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

const fs    = require('fs'),
      path  = require('path'),
      util  = require('util'),
      spawn = require('child_process').spawn,
      exec  = require('child_process').exec;
let
	cmd;

let samplesDir = path.normalize(__dirname + "/../samples/"),
    scopes     = {};
before(function () {
	return new Promise((resolve => {
		fs.readdir(samplesDir, function ( err, items ) {
			
			for ( let sample, i = 0; i < items.length; i++ ) {
				sample = items[i];
				describe('Test sample \'' + sample + "\' : ", () => {
					
					it('it setup correctly ' + sample, function ( done ) {
						this.timeout(Infinity);
						
						cmd = exec('npm i',
						           {
							           cwd: samplesDir + "/" + sample,
						           },
						           function ( code, outLog ) {
							           code && console.warn('setup fail : ' + code + '\n\n');
							           done(code);
						           }
						);
						
						
					});
					it('it run tests correctly ' + sample, function ( done ) {
						this.timeout(Infinity);
						
						cmd = exec('npm run test',
						           {
							           cwd: samplesDir + "/" + sample,
						           },
						           function ( code, outLog ) {
							           code && console.warn('setup fail : ' + code + '\n\n');
							           done(code);
						           }
						);
						
						cmd.stdout.on('data', data => process.stdout.write(data));
						cmd.stderr.on('data', data => process.stdout.write(data));
						
						
					});
				});
			}
			resolve();
		});
	}))
});
it('Load all sample tests', function () {
});