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

import superagent from "superagent";
import shortid    from "shortid";

export const WIDGET_CHANGED        = 'WIDGET_CHANGED'
export const WIDGET_NEW            = 'WIDGET_NEW'
export const WIDGET_RM             = 'WIDGET_RM'
export const METEO_SEARCHING       = 'METEO_SEARCHING'
export const METEO_SEARCH_COMPLETE = 'METEO_SEARCH_COMPLETE'

// actions
export function newPostIt() {
	return {
		type  : WIDGET_NEW,
		record: {
			_id     : shortid.generate(),
			size    : { width: 350, height: 200 },
			position: {
				x: 100 + ~~(Math.random() * 600),
				y: 100 + ~~(Math.random() * 600)
			},
		}
	}
}

export function updateWidget( record ) {
	return {
		type: WIDGET_CHANGED,
		record
	}
}

export function rmPostIt( wid ) {
	return {
		type: WIDGET_RM,
		wid
	}
}

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
				
				dispatch(updateWidget(
					{
						...record,
						fetching: false,
						results : res.body,
						location
					}));
			})
			.catch(e => {
				
				dispatch(updateWidget(
					{
						...record,
						fetching: false,
					}));
			})
	};
}
