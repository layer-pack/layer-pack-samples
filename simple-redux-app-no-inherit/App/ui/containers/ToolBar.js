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
