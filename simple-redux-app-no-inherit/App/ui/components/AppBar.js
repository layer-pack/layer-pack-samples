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

import AppBar     from '@material-ui/core/AppBar';
import Toolbar    from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React      from "react";


export default ( { children } ) =>
	<AppBar position="static" className={"AppBar"}>
		<Toolbar>
			<Typography cvariant="h6" color="inherit" noWrap>
				Widget desk
			</Typography>
			<div className={"tools"}>
				{children}
			</div>
		</Toolbar>
	</AppBar>;