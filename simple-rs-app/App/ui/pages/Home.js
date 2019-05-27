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

import PropTypes                             from "prop-types";
import React                                 from 'react';
import Widget                                from 'App/ui/containers/Widget.js';
import WeatherBlock                          from 'App/ui/containers/WeatherBlock';
import {reScope, scopeToProps, propsToScope} from "rscopes";
import Fab                                   from '@material-ui/core/Fab';
import CreateIcon                            from '@material-ui/icons/Add';
import SaveIcon                              from '@material-ui/icons/Save';

@scopeToProps("widgets", "appState")
export default class Home extends React.Component {
	static propTypes = {
		editable: PropTypes.bool,
	};
	state            = {};
	
	selectWidget = record => {
		let { $actions } = this.props;
		$actions.selectWidget(record._id)
	};
	
	rmWidget = record => {
		let { $actions } = this.props;
		$actions.rmWidget(record)
	};
	
	render() {
		let { widgets = {}, appState, $actions, editable } = this.props,
		    {}                                             = this.state;
		return <div>
			<div className={ "desk" }>
				{
					Object.keys(widgets).map(
						wid =>
							<Widget
								key={ wid }
								record={ widgets[wid] }
								editable={ editable }
								onSelect={ this.selectWidget }
								selected={ wid === appState.selectedWidgetId }>
								<WeatherBlock record={ widgets[wid] }
								              editable={ editable }
								              onClose={ this.rmWidget }/>
							</Widget>
					)
				}
			</div>
			{ editable &&
			<>
				<Fab aria-label="edit" className={ "newBtn button" }
				     onClick={ $actions.newWidget }>
					<CreateIcon/>
				</Fab>
				<Fab aria-label="Delete" className={ "saveBtn button" }
				     onClick={ $actions.saveState }>
					<SaveIcon/>
				</Fab>
			</>
			}
		</div>
	}
}