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

import React                     from 'react';
import {connect}                 from 'react-redux'
import {selectPostIt, saveState} from "App/actions/updateAppState";
import {newPostIt}               from "App/actions/updateWidget";
import WeatherWidget             from 'App/containers/WeatherWidget.js';
import "./App.scss"

@connect(( { someData, appState } ) => ({ someData, appState }))
export default class App extends React.Component {
	render() {
		let { someData = { items: [] }, appState, dispatch } = this.props;
		return <React.Fragment>
			<h1>Minimal drafty redux sample</h1>
			{
				someData.items.map(
					note => <WeatherWidget key={ note._id } record={ note }
					                       onSelect={ e => dispatch(selectPostIt(note._id)) }
					                       selected={ note._id == appState.selectedPostItId }/>
				)
			}
			<div
				className={ "newBtn button" }
				onClick={ e => dispatch(newPostIt()) }>
				Add Post It
			</div>
			<div
				className={ "saveBtn button" }
				onClick={ e => dispatch(saveState()) }>
				Save state
			</div>
		</React.Fragment>
	}
}

