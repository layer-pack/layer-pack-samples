import React, { Component } from 'react';
import { connect } from 'react-redux'
import { leftChanged } from '../redux/left-actions'

class CardLeft extends Component {
	render() {
		const { dispatch, left, right } = this.props
		return (
			<div className="col-left">
				<span>Left is: {String(left)}</span>
				<hr />
				<span>Right is: {String(right)}</span>
				<hr/>
				<a className="btn"
				   onClick={((e) => { dispatch(leftChanged()) })} target="_blank">
					Revert left to {String(!left)}</a>
			</div>
		);
	}
	
}

function mapStateToProps(state) {
	const { right } = state.rightChanged;
	const { left } = state.leftChanged;
	
	return {
		right,
		left
	}
}

export default connect(mapStateToProps)(CardLeft)