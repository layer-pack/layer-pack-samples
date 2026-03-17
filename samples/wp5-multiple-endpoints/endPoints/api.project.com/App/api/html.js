/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/** @file Fallback rendering service for the API endpoint -- auto-discovered by the glob import in api.js. */

export const name          = "Rendering service";
export const priorityLevel = 100000;
export const service       = ( server ) => {
	server.use(
		function ( req, res, next ) {
			res.send(200, "API server")
		}
	);
};
