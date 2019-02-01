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
import React          from "react";
import {Rnd}          from "react-rnd";
import {connect}      from 'react-redux'
import WeatherInfos   from "../components/WeatherInfos.js";
import {selectPostIt} from "App/store/actions/updateAppState";
import {
	rmPostIt, newPostIt, updateWidget, weatherSearch, weatherResult
}                     from "App/store/actions/updateWidget";

@connect()
export default class WeatherWidget extends React.Component {
	
	state = {};
	
	saveState = ( e, d ) => {
		let { dispatch, record } = this.props;
		dispatch(updateWidget(
			{
				...record,
				size    : this.state.size || record.size,
				position: this.state.position || record.position
			}));
	};
	
	componentWillMount() {
		let { dispatch, record } = this.props;
		if ( record.location && !record.results )
			dispatch(weatherSearch(record, record.location))
	}
	
	render() {
		let {
			    record: { position, size } = {},
			    record,
			    dispatch, onSelect, selected
		    }     = this.props,
		    state = this.state;
		return (
			<Rnd
				style={ selected && { zIndex: 2000 } }
				size={ state.size || size }
				position={ state.position || position }
				onDragStop={ this.saveState }
				onResizeStop={ this.saveState }
				onDrag={ ( e, d ) => {
					!selected && onSelect(record)
					this.setState(
						{
							position: { x: d.x, y: d.y }
						});
				} }
				onResize={ ( e, direction, ref, delta, position ) => {
					this.setState(
						{
							position,
							size: {
								width : ref.offsetWidth,
								height: ref.offsetHeight
							}
						});
				} }>
				<div className={ "postit handle" }>
					{
						!this.state.editing &&
						<div className={ "text" }>
							{
								record.fetching && "Loading...."
								|| record.results && <WeatherInfos weatherData={ record.results }/>
								|| "Edit me !"
							}
							<button onClick={ e => this.setState({ editing: true }) }
							        className={ "edit" }>🖋
							</button>
							<button onClick={ e => dispatch(rmPostIt(record._id)) }
							        className={ "delete" }>🖾
							</button>
						</div>
						||
						<div className={ "editor" }>
							{
								<div className={ "search" }>
									<input type="text"
									       onChange={ e => {
										       this.setState({ searching: e.target.value });
										       if ( e.target.value.length > 2 )
											       dispatch(weatherSearch(record, e.target.value));
									       } }
									       value={ state.searching !== undefined ? state.searching : record.location }
									       onMouseDown={ e => e.stopPropagation() }/>
								</div>
							}
							{
								record.fetching && "Loading...." ||
								record.results && <WeatherInfos weatherData={ record.results }/>
							}
							<button
								disabled={ record.fetching }
								onClick={ e => this.setState({ editing: false }) }>💾
							</button>
						</div>
					}
				</div>
			</Rnd>
		);
	}
};