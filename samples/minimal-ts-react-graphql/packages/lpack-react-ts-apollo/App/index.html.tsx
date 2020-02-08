/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */

// Server-side HTML render

// Component to render the full HTML response in React

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from "react";
import {HelmetData} from "react-helmet";

// ----------------------------------------------------------------------------

// Types

export interface IHtmlProps {
    css?: string;
    helmet: HelmetData;
    html: string;
    scripts: string[];
    styles?: Array<React.ReactElement<{}>>;
    window?: {
        [key: string]: object;
    };
}

export default class Html extends React.PureComponent<IHtmlProps> {
    public render() {
        const {helmet, content, ssrErrors, css, state} = this.props,
            htmlAttrs = helmet && helmet.htmlAttributes.toComponent(),
            bodyAttrs = helmet && helmet.bodyAttributes.toComponent();
        return <React.Fragment>
            <html {...htmlAttrs}>
            <head>
                {helmet && helmet.title.toComponent()}
                {helmet && helmet.meta.toComponent()}
                {helmet && helmet.link.toComponent()}
                {helmet && helmet.script.toComponent()}
                {
                    state &&
					<script dangerouslySetInnerHTML={{__html: "window.__APOLLO__  = " + (JSON.stringify(state))}}/>
                }
                {
                    css && <style type="text/css" dangerouslySetInnerHTML={{__html: css + ''}}/>
                }
            </head>
            <body {...bodyAttrs}>
            <div id="root" dangerouslySetInnerHTML={{__html: content}}>
            </div>
            {ssrErrors && <div id="ssrErrors" dangerouslySetInnerHTML={{__html: ssrErrors}}/>}

            <script src="./App.js"></script>
            <script src="./App.vendors.js"></script>
            </body>
            </html>
        </React.Fragment>
    }
}
