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

import React                                      from 'react';
import Home                                       from './ui/pages/Home';
import Settings                                   from './ui/pages/Settings';
import {BrowserRouter, StaticRouter, Route, Link} from "react-router-dom";
import AppBar                                     from '@material-ui/core/AppBar';
import Toolbar                                    from '@material-ui/core/Toolbar';
import IconButton                                 from '@material-ui/core/IconButton';
import Typography                                 from '@material-ui/core/Typography';
import SettingsIcon                               from '@material-ui/icons/Settings';
import HomeIcon                                   from '@material-ui/icons/Home';
import "./ui/styles/index.scss"




export default class App extends React.Component {
	state = {};
	
	render() {
		let Router = BrowserRouter;
		if ( this.props.location )
			Router = StaticRouter;
		return <Router location={ this.props.location }>
			<React.Fragment>
				<AppBar position="static" className={ "AppBar" }>
					<Toolbar>
						<Typography cvariant="h6" color="inherit" noWrap>
							Weather desk
						</Typography>
						<div className={ "tools" }>
							<Link to={ "/" } className={ "homeBtn" }>
								<IconButton aria-label="home"
								            color="inherit">
									<HomeIcon/>
								</IconButton>
							</Link>
							
							<Link to={ "/settings" } className={ "settingsBtn" }>
								<IconButton aria-label="settings"
								            color="inherit">
									<SettingsIcon/>
								</IconButton>
							</Link>
						</div>
					</Toolbar>
				</AppBar>
				
				
				<Route path="/" exact component={ Home }/>
				<Route path="/settings" component={ Settings }/>
			</React.Fragment>
		</Router>
	}
}
