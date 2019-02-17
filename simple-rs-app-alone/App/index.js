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
import AppScope         from './App.scope';
import shortid          from 'shortid';
import ReactDom         from 'react-dom';
import React            from "react";
import {renderToString} from "react-dom/server";
import {Scope, reScope} from "rscopes";


const ctrl = {
	renderTo( node, state ) {
		let cScope      = new Scope(AppScope, {
			    id         : "App",
			    autoDestroy: true
		    }),
		    App         = reScope(cScope)(require('./App').default);
		window.contexts = Scope.scopes;
		state && cScope.restore(state);
		ReactDom.render(<App/>, node);
		
		if ( process.env.NODE_ENV !== 'production' && module.hot ) {
			module.hot.accept('App/App', () => {
				ReactDom.render(<App/>, node)
				ctrl.renderTo(node, state)
			});
			module.hot.accept('App/App.scope', () => {
				cScope.register(AppScope)
			});
		}
	},
	renderSSR( cfg, cb, _attempts = 0 ) {
		let rid     = shortid.generate(),
		    cScope  = new Scope(AppScope, {
			    id         : rid,
			    autoDestroy: false
		    }), App = reScope(cScope)(require('./App').default);
		
		cfg.state && cScope.restore(cfg.state, { alias: "App" });
		
		let html,
		    appHtml = renderToString(<App location={ cfg.location }/>),
		    stable  = cScope.isStableTree();
		
		cScope.onceStableTree(state => {
			let nstate = cScope.serialize({ alias: "App" });
			if ( !stable && _attempts < 3 ) {
				ctrl.renderSSR({}, cb, ++_attempts);
			}
			else {
				try {
					html = cfg.tpl.render(
						{
							app  : appHtml,
							state: JSON.stringify(nstate)
						}
					);
				} catch ( e ) {
					return cb(e)
				}
				cb(null, html, !stable && nstate)
			}
			cScope.destroy()
		})
	}
}

export default ctrl;