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
import App              from "App/App"
import configureStore   from 'App/store/configure'
import initialState     from 'App/store/initialState'
import React            from "react";
import ReactDom         from 'react-dom';
import {renderToString} from "react-dom/server";
import {hot}            from 'react-hot-loader/root'
import {Provider}       from 'react-redux'

const ctrl = {
	renderTo( node, initialState = {} ) {
		const store  = configureStore(initialState),
		      isDev  = process.env.NODE_ENV !== 'production',
		      HMRApp = isDev ? hot(App) : App;
		
		ReactDom.render(
			<Provider store={store}>
				<HMRApp/>
			</Provider>
			, node);
		
		if ( process.env.NODE_ENV !== 'production' && module.hot ) {
			module.hot.accept(
				'App/App',
				m => {
					var NextApp = hot(require('App/App.js').default);
					
					ReactDom.render(
						<Provider store={store}>
							<NextApp/>
						</Provider>
						, node);
				}
			)
		}
	},
	renderSSR: ( { state, location, indexTpl }, cb ) => {
		const store = configureStore(state || initialState)
		let content = "", html, preloadedState;
		
		try {
			content        = renderToString(
				<Provider store={store}>
					<App location={location}/>
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
			
			html = indexTpl.render(
				{
					app  : `<div class="error">${e + ""}<br><pre>${e.stack + ""}</pre></div>`,
					state: "{}"
				}
			);
		}
		cb(null, html)
	}
}
if ( typeof window !== 'undefined' )
	window.App = ctrl;

export default ctrl;

