/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import Super from '$super';
import Comps from './ui/comps/(**/*).js';

class App extends React.Component {
	
	render() {
		return <React.Fragment>
			<Super/>
			<h1>www2</h1>
			<Comps.Btn/>
			<Comps.Bar/>
		</React.Fragment>
	}
}

export default App