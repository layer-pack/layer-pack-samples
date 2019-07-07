/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

import Actions    from "App/store/actions";
import React      from 'react';
import {connect}  from 'react-redux'
import {Widget}   from './ui/components/(*).js';
import "./ui/styles/index.scss"
import allWidgets from './ui/widgets/(*).js';


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
		</React.Fragment>
	}
}
