/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import Super from '$super';
import Comps from 'App/ui/comps/(**/*).js';
import "./App.scss";

export default ( {} ) => {
	const [apiMsg, setApiMsg] = React.useState("");
	React.useEffect(
		() => {
			if ( !__IS_SERVER__ ) {
				const tryToCallApi = () =>
				{
					setApiMsg("Try to call API...")
					fetch("http://localhost:9000/ping")
						.then(
							async res => {
								setApiMsg((await res.json()).msg)
							},
							async err => {
								setTimeout(tryToCallApi, 3000)
								setApiMsg("API is offline, try again in 3s...")
							}
						);
				}
				tryToCallApi()
			}
		},
		[]
	)
	return <React.Fragment>
		<h1>WWW layer</h1>
		<h2>All comps in "App/ui/comps/(**/*).js" :</h2>
		{
			Object.keys(Comps).join(' / ')
		}
		<h2>API connection :</h2>
		{apiMsg}
		<Super/>
	</React.Fragment>
}


