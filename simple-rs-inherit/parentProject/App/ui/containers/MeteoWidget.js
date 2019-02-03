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

import React                                 from "react";
import {Rnd}                                 from "react-rnd";
import {reScope, scopeToProps, propsToScope} from "rscopes";
import {asRef, asStore}                      from "rscopes/spells";

import MeteoInfos  from "../components/MeteoInfos";
import MeteoSearch from "App/stores/MeteoSearch";

@reScope(
	{
		// will keep separate instances for each instance of MeteoWidget
		// MeteoSearch can still require stores in the parents scopes
		MeteoSearch
	}, { key: 'postIt' }
)
// map the record location as the default value in the MeteoSearch store state
@propsToScope(["record.location:MeteoSearch.defaultLocation"])
// finally inject the stores
@scopeToProps(["MeteoSearch"])
export default class MeteoWidget extends React.Component {
	
	state = {};
	
	saveState = ( e, d ) => {
		let { $actions, MeteoSearch, record } = this.props;
		$actions.updatePostIt(
			{
				...record,
				location: MeteoSearch.location,
				size    : this.state.size || record.size,
				position: this.state.position || record.position
			});
	};
	
	render() {
		let {
			    record: { position, size } = {},
			    record,
			    MeteoSearch,
			    $actions, onSelect, selected
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
								MeteoSearch.fetching && "Loading...."
								|| MeteoSearch.results && <MeteoInfos weatherData={ MeteoSearch.results }/>
								|| "Edit me !"
							}
							<button onClick={ e => this.setState({ editing: true }) }
							        className={ "edit" }>🖋
							</button>
							<button onClick={ e => $actions.rmPostIt(record) }
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
										       $actions.updateSearch(e.target.value);
									       } }
									       value={ state.searching !== undefined ? state.searching : record.location }
									       onMouseDown={ e => e.stopPropagation() }/>
								</div>
							}
							{
								MeteoSearch.fetching && "Loading...." ||
								MeteoSearch.results && <MeteoInfos weatherData={ MeteoSearch.results }/>
							}
							<button
								disabled={ MeteoSearch.fetching }
								onClick={ e => this.setState({ editing: false }) }>💾
							</button>
						</div>
					}
				</div>
			</Rnd>
		);
	}
}