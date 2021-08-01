/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import express from "express";
import config  from "../config";
import App     from "../index.js";

export const name          = "Health service";
export const priorityLevel = 100000;
export const service       = ( server ) => {
	server.get(
		'/ping',
		function ( req, res, next ) {
			res.json(200,{ok:true})
		}
	);
	server.use(express.static(config.projectRoot + '/dist/www'));
};