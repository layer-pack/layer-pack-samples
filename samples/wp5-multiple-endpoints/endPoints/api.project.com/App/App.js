/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/** @file API endpoint's App component -- overrides the core layer's App.js via layer-pack inheritance. */

import React from 'react';


class App extends React.Component {

	render() {
		return <React.Fragment>
			<h1>api server</h1>
		</React.Fragment>
	}
}

export default App
