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
		}
	},
	@asStore
	widgets : {
		// initial state
		items: [{
			"_id"     : "rkUQHZrqM",
			"location": "paris",
			"size"    : { "width": 350, "height": 200 },
			"position": { "x": 321, "y": 167 }
		}, {
			"_id"     : "r1bcuMrcM",
			"location": "rio",
			"size"    : { "width": 350, "height": 200 },
			"position": { "x": 260, "y": 576 }
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
		rmWidget( widget ) {
			return {
				items: this.nextState.items
				           .filter(
					           it => (it._id !== widget._id)
				           )
			}
		},
		saveState() {
			superagent.post('/', this.scopeObj.serialize())
			          .then(( e, r ) => {
				          console.log(e, r)
			          })
		}
	}
}