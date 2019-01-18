/*
 * Copyright (c)  2018 Wise Wild Web .
 *
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */

import React                 from 'react';
import shortid               from 'shortid';
import ReactDom              from 'react-dom';
import AppScope              from 'App/AppScope';
import MeteoWidget           from 'App/containers/MeteoWidget';
import {scopeToState, Scope} from "rscopes";
import {renderToString}      from "react-dom/server"

import "./App.scss"

const indexTpl = require('./index.html.tpl');

@scopeToState(["appState", "someData"])
class App extends React.Component {
	static renderTo  = ( node ) => {
		let cScope      = new Scope(AppScope, {
			id         : "App",
			autoDestroy: true
		});
		window.contexts = Scope.scopes;
		window.__scopesState && cScope.restore(window.__scopesState)
		cScope.mount(["appState", "someData"])
		      .then(
			      ( state ) => {
				      ReactDom.render(<App __scope={ cScope }/>, node);
			      }
		      )
	}
	static renderSSR = ( cfg, cb ) => {
		let rid    = shortid.generate(),
		    cScope = new Scope(AppScope, {
			    id         : rid,
			    autoDestroy: false
		    });
		cfg.state && cScope.restore(cfg.state, { alias: "App" })
		cScope.once('destroy', d => console.log('destroy ', rid, '; active ctx :', Object.keys(Scope.scopes)))
		cScope.mount(["appState", "someData"])
		      .then(
			      ( state ) => {
				      let html,
				          appHtml = renderToString(<App __scope={ cScope }/>),
				          nstate,
				          stable  = cScope.isStableTree();
				
				      cScope.onceStableTree(state => {
					      try {
						      html = indexTpl.render(
							      {
								      app  : appHtml,
								      state: JSON.stringify(nstate = cScope.serialize({ alias: "App" }))
							      }
						      );
					      } catch ( e ) {
						      return cb(e)
					      }
					      console.log('Was ', stable ? 'stable' : 'not stable', nstate);
					      cb(null, html, !stable && nstate)
					      cScope.destroy()
				      })
			      }
		      );
	}
	
	render() {
		let {
			    someData, appState
		    } = this.state;
		return <React.Fragment>
			<h1>Really basic drafty rescope SSR example</h1>
			{
				someData.items.map(
					note => <MeteoWidget key={ note._id } record={ note }
					                     onSelect={ e => this.$actions.selectPostIt(note._id) }
					                     selected={ note._id == appState.selectedPostItId }/>
				)
			}
			<div
				className={ "newBtn button" }
				onClick={ this.$actions.newPostIt }>
				Add Post It
			</div>
			<div
				className={ "saveBtn button" }
				onClick={ this.$actions.saveState }>
				Save state
			</div>
		</React.Fragment>
	}
}


if ( typeof window != 'undefined' ) {
	window.App = App;
}
export default App