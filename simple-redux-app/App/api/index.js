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


import App from "App/index.js";

const wpiConf  = require('App/.wpiConfig.json'),
      fs       = require('fs'),
      express  = require('express'),
      indexTpl = require('../index.html.tpl');

let currentState;

/**
 * Add the rendering services to the main express instance
 * @param server {express}
 */
export default ( server ) => {
	
	const servePage = ( req, res, next ) => {
		App.renderSSR(
			{
				location: req.url,
				state   : currentState,
				indexTpl
			},
			( err, html, nstate ) => {
				res.send(200, err && ("" + err) || html)
			}
		)
	};
	
	server.get('/', servePage);
	server.get('/settings', servePage);
	
	server.use(express.static(wpiConf.projectRoot + '/dist'));
	
	server.post('/', function ( req, res, next ) {
		console.log("New state pushed")
		currentState = req.body;
		res.send(200, 'ok')
	});
};
