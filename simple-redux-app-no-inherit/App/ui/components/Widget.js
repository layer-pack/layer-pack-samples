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