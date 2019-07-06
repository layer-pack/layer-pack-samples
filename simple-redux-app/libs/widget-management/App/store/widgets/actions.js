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

import shortid from "shortid";

export const WIDGET_CHANGED          = 'WIDGET_CHANGED';
export const WIDGET_NEW              = 'WIDGET_NEW';
export const WIDGET_RM               = 'WIDGET_RM';
export const SELECTED_WIDGET_CHANGED = 'SELECTED_WIDGET_CHANGED';

export *                                                     from './(*)/actions.js';

export function selectWidget( wid ) {
	return {
		type: SELECTED_WIDGET_CHANGED,
		wid
	}
}

export function newWidget( record ) {
	return {
		type  : WIDGET_NEW,
		record: {
			_id     : shortid.generate(),
			size    : { width: 350, height: 400 },
			position: {
				x: 100 + ~~(Math.random() * 600),
				y: 100 + ~~(Math.random() * 600)
			},
			...record
		}
	}
}

export function updateWidget( record ) {
	return {
		type: WIDGET_CHANGED,
		record
	}
}

export function rmWidget( wid ) {
	return {
		type: WIDGET_RM,
		wid
	}
}
