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
import {hot}            from 'react-hot-loader/root'
import App              from "App/App"
import ReactDom         from 'react-dom';
import React            from "react";
import {renderToString} from "react-dom/server";
import {Provider}       from 'react-redux'
import configureStore   from './configureStore'
import initialState     from './initialState'

const indexTpl = require('./index.html.tpl');


const ctrl = {
	renderTo( node, initialState = {} ) {
		const store  = configureStore(initialState),
		      isDev  = process.env.NODE_ENV !== 'production',
		      HMRApp = isDev ? hot(App) : App;
		
		ReactDom.render(
			<Provider store={ store }>
				<HMRApp/>
			</Provider>
			, node);
		
		if ( process.env.NODE_ENV !== 'production' && module.hot ) {
			module.hot.accept('./App', m => renderTo(node, initialState))
		}
	},
	renderSSR( { state }, cb ) {
		const store = configureStore(state || initialState)
		let content = "", html, preloadedState;
		
		try {
			content        = renderToString(
				<Provider store={ store }>
					<App/>
				</Provider>
			);
			preloadedState = store.getState();
			html           = indexTpl.render(
				{
					app  : content,
					state: JSON.stringify(preloadedState)
				}
			);
		} catch ( e ) {
			return cb(e)
		}
		cb(null, html)
	}
}
//if (module.hot) {
//	module.hot.accept();
//}
//
// add these lines
//if (module.hot && process.env.NODE_ENV !== 'production') {
//	module.hot.accept();
//}

//if ( module.hot ) {
//	// Support hot reloading of components
//	// and display an overlay for runtime errors
//	//const renderApp = render;
//	//
//	//render = () => {
//	//		renderApp();
//	//};
//
//	module.hot.accept("./reducers/*.js", () => {
//		//setTimeout(render);
//		const nextRootReducer = combineReducers(preCombine(Object.keys(reducers)))
//		store.replaceReducer(nextRootReducer)
//		console.log('do reload on store change')
//	});
//}
if ( typeof window !== 'undefined' )
	window.App = ctrl;

export default ctrl;

