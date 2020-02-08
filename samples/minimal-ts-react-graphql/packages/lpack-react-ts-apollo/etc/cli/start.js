#!/usr/bin/env node
/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */
'use strict';

const program = require('commander'),
      express = require("express"),
      server  = express(),
      fkill    = require('fkill'),
      http    = require('http').Server(server),
      exec    = require('child_process').exec,
      argz    = process.argv.slice(2),
      Profile = require('../utils/Profile');

let profileId = process.env.__LPACK_PROFILE__ || "default";

if ( argz[0] && /^\:.*$/.test(argz[0]) )
	profileId = argz.shift().replace(/^\:(.*)$/, '$1');

program
	.option('-l, --local', 'Limit Build control web api to localhost')
	.option('-p, --port [port=9090]', 'Build control')
	.parse(process.argv);

let port = program.port || 9090,
    pDir = program.source || process.cwd();

let profile = new Profile(profileId);

profile.start();
profile.onComplete(e => process.exit());


server.use(express.json());       // to support JSON-encoded bodies
server.use(express.urlencoded()); // to support URL-encoded bodies

server.use(
	"/status",
	( req, res ) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.json({ status: profile.getStatus() })
	}
);

server.use(
	"/restart",
	( req, res ) => {
		res.header("Access-Control-Allow-Origin", "*");
		profile.start();
		
		res.json({ success: true })
	}
);
server.use(
	"/forceKill8080",
	( req, res ) => {
		res.header("Access-Control-Allow-Origin", "*");
		fkill(":8080", { tree: true, force: true, silent: true })
		
		res.json({ success: true })
	}
);

server.use(
	"/switch",
	( req, res ) => {
		res.header("Access-Control-Allow-Origin", "*");
		profileId = req.query.to || "prod";
		profile.stop().then(
			e => {
				profile = new Profile(profileId);
				profile.start();
				res.json({ success: true, profileId })
			}
		);
		
		
	}
);

server.use(
	"/kill",
	( req, res ) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.json({ success: true });
		
		profile.stop().then(e => process.exit());
	}
);

let server_instance = http.listen(parseInt(port), function () {
	console.info('Build manager running on ', server_instance.address(), server_instance.address().port)
});

process.on('SIGINT', e => profile.stop()); // catch ctrl-c
process.on('SIGTERM', e => profile.stop()); // catch kill
