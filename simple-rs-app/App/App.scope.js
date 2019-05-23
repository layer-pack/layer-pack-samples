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
import rscopes, {
	spells
}                 from "rscopes";

let { asStore, asScope } = spells;


export default {
	@asStore
	appState: {
		selectedWidgetId: "rkUQHZrqM",
		selectWidget( selectedWidgetId ) {
			return { selectedWidgetId };
		},
		saveState() {
			superagent.post('/', this.scopeObj.serialize())
			          .then(( e, r ) => {
				          console.log(e, r)
			          })
		}
	},
	@asStore
	widgets : {
		// initial state
		items: [{
			"_id"     : "rkUQHZrqM",
			"location": "Lisbonne",
			"size"    : { "width": 350, "height": 400 },
			"position": { "x": 403, "y": 111 },
		}, {
			"_id"     : "YDNiVOf1j",
			"size"    : { "width": 350, "height": 400 },
			"position": { "x": 21, "y": 108 },
			"location": "paris"
		}, {
			"_id"     : "FkQ3V9Hcb",
			"size"    : { "width": 350, "height": 400 },
			"position": { "x": 771, "y": 108 },
			"location": "rome"
		}, {
			"_id"     : "bYNiMYG_0",
			"size"    : { "width": 514, "height": 329 },
			"position": { "x": 28, "y": 525 },
			"location": "marseille"
		}, {
			"_id"     : "5SJehewl2",
			"size"    : { "width": 563, "height": 328 },
			"position": { "x": 558, "y": 526 },
			"location": "montpellier"
		}],
		
		// actions
		newWidget() {
			return {
				items: [...this.nextState.items, {
					_id     : shortid.generate(),
					size    : { width: 350, height: 200 },
					position: {
						x: 100 + ~~(Math.random() * 600),
						y: 100 + ~~(Math.random() * 600)
					},
				}]
			}
		},
		updateWidget( widget ) {
			return {
				items: this.nextState.items
				           .map(
					           it => (it._id === widget._id)
					                 ? widget
					                 : it
				           )
			}
		},
		rmWidget( id ) {
			return {
				items: this.nextState.items
				           .filter(
					           it => (it._id !== id)
				           )
			}
		}
	}
}