/*
 *
 * Copyright (C) 2019 Nathanael Braun
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import PropTypes                                      from "prop-types";
import React                                          from "react";
import Fab                                            from '@material-ui/core/Fab';
import DeleteIcon                                     from '@material-ui/icons/Delete';
import EditIcon                                       from '@material-ui/icons/Edit';
import SaveIcon                                       from '@material-ui/icons/Save';
import {reScope, scopeToProps, propsToScope, asScope} from "rscopes";
import WeatherSearch                                  from "App/stores/WeatherSearch";
import WeatherInfos                                   from "App/ui/components/WeatherInfos";


@reScope(
	{
		@asScope
		weather: {
			// will keep separate instances for each instance of WeatherWidget
			// WeatherSearch can still require stores in the parents scopes
			WeatherSearch
		}
	}
)
// map the record location as the default value in the WeatherSearch store state
@propsToScope(
	[
		"record.location:weather.WeatherSearch.defaultLocation",
		"record:weather.WeatherSearch.record"
	])
// finally inject the stores
@scopeToProps("weather.WeatherSearch")
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
			$actions.weather.updateWeatherSearch(searching);
	};
	
	stopPropagation = e => e.stopPropagation();
	doClose         = e => {
		let {
			    record, onClose
		    } = this.props;
		onClose && onClose(record);
	};
	
	
	render() {
		let {
			    record, $actions, editable, WeatherSearch
		    }     = this.props,
		    state = this.state;
		return (
			<div className={"WeatherBlock"}>
				{
					!this.state.editing &&
					<React.Fragment>
						{
							WeatherSearch.results && <WeatherInfos weatherData={WeatherSearch.results}/>
							|| WeatherSearch.fetching && "Loading...."
							|| "Edit me !"
						}
						{
							editable &&
							<React.Fragment>
								<Fab aria-label="edit" className={"edit"}
								     onClick={this.toggleEdit}>
									<EditIcon/>
								</Fab>
								<Fab aria-label="Delete" className={"delete"}
								     onClick={this.doClose}>
									<DeleteIcon/>
								</Fab>
							</React.Fragment>
						}
					</React.Fragment>
					||
					<React.Fragment>
						{
							<div className={"search"}>
								<input type="text"
								       onChange={this.updateSearch}
								       value={state.searching !== undefined ? state.searching : record.location}
								       onMouseDown={this.stopPropagation}/>
							</div>
						}
						{
							WeatherSearch.fetching && "Loading...." ||
							WeatherSearch.results && <WeatherInfos weatherData={WeatherSearch.results}/>
						}
						
						<Fab aria-label="Save" className={"save"}
						     editable={record.fetching}
						     onClick={this.toggleEdit}>
							<SaveIcon/>
						</Fab>
					</React.Fragment>
				}
			</div>
		);
	}
};