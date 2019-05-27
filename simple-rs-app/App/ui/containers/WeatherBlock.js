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
import PropTypes                             from "prop-types";
import React                                 from "react";
import Fab                                   from '@material-ui/core/Fab';
import DeleteIcon                            from '@material-ui/icons/Delete';
import EditIcon                              from '@material-ui/icons/Edit';
import SaveIcon                              from '@material-ui/icons/Save';
import {reScope, scopeToProps, propsToScope} from "rscopes";
import WeatherSearch                         from "App/stores/WeatherSearch";
import WeatherInfos                          from "App/ui/components/WeatherInfos";


@reScope(
	{
		// will keep separate instances for each instance of WeatherWidget
		// WeatherSearch can still require stores in the parents scopes
		WeatherSearch
	}
)
// map the record location as the default value in the WeatherSearch store state
@propsToScope(
	[
		"record.location:WeatherSearch.defaultLocation",
		"record:WeatherSearch.record"
	])
// finally inject the stores
@scopeToProps("WeatherSearch")
export default class WeatherBlock extends React.Component {
	static propTypes = {
		record  : PropTypes.object.isRequired,
		editable: PropTypes.bool,
	};
	state            = {};
	
	toggleEdit   = () => {
		this.setState({ editing: !this.state.editing })
	};
	updateSearch = ( { target: { value: searching } } ) => {
		let {
			    $actions
		    }     = this.props,
		    state = this.state;
		this.setState({ searching });
		if ( searching.length > 2 )
			$actions.updateWeatherSearch(searching);
	};
	
	stopPropagation = e => e.stopPropagation();
	doClose         = e => {
		let {
			    record, onClose
		    } = this.props;
		onClose && onClose(record);
	};
	
	//componentDidUpdate( prevProps, prevState, snapshot ) {
	//	console.log(Object.keys(prevProps)
	//	                  .filter(key => (prevProps[key] !== this.props[key])))
	//	console.log(Object.keys(prevState)
	//	                  .filter(key => (prevState[key] !== this.state[key])))
	//}
	
	render() {
		let {
			    record, $actions, editable, WeatherSearch
		    }     = this.props,
		    state = this.state;
		//console.log('WeatherBlock::render:73: ', record._id);
		return (
			<div className={ "WeatherBlock" }>
				{
					!this.state.editing &&
					<React.Fragment>
						{
							WeatherSearch.results && <WeatherInfos weatherData={ WeatherSearch.results }/>
							|| WeatherSearch.fetching && "Loading...."
							|| "Edit me !"
						}
						{
							editable &&
							<React.Fragment>
								<Fab aria-label="edit" className={ "edit" }
								     onClick={ this.toggleEdit }>
									<EditIcon/>
								</Fab>
								<Fab aria-label="Delete" className={ "delete" }
								     onClick={ this.doClose }>
									<DeleteIcon/>
								</Fab>
							</React.Fragment>
						}
					</React.Fragment>
					||
					<React.Fragment>
						{
							<div className={ "search" }>
								<input type="text"
								       onChange={ this.updateSearch }
								       value={ state.searching !== undefined ? state.searching : record.location }
								       onMouseDown={ this.stopPropagation }/>
							</div>
						}
						{
							WeatherSearch.fetching && "Loading...." ||
							WeatherSearch.results && <WeatherInfos weatherData={ WeatherSearch.results }/>
						}
						
						<Fab aria-label="Save" className={ "save" }
						     editable={ record.fetching }
						     onClick={ this.toggleEdit }>
							<SaveIcon/>
						</Fab>
					</React.Fragment>
				}
			</div>
		);
	}
};