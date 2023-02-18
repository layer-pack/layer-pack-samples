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
export const priorityLevel = 1000000;
export const service       = ( server ) => {
	server.get(
		'/ping',
		function ( req, res, next ) {
			res.header("Access-Control-Allow-Origin", "*");
			res.json(200, { msg: "Hello from API !" })
		}
	);
};
