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
import Fab          from '@material-ui/core/Fab';
import DeleteIcon   from '@material-ui/icons/Delete';
import EditIcon     from '@material-ui/icons/Edit';
import SaveIcon     from '@material-ui/icons/Save';
import Actions      from "App/store/actions";
import PropTypes    from "prop-types";
import React        from "react";
import {connect}    from 'react-redux'
import WeatherInfos from "../components/WeatherInfos.js";

@connect(state => ({}), Actions.appState)
export default class WeatherBlock extends React.Component {
	static propTypes = {
		record  : PropTypes.object.isRequired,
		editable: PropTypes.bool,
	};
	state            = {};
	
	componentWillMount() {
		let { dispatch, record, weatherSearch } = this.props;
		if ( record.location && !record.results )
			dispatch(weatherSearch(record, record.location))
		
		this._refreshTm = setInterval(this.checkUpdate, 1000 * 10);
	}
	
	componentWillUnmount() {
		clearInterval(this._refreshTm);
	}
	
	checkUpdate = () => {
		let { dispatch, record, weatherSearch } = this.props;
		if ( record.location && record.fetched < (Date.now() - 1000 * 60) )
			dispatch(weatherSearch(record, record.location))
	}
	
	toggleEdit   = () => {
		this.setState({ editing: !this.state.editing })
	};
	updateSearch = ( { target: { value: searching } } ) => {
		let {
			    record,
			    dispatch,
			    weatherSearch
		    } = this.props;
		
		this.setState({ searching });
		if ( searching.length > 2 )
			dispatch(weatherSearch(record, searching));
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
			    record,
			    dispatch,
			    editable, onClose
		    }                      = this.props,
		    { editing, searching } = this.state;
		return (
			<div className={"WeatherBlock"}>
				{
					!editing &&
					<React.Fragment>
						{
							record.results && <WeatherInfos weatherData={record.results}/>
							|| record.fetching && "Loading...."
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
								       value={searching !== undefined ? searching : record.location}
								       onMouseDown={this.stopPropagation}/>
							</div>
						}
						
						{
							record.fetching && "Loading...." ||
							record.results && <WeatherInfos weatherData={record.results}/>
						}
						
						<Fab aria-label="Save" className={"save"}
						     disabled={record.fetching}
						     onClick={this.toggleEdit}>
							<SaveIcon/>
						</Fab>
					</React.Fragment>
				}
			</div>
		);
	}
};