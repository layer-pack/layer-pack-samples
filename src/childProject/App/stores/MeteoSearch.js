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
 *  @contact : caipilabs@gmail.com
 */


import {reScope, scopeToProps, Store} from "rscopes";
import {asRef, asStore}               from "rscopes/spells";
import superagent                     from "superagent";

export default class MeteoSearch extends Store {
	static state   = {
		
		// initial state value
		src: "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
		
	};
	static actions = {
		updateSearch( location ) {
			if ( location.length < 4 )
				return { location };
			
			return { location };
		}
		
	};
	
	apply( data = {}, state, { location, results, record } ) {
		location = location || state.defaultLocation;
		
		if ( location == data.location && data.results )
			return data;
		
		// do query meteo if needed
		if ( location ) {
			
			this.wait();// so the whole scope tree will wait for SSR
			
			superagent
				.get(state.src + location)
				.then(( res ) => {
					
					if ( location !== this.data.location )
						return;
					
					// update the store data
					this.push({ results: res.body, location });
					
					// update the record location
					this.$actions.updatePostIt(
						{
							...state.record,
							location
						});
				})
				// release anyway
				.then(e => this.release())
				.catch(e => this.release())
			
			return { location, fetching: true };
		}
		
		return data;
	}
}