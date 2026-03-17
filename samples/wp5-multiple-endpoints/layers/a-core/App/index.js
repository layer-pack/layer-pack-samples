/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/**
 * @file Client/SSR controller for the core layer.
 *
 * Provides renderTo() for client-side mounting and renderSSR() for
 * server-side rendering. Uses React 18 createRoot/hydrateRoot APIs.
 * The "App/App.js" import resolves through the layer chain, so
 * endpoint layers can override App.js via layer-pack inheritance.
 */
import React            from "react";
import {createRoot, hydrateRoot} from 'react-dom/client';
import {renderToString} from "react-dom/server";
import {Helmet}         from "react-helmet";
import Index            from "./index.html";


const ctrl = {
	renderTo( node, initialState = {} ) {
		const App = require('App/App.js').default;

		if ( node.innerHTML ) {
			hydrateRoot(node, <App/>);
		} else {
			const root = createRoot(node);
			root.render(<App/>);
		}

		if ( process.env.NODE_ENV !== 'production' && module.hot ) {
			module.hot.accept('App/App', () => {
				const NextApp = require('App/App').default;
				const root = createRoot(node);
				root.render(<NextApp/>);
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
