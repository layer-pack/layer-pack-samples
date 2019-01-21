import React, {Component} from 'react';
import {connect}          from 'react-redux'
import {rightChanged}     from '../actions/right'

class CardRight extends Component {
	
	render() {
		const { dispatch, right, left } = this.props
		return (
			<div className="col-right">
				<div className="app-link">
					<span>Right is: { String(right) }</span>
					<hr/>
					<span>Left is: { String(left) }</span>
					<hr/>
					<a href="#/" className="btn btn-twitter"
					   onClick={ (( e ) => {
						   dispatch(rightChanged())
					   }) }>
						Revert right to { String(!right) }
					</a>
				</div>
			</div>
		);
	}
}

function mapStateToProps( state ) {
	const { right } = state.rightChanged;
	const { left }  = state.leftChanged;
	
	return {
		right,
		left
	}
}

export default connect(mapStateToProps)(CardRight)