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
import "core-js";
import React from "react";
import ReactDom from 'react-dom';
import {renderToString} from "react-dom/server";
import {Helmet} from "react-helmet";
import {hot} from 'react-hot-loader/root'
import "regenerator-runtime/runtime";
import Index from "./index.html.tsx";

// The `Context` type for the Koa HTTP server
import {Context} from "koa";

// Apollo GraphQL
import {ApolloProvider, getDataFromTree} from "react-apollo";

// React SSR routers
import {StaticRouter} from "react-router";

/* Local */

// Root component

// Utility for creating a per-request Apollo client
import {createClient} from "App/db/lib/apollo";

// Types
export interface IRouterContext {
    status?: number;
    url?: string;
}

// Class for handling Webpack stats output
// import Output from "@/lib/output";
//
// Every byte sent back to the client is React; this is our main template
// import Html from "@/views/ssr";
const ctrl = {
    renderTo(node, initialState = {}) {
        const isDev = process.env.NODE_ENV !== 'production',
            App = require('App/App.tsx').default,
            HMRApp = isDev ? hot(App) : App;

        ReactDom.render(
            <HMRApp/>
            , node);

        if (process.env.NODE_ENV !== 'production' && module.hot) {
            module.hot.accept('App/App.js', m => {
                let NextApp = hot(require('App/App.tsx').default);

                ReactDom.render(
                    <NextApp/>
                    , node);
            })
        }
    },
    async renderSSR({state, url}, cb) {
        let content = "",
            App = require('App/App.tsx').default,
            html;
        //
        // Create a new Apollo client
        const client = createClient();

        // Create a fresh 'context' for React Router
        const routerContext: IRouterContext = {};

        // Render our components - passing down MobX state, a GraphQL client,
        // and a router for rendering based on our route config
        const components = (
            <ApolloProvider client={client}>
                <StaticRouter location={url} context={routerContext}>
                    <App/>
                </StaticRouter>
            </ApolloProvider>
        );

        // Await GraphQL data coming from the API server
        await getDataFromTree(components);

        // Handle 404 `Not Found`
        if (routerContext.status === 404) {
            // By default, just set the status code to 404. You can
            // modify this section to do things like log errors to a
            // third-party, or redirect users to a dedicated 404 page

            // ctx.status = 404;
            // ctx.body = "Not found";
            // html = "<!doctype html>\n" + renderToString(<Index ssrErrors={`<pre>${e}\n${e.stack}</pre>`}/>);
            //
            return cb(404, html);
        }

        // Create response HTML
        html = renderToString(components);
        try {
            // content = renderToString(<App/>);
            html = "<!doctype html>\n" + renderToString(
                <Index
                    // css={output.client.main("css")!}
                    helmet={Helmet.renderStatic()}
                    content={html}
                    // scripts={output.client.scripts()}
                    state={client.extract() // <-- GraphQL store
                    }
                />);
        } catch (e) {
            html = "<!doctype html>\n" + renderToString(<Index ssrErrors={`<pre>${e}\n${e.stack}</pre>`}/>);
        }
        cb(null, html)
    }
}

export default ctrl;

