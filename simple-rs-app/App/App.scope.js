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
		"rkUQHZrqM": {
			"_id"     : "rkUQHZrqM",
			"location": "Lisbonne",
			"size"    : { "width": 350, "height": 400 },
			"position": { "x": 403, "y": 111 },
		},
		"YDNiVOf1j": {
			"_id"     : "YDNiVOf1j",
			"size"    : { "width": 350, "height": 400 },
			"position": { "x": 21, "y": 108 },
			"location": "paris"
		},
		"FkQ3V9Hcb": {
			"_id"     : "FkQ3V9Hcb",
			"size"    : { "width": 350, "height": 400 },
			"position": { "x": 771, "y": 108 },
			"location": "rome"
		},
		"bYNiMYG_0": {
			"_id"     : "bYNiMYG_0",
			"size"    : { "width": 514, "height": 329 },
			"position": { "x": 28, "y": 525 },
			"location": "marseille"
		},
		"5SJehewl2": {
			"_id"     : "5SJehewl2",
			"size"    : { "width": 563, "height": 328 },
			"position": { "x": 558, "y": 526 },
			"location": "montpellier"
		},
		// actions
		newWidget() {
			let w = {
				_id     : shortid.generate(),
				size    : { width: 350, height: 200 },
				position: {
					x: 100 + ~~(Math.random() * 600),
					y: 100 + ~~(Math.random() * 600)
				},
			};
			return {
				...this.nextState,
				[w._id]: w
			}
		},
		updateWidget( w ) {
			console.log(w)
			return {
				...this.nextState,
				[w._id]: w
			}
		},
		rmWidget( id ) {
			let ns = this.nextState;
			ns[id] = undefined;
			return { ...ns };
		}
	}
}