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
export default {
	
	appState: {
		src             : "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
		selectedWidgetId: null
	},
	widgets : {
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
		}]
	},
}