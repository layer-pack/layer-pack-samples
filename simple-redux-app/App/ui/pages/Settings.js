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

import React                                from 'react';
import {connect}                            from 'react-redux'
import {selectWidget, saveState, newWidget} from "App/store/actions/updateWidget";
import Widget                               from 'App/ui/containers/Widget.js';
import WeatherBlock                         from 'App/ui/containers/WeatherBlock';
import Fab                                  from '@material-ui/core/Fab';
import CreateIcon                           from '@material-ui/icons/Add';
import SaveIcon                             from '@material-ui/icons/Save';

export default connect(( { widgets, appState } ) => ({ widgets, appState }))(
	class App extends React.Component {
		state = {};
		
		render() {
			let { widgets = { items: [] }, dispatch } = this.props,
			    {}                                    = this.state;
			return <div>
				<div className={ "desk" }>
					{
						widgets.items.map(
							widget =>
								<Widget
									key={ widget._id }
									record={ widget }
									onSelect={ e => dispatch(selectWidget(widget._id)) }
									selected={ widget._id === widgets.selectedWidgetId }>
									<WeatherBlock record={ widget }/>
								</Widget>
						)
					}
				</div>
				
				<Fab aria-label="edit" className={ "newBtn button" }
				     onClick={ e => dispatch(newWidget()) }>
					<CreateIcon/>
				</Fab>
				<Fab aria-label="Delete" className={ "saveBtn button" }
				     onClick={ e => dispatch(saveState()) }>
					<SaveIcon/>
				</Fab>
			</div>
		}
	}
)
