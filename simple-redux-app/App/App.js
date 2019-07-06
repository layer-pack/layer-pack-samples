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

import SuperApp  from '$super';
import React     from 'react';
import {connect} from 'react-redux'
import {AppBar}  from './ui/components/(*).js';
import {ToolBar} from './ui/containers/(*).js';
import "./ui/styles/index.scss"


@connect(( { appState } ) => ({ appState }))
export default class App extends React.Component {
	state = {};
	
	render() {
		let { widgets = {} } = this.props,
		    {}               = this.state;
		
		return <React.Fragment>
			<AppBar><ToolBar/></AppBar>
			
			<div className={"desk"}>
				<SuperApp/>
			</div>
		</React.Fragment>
	}
}
