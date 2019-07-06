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

import superagent     from "superagent";
import {updateWidget} from "../actions";


export function weatherSearch( record, location, then ) {
	
	return ( dispatch, getState ) => {
		dispatch(updateWidget(
			{
				...record,
				fetching: location
			}));
		
		
		return superagent
			.get(getState().appState.src + location)
			.then(( res ) => {
				
				let current = getState().widgets.items[record._id];
				
				if ( current && current.fetching === location )
					dispatch(updateWidget(
						{
							...record,
							fetching: false,
							fetched : Date.now(),
							results : res.body,
							location
						}));
			})
			.catch(e => {
				
				let current = getState().widgets.items[record._id];
				if ( current && current.fetching === location )
					dispatch(updateWidget(
						{
							...record,
							fetching: false,
						}));
			})
	};
}