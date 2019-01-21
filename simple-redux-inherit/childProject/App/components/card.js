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
 *  @contact : caipilabs@gmail.com
 */

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