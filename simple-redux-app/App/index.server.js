/*
 *
 * Copyright (C) 2019 Nathan Braun
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
import App              from "App/App"
import React            from "react";
import api              from "./api";
import {renderToString} from "react-dom/server";

var express   = require("express"),
    server    = express(),
    http      = require('http').Server(server),
    argz      = require('minimist')(process.argv.slice(2)),
    wpiConf   = require('App/.wpiConfig.json'),
    debug     = require('App/console').default("server");
process.title = wpiConf.project.name + '::server';

debug.log("process.env.DEBUG : ", process.env.DEBUG);
server.use(express.json());       // to support JSON-encoded bodies
server.use(express.urlencoded()); // to support URL-encoded bodies

api(server, http);


var server_instance = http.listen(parseInt(argz.p || argz.port || 8000), function () {
	debug.info('Running on ', server_instance.address().port)
});



