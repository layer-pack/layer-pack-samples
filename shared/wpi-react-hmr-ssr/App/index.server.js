/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */
import App              from "App/App"
import React            from "react";
import api              from "./api";
import {renderToString} from "react-dom/server";

var express      = require("express"),
    server       = express(),
    http         = require('http').Server(server),
    argz         = require('minimist')(process.argv.slice(2)),
    wpiConf      = require('App/.wpiConfig.json'),
    io           = require('socket.io')(http, {
	    pingTimeout : 30000,
	    pingInterval: 10000
    }),
    nsp          = io.of(
	    '/' + wpiConf.project.name
    );


let debug     = require('App/console').default("server");
process.title = wpiConf.project.name + '::server';

console.log("process.env.DEBUG : ", process.env.DEBUG);
server.use(express.json());       // to support JSON-encoded bodies
server.use(express.urlencoded()); // to support URL-encoded bodies

api(server, http);
//
//nsp.on('connection', function ( socket ) {
//	debug.log("new io connect !!!");
//
//	//server(socket.request, {
//	//	setHeader() {
//	//	}
//	//}, function ( err ) {
//	//	debug.log("new io connect !!!", socket.request.user);
//	//
//	//	App.db.registerIoSocket(socket);
//	//});
//
//	socket.on(
//		'event',
//		function ( datas ) {
//			debug.log("new io event !!!", (socket.request.AppDB || App.db)._id);
//			(socket.request.AppDB || App.db)._processIoSyncEvent(socket, datas);
//		});
//	socket.on('disconnect', function ( data ) {
//		(socket.request.AppDB || App.db).clearIoSocket(socket);
//	});
//});


var server_instance = http.listen(parseInt(argz.p || argz.port || 8000), function () {
	debug.info('Running on ', server_instance.address().port)
});



