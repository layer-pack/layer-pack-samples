/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/** @file Core layer's root App component. Endpoint layers can override this via layer-pack inheritance. */

import React from 'react';

class App extends React.Component {

	render() {
		return <React.Fragment>
			<h1>Core Layer</h1>
			<h2>Include ( among others ) : </h2>
			<ul>
				<li>react 18+</li>
				<li>sass</li>
				<li>es6 + decorators</li>
			</ul>
		</React.Fragment>
	}
}

export default App
