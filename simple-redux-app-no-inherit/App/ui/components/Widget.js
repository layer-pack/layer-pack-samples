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
import PropTypes from "prop-types";
import React     from "react";
import {Rnd}     from "react-rnd";


const resizeHandles = {
	bottom     : true,
	bottomLeft : true,
	bottomRight: true,
	left       : true,
	right      : true,
	top        : true,
	topLeft    : true,
	topRight   : true,
};

export default class Widget extends React.Component {
	static propTypes    = {
		selected       : PropTypes.bool,
		editable       : PropTypes.bool,
		record         : PropTypes.object.isRequired,
		onWidgetUpdated: PropTypes.func,
		onSelect       : PropTypes.func
	};
	static defaultProps = {
		editable       : true,
		onWidgetUpdated: ( state ) => false,
		onSelect       : ( state ) => false
	};
	state               = {};
	
	saveState = ( e, d ) => {
		let { onWidgetUpdated, record } = this.props;
		onWidgetUpdated(
			{
				...record,
				size    : this.state.size || record.size,
				position: this.state.position || record.position
			}
		);
	};
	
	select = ( e, d ) => {
		let {
			    record,
			    onSelect, selected
		    } = this.props;
		!selected && onSelect(record)
	};
	
	drag = ( e, d ) => {
		let {
			    record,
			    onSelect, selected
		    } = this.props;
		!selected && onSelect(record)
		this.setState(
			{
				position: { x: d.x, y: d.y }
			});
	};
	
	resize = ( e, direction, ref, delta, position ) => {
		this.setState(
			{
				position,
				size: {
					width : ref.offsetWidth,
					height: ref.offsetHeight
				}
			});
	};
	
	render() {
		let {
			    record: { position, size } = {},
			    children, editable, selected
		    }     = this.props,
		    state = this.state;
		return (
			<Rnd
				className={"Widget"}
				disableDragging={!editable}
				enableResizing={editable && resizeHandles}
				style={{ zIndex: selected ? 2000 : 1 }}
				size={state.size || size}
				position={state.position || position}
				onDragStop={this.saveState}
				onResizeStop={this.saveState}
				onDrag={this.drag}
				onResize={this.resize}
				onClick={this.select}>
				<div className={"content"}>
					{children}
				</div>
			</Rnd>
		);
	}
};