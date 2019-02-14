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

import React                 from 'react';
import MeteoWidget           from 'App/containers/MeteoWidget';
import {scopeToState, Scope} from "rscopes";
import {renderToString}      from "react-dom/server"

import "./App.scss"


@scopeToState(["appState", "someData"])
class App extends React.Component {
	
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