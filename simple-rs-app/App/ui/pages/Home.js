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

import React                                 from 'react';
import Widget                                from 'App/ui/containers/Widget.js';
import WeatherBlock                          from 'App/ui/containers/WeatherBlock';
import {reScope, scopeToProps, propsToScope} from "rscopes";


@scopeToProps("widgets", "appState")
export default class Home extends React.Component {
	state = {};
	
	render() {
		let { widgets = { items: [] }, appState } = this.props;
		return <div>
			<div className={ "desk" }>
				{
					widgets.items.map(
						widget => <Widget key={ widget._id } record={ widget }
						                  disabled={ true }
						                  selected={ widget._id == appState.selectedWidgetId }>
							<WeatherBlock record={ widget }
							              disabled={ true }/>
						</Widget>
					)
				}
			</div>
		</div>
	}
}
