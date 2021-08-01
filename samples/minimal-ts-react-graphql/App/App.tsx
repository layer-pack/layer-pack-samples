/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

// Root entry point

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import React from "react";
import Helmet from "react-helmet";
import {hot} from "react-hot-loader/root";
import {Route, Switch} from "react-router-dom";

/* Local */

// Components
import Posts from "App/ui/comps/Post";

// ----------------------------------------------------------------------------

const Root: React.FunctionComponent = () => (
    <div>
        <Helmet>
            <title>ReactQL starter kit - edit me!</title>
        </Helmet>
        over it
        <Posts/>
    </div>
);

export default hot(Root);
