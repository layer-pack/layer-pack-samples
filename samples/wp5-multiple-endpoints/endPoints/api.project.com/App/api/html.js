/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


export const name          = "Rendering service";
export const priorityLevel = 100000;
export const service       = ( server ) => {
	server.use(
		function ( req, res, next ) {
			res.send(200, "API server")
		}
	);
};
