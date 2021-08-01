/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import is  from 'is';
import api from './api/(*).js';


export default ( server, http ) => Object
	.keys(api)
	.map(
		( service ) => (
			is.fn(api[service]) ?
			{
				name         : service,
				priorityLevel: 0,
				service      : api[service]
			} : api[service]
		)
	)
	.sort(
		( a, b ) => (a.priorityLevel > b.priorityLevel ? -1 : 1)
	)
	.forEach(
		( service ) => {
			try {
				console.info("Load Api : ", service.name, "\n")
				
				service.service(server, http);
			} catch ( e ) {
				console.error("Api fail loading service ", service.name, "\n", e)
			}
		})