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
import "core-js";
import React            from "react";
import ReactDom         from 'react-dom';
import {renderToString} from "react-dom/server";
import {Helmet}         from "react-helmet";
import {hot}            from 'react-hot-loader/root'
import "regenerator-runtime/runtime";
import Index            from "./index.html";


const ctrl = {
	renderTo( node, initialState = {} ) {
		const isDev  = process.env.NODE_ENV !== 'production',
		      App    = require('App/App.js').default,
		      HMRApp = isDev ? hot(App) : App;
		
		ReactDom.render(
			<HMRApp/>
			, node);
		
		if ( process.env.NODE_ENV !== 'production' && module.hot ) {
			module.hot.accept('App/App.js', m => {
				let NextApp = hot(require('App/App.js').default);
				
				ReactDom.render(
					<NextApp/>
					, node);
			})
		}
	},
	renderSSR( { state, tpl }, cb ) {
		let content = "",
		    App     = require('App/App.js').default,
		    html;
		
		try {
			content = renderToString(<App/>);
			html    = "<!doctype html>\n" + renderToString(<Index helmet={Helmet.renderStatic()} content={content}/>);
		} catch ( e ) {
			return cb(e)
		}
		cb(null, html)
	}
}

export default ctrl;

