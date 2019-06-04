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


import {reScope, scopeToProps, Store} from "rscopes";
import {asRef, asStore}               from "rscopes/spells";
import superagent                     from "superagent";

export default class WeatherSearch extends Store {
	static state   = {
		
		// initial state value
		src       : "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
		autoUpdate: 1000 * 10
	};
	static actions = {
		updateWeatherSearch( location ) {
			if ( location.length < 4 )
				return { location };
			
			return { location };
		}
	};
	
	constructor() {
		super(...arguments);
		this._refreshTm = setInterval(this.checkUpdate, 1000 * 10);
	}
	
	checkUpdate = () => {
		let { location, fetched } = this.data;
		if ( location && fetched < (Date.now() - 1000 * 60) ) {
			this.doSearch(location)
		}
	}
	
	destroy() {
		super.destroy();
		clearInterval(this._refreshTm);
	}
	
	apply( data = {}, state, { location, results, record } ) {
		location = location || state.defaultLocation;
		
		if ( location == data.location && data.results )
			return data;
		
		// do query weather if needed
		if ( location ) {
			this.doSearch(location)
			
			return { location, fetching: true };
		}
		
		return data;
	}
	
	doSearch( location ) {
		let state = this.nextState;
		this.wait();// so the whole scope tree will wait for SSR
		superagent
			.get(state.src + location)
			.then(( res ) => {
				if ( location !== this.data.location )
					return;
				
				// update the store data
				this.push({ results: res.body, location, fetching: false, fetched: Date.now() });
				
				// update the record location
				state.record && this.$actions.$parent.updateWidget(
					{
						...state.record,
						location
					});
			})
			// release anyway
			.then(e => this.release())
			.catch(e => this.release())
		
		this.push({ location, fetching: true });
	}
}