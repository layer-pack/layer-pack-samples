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

import React                   from "react";
import moment                  from "moment";
import {reScope, scopeToProps} from "rscopes";
import {asRef, asStore}        from "rscopes/spells";


export default ( { weatherData } ) =>
	<div className={ "MeteoInfos" }>
		<div className={ "location" }>
			{ weatherData.name }&nbsp;
			(&nbsp;
			{
				weatherData.weather[0] &&
				weatherData.weather[0].description
			}
			&nbsp;)
		</div>
		<div className={ "picto" }>
			{
				weatherData.weather[0] &&
				<img
					src={ "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + '.png' }></img>
			}
		</div>
		<div className={ "infos" }>
			<div className={ "dt" }>
			</div>
			<div className={ "dt" }>{ moment(weatherData.dt * 1000).format('MMMM Do YYYY, h:mm:ss a') }</div>
			<div className={ "wind" }>{ weatherData.wind.speed }mh</div>
		</div>
	</div>;