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

import React from 'react';

export default class index extends React.Component {
	render() {
		const { helmet, content, ssrErrors, css, state } = this.props,
		      htmlAttrs                                  = helmet && helmet.htmlAttributes.toComponent(),
		      bodyAttrs                                  = helmet && helmet.bodyAttributes.toComponent();
		return <React.Fragment>
			<html {...htmlAttrs}>
			<head>
				{helmet && helmet.title.toComponent()}
				{helmet && helmet.meta.toComponent()}
				{helmet && helmet.link.toComponent()}
				{helmet && helmet.script.toComponent()}
				
				{
					css && <style type="text/css" dangerouslySetInnerHTML={{ __html: css + '' }}/>
				}
				{ <link
					href="/App.css"
					rel="stylesheet"/> }
			</head>
			<body {...bodyAttrs}>
			<div id="app" dangerouslySetInnerHTML={{ __html: content }}>
			</div>
			{ssrErrors && <div id="ssrErrors" dangerouslySetInnerHTML={{ __html: ssrErrors }}/>}
			
			<script src="./App.js"></script>
			<script src="./App.vendors.js"></script>
			</body>
			</html>
		</React.Fragment>
	}
}
