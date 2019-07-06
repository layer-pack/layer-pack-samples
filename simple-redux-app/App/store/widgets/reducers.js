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

import typeReducers                                                     from './(*)/reducers.js';
import {SELECTED_WIDGET_CHANGED, WIDGET_CHANGED, WIDGET_NEW, WIDGET_RM} from './actions';

export default function widgets( state = { items: {} }, action ) {
	switch ( action.type ) {
		case SELECTED_WIDGET_CHANGED:
			return {
				...state,
				selectedWidgetId: action.wid
			};
		case WIDGET_CHANGED:
			let lastWState = state.items[action.record._id];
			
			return {
				...state,
				items: {
					...state.items,
					[action.record._id]: typeReducers[lastWState.type](lastWState, action)
				}
			}
		case WIDGET_NEW:
			return {
				...state,
				items: {
					...state.items,
					[action.record._id]: action.record
				}
			}
		case WIDGET_RM:
			let newState = { ...state, items: { ...state.items } };
			delete newState.items[action.wid];
			return newState;
		default:
			return state
	}
}
