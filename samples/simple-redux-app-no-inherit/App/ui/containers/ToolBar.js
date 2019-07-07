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

import Fab        from '@material-ui/core/Fab';
import CreateIcon from '@material-ui/icons/Add';
import SaveIcon   from '@material-ui/icons/Save';
import Actions    from "App/store/actions";
import React      from 'react';
import {connect}  from 'react-redux'

export default connect()(
	class ToolBar extends React.Component {
		static propTypes = {};
		state            = {};
		
		newWidget = record => {
			let { dispatch } = this.props;
			dispatch(Actions.widgets.newWidget({ type: "WeatherWidget" }))
		};
		
		render() {
			let { dispatch, editable } = this.props,
			    {}                     = this.state;
			return <div className={"ToolBar"}>
				<>
					<Fab aria-label="new" size={"small"} color={"secondary"}
					     onClick={this.newWidget}>
						<CreateIcon/>
					</Fab>&nbsp;&nbsp;
					<Fab aria-label="SaveState" size={"small"} color={"secondary"}
					     onClick={e => dispatch(Actions.appState.saveState())}>
						<SaveIcon/>
					</Fab>
				</>
			</div>
		}
	}
)
