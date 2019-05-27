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
import PropTypes    from "prop-types";
import React        from "react";
import Fab          from '@material-ui/core/Fab';
import DeleteIcon   from '@material-ui/icons/Delete';
import EditIcon     from '@material-ui/icons/Edit';
import SaveIcon     from '@material-ui/icons/Save';
import {connect}    from 'react-redux'
import WeatherInfos from "../components/WeatherInfos.js";
import {
	weatherSearch
}                   from "App/store/actions/updateAppState";
import {
	rmWidget
}                   from "App/store/actions/updateWidget";

@connect()
export default class WeatherBlock extends React.Component {
	static propTypes = {
		record  : PropTypes.object.isRequired,
		editable: PropTypes.bool,
	};
	state            = {};
	
	componentWillMount() {
		let { dispatch, record } = this.props;
		if ( record.location && !record.results )
			dispatch(weatherSearch(record, record.location))
		
		this._refreshTm = setInterval(this.checkUpdate, 1000 * 10);
	}
	
	componentWillUnmount() {
		clearInterval(this._refreshTm);
	}
	
	checkUpdate = () => {
		let { dispatch, record } = this.props;
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
			    editable
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
			<div className={ "WeatherBlock" }>
				{
					!editing &&
					<React.Fragment>
						{
							record.results && <WeatherInfos weatherData={ record.results }/>
							|| record.fetching && "Loading...."
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
								       value={ searching !== undefined ? searching : record.location }
								       onMouseDown={ this.stopPropagation }/>
							</div>
						}
						
						{
							record.fetching && "Loading...." ||
							record.results && <WeatherInfos weatherData={ record.results }/>
						}
						
						<Fab aria-label="Save" className={ "save" }
						     disabled={ record.fetching }
						     onClick={ this.toggleEdit }>
							<SaveIcon/>
						</Fab>
					</React.Fragment>
				}
			</div>
		);
	}
};