/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
import React  from "react";
import api    from "./api";
import config from "./config";

const express = require("express"),
      server  = express(),
      http    = require('http').Server(server),
      argz    = require('minimist')(process.argv.slice(2));

process.title = config.project.name + '::server';

server.use(express.json({ limit: '2mb' }));       // to support JSON-encoded bodies
server.use(express.urlencoded({ extended: true, limit: '2mb' })); // to support URL-encoded bodies

api(server, http);

var server_instance = http.listen(parseInt(argz.p || argz.port || 8000), function () {
	console.info('Running on ', server_instance.address().port)
});



