/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */
import React              from "react";
import ReactDom           from 'react-dom';
import {renderToString}   from "react-dom/server";
import {Helmet}           from "react-helmet";
import {Scope, withScope} from "react-scopes";
import shortid            from 'shortid';
import Index              from "./index.html";
import AppScope           from './scopes/App';

const ctrl = {
	renderTo( node, state ) {
		let cScope = new Scope(AppScope, {
			    id         : "App",
			    autoDestroy: true
		    }),
		    App    = withScope(cScope)(require('./App').default);
		
		if ( window.__STATE__ )
			cScope.restore(window.__STATE__);
		
		ReactDom.render(<App/>, node);
		
		if ( process.env.NODE_ENV !== 'production' && module.hot ) {
			module.hot.accept('./App', () => {
				state = cScope.serialize({ alias: "App" });
				cScope.destroy();
				cScope = new Scope(AppScope, {
					id         : "App",
					autoDestroy: true
				});
				App    = withScope(cScope)(require('./App').default);
				cScope.restore(state);
				ReactDom.render(<App/>, node);
			});
			module.hot.accept('./scopes/App', () => {
				cScope.register(AppScope)
			});
		}
	},
	renderSSR( cfg, cb, _attempts = 0 ) {
		let rid     = shortid.generate(),
		    cScope  = new Scope(AppScope, {
			    id         : rid,
			    autoDestroy: false
		    }), App = withScope(cScope)(require('./App').default);
		
		if ( cfg.state ) {
			cScope.restore(cfg.state, { alias: "App" });
		}
		
		let html,
		    appHtml = renderToString(<App location={cfg.location}/>),
		    stable  = cScope.isStableTree();
		
		
		cScope.onceStableTree(state => {
			let nstate = cScope.serialize({ alias: "App" });
			cScope.destroy()
			if ( !_attempts || !stable && _attempts < 3 ) {
				cfg.state = nstate;
				ctrl.renderSSR(cfg, cb, ++_attempts);
			}
			else {
				try {
					html = "<!doctype html>\n" +
						renderToString(<Index
							helmet={Helmet.renderStatic()}
							css={cfg.css}
							state={nstate}
							content={appHtml}/>);
					
				} catch ( e ) {
					return cb(e)
				}
				cb(null, html)
			}
		})
	}
}
export default ctrl;