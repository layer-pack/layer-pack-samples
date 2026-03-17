/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/** @file Browser entry point -- mounts the app using the controller from index.js. */
import App      from "./index"


App.renderTo(document.getElementById('app'), window.__STATE__);
