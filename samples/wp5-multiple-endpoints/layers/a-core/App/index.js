/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
import React            from "react";
import ReactDom         from 'react-dom';
import {renderToString} from "react-dom/server";
import {Helmet}         from "react-helmet";
import {hot}            from 'react-hot-loader/root'
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
			module.hot.accept('App/App', m => {
				let NextApp = hot(require('App/App').default);
				
				ReactDom[node.innerHTML ? "hydrate" : "render"](
								<NextApp/>
					,
					node
				);
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
			html = "<!doctype html>\n" + renderToString(<Index ssrErrors={`<pre>${e}\n${e.stack}</pre>`}/>);
		}
		cb(null, html)
	}
}

export default ctrl;

