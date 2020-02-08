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
