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
import PropTypes      from "prop-types";
import React          from "react";
import {Rnd}          from "react-rnd";
import {connect}      from 'react-redux'
import {selectWidget} from "App/store/actions/updateWidget";
import {
	rmWidget, newWidget, updateWidget
}                     from "App/store/actions/updateWidget";


@connect()
export default class Widget extends React.Component {
	static propTypes = {
		selected: PropTypes.bool,
		disabled: PropTypes.bool,
		record  : PropTypes.object.isRequired,
		onSelect: PropTypes.func
	};
	state            = {};
	
	saveState = ( e, d ) => {
		let { dispatch, record } = this.props;
		dispatch(updateWidget(
			{
				...record,
				size    : this.state.size || record.size,
				position: this.state.position || record.position
			}));
	};
	
	render() {
		let {
			    record: { position, size } = {},
			    record, children, disabled,
			    dispatch, onSelect, selected
		    }     = this.props,
		    state = this.state;
		return (
			<Rnd
				className={ "Widget" }
				disableDragging={ !!disabled }
				enableResizing={ disabled }
				//dragHandleClassName={ "handle" }
				style={ selected ? { zIndex: 2000 } : undefined }
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
				<div className={ " content" }>
					{ children }
				</div>
			</Rnd>
		);
	}
};