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

import Actions          from "App/store/actions";
import React            from 'react';
import {connect}        from 'react-redux'
import {AppBar, Widget} from './ui/components/(*).js';
import {ToolBar}        from './ui/containers/(*).js';
import "./ui/styles/index.scss"
import allWidgets       from './ui/widgets/(*).js';


@connect(( { widgets, appState } ) => ({ widgets, appState }))
export default class App extends React.Component {
	state = {};
	
	rmWidget = record => {
		let { dispatch } = this.props;
		dispatch(Actions.widgets.rmWidget(record._id))
	};
	
	selectWidget = record => {
		let { dispatch } = this.props;
		dispatch(Actions.widgets.selectWidget(record._id))
	};
	updateWidget = record => {
		let { dispatch } = this.props;
		dispatch(Actions.widgets.updateWidget(record))
	};
	
	render() {
		let { widgets = {} } = this.props,
		    {}               = this.state;
		
		return <React.Fragment>
			<AppBar><ToolBar/></AppBar>
			<div className={"desk"}>
				{
					Object.keys(widgets.items).map(
						wid => {
							let WidgetComp = allWidgets[widgets.items[wid].type];
							return <Widget
								key={wid}
								record={widgets.items[wid]}
								onSelect={this.selectWidget}
								onWidgetUpdated={this.updateWidget}
								selected={wid === widgets.selectedWidgetId}>
								{WidgetComp && <WidgetComp id={wid}
								                           onClose={this.rmWidget}></WidgetComp>}
							</Widget>
						}
					)
				}
			</div>
		</React.Fragment>
	}
}
