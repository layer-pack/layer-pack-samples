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

// Client entry point

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

// Create browser history, for navigation a la single page apps
import {createBrowserHistory} from "history";

// React, our UI engine
import React from "react";

// HOC for enabling Apollo GraphQL `<Query>` and `<Mutation>`
import {ApolloProvider} from "react-apollo";

// Attach React to the browser DOM
import ReactDOM from "react-dom";

// Single page app routing
import {Router} from "react-router-dom";

/* Local */

// Our main component, and the starting point for server/browser loading
import Root from "App/App.tsx";

// Helper function that creates a new Apollo client per request
import {createClient} from "App/db/lib/apollo";

// ----------------------------------------------------------------------------

// Create Apollo client
const client = createClient();

// Create a browser history
const history = createBrowserHistory();

// Render
const root = document.getElementById("root")!;

// console.log(client)

ReactDOM[root.innerHTML ? "hydrate" : "render"](
    <ApolloProvider client={client}>
        <Router history={history}>
            <Root/>
        </Router>
    </ApolloProvider>,
    document.getElementById("root")
);
