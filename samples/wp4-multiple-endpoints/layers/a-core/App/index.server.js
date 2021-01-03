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



