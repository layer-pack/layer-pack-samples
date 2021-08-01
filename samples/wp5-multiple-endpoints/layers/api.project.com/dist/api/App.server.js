/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../a-core/App/api.js":
/*!****************************!*\
  !*** ../a-core/App/api.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is */ "?63a5");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/(*).js */ "./App/MapOf.App_api_____js.gen.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

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



const _default = (server, http) => Object.keys(_api_js__WEBPACK_IMPORTED_MODULE_1__.default).map(service => is__WEBPACK_IMPORTED_MODULE_0___default().fn(_api_js__WEBPACK_IMPORTED_MODULE_1__.default[service]) ? {
  name: service,
  priorityLevel: 0,
  service: _api_js__WEBPACK_IMPORTED_MODULE_1__.default[service]
} : _api_js__WEBPACK_IMPORTED_MODULE_1__.default[service]).sort((a, b) => a.priorityLevel > b.priorityLevel ? -1 : 1).forEach(service => {
  try {
    console.info("Load Api : ", service.name, "\n");
    service.service(server, http);
  } catch (e) {
    console.error("Api fail loading service ", service.name, "\n", e);
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\a-core\\App\\api.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "../a-core/App/config.js":
/*!*******************************!*\
  !*** ../a-core/App/config.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "?188d");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = _objectSpread({}, __webpack_require__(/*! ./.buildInfos.json */ "./App/.buildInfos.json.js"));

/*
 *   The MIT License (MIT)
 *   Copyright (c) 2020. Nathanael Braun
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\a-core\\App\\config.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "../a-core/App/index.html.js":
/*!***********************************!*\
  !*** ../a-core/App/index.html.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ index
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

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

class index extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const {
      helmet,
      content,
      ssrErrors,
      css,
      state
    } = this.props,
          htmlAttrs = helmet && helmet.htmlAttributes.toComponent(),
          bodyAttrs = helmet && helmet.bodyAttributes.toComponent();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", htmlAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head", null, helmet && helmet.title.toComponent(), helmet && helmet.meta.toComponent(), helmet && helmet.link.toComponent(), helmet && helmet.script.toComponent(), css && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
      type: "text/css",
      dangerouslySetInnerHTML: {
        __html: css + ''
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
      href: "/App.css",
      rel: "stylesheet"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", bodyAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "app",
      dangerouslySetInnerHTML: {
        __html: content
      }
    }), ssrErrors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "ssrErrors",
      dangerouslySetInnerHTML: {
        __html: ssrErrors
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      src: "./App.js"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      src: "./App.vendors.js"
    }))));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(index, "index", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\a-core\\App\\index.html.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "../a-core/App/index.js":
/*!******************************!*\
  !*** ../a-core/App/index.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "?5e9a");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "?9439");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "?c9d0");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-loader/root */ "?328e");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.html */ "../a-core/App/index.html.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

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
//import "core-js";




 //import "regenerator-runtime/runtime";


const ctrl = {
  renderTo(node, initialState = {}) {
    const isDev = "development" !== 'production',
          App = __webpack_require__(/*! App/App.js */ "./App/App.js").default,
          HMRApp = isDev ? (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__.hot)(App) : App;

    react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HMRApp, null), node);

    if (false) {}
  },

  renderSSR({
    state,
    tpl
  }, cb) {
    let content = "",
        App = __webpack_require__(/*! App/App.js */ "./App/App.js").default,
        html;

    try {
      content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));
      html = "<!doctype html>\n" + (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index_html__WEBPACK_IMPORTED_MODULE_5__.default, {
        helmet: react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet.renderStatic(),
        content: content
      }));
    } catch (e) {
      html = "<!doctype html>\n" + (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index_html__WEBPACK_IMPORTED_MODULE_5__.default, {
        ssrErrors: `<pre>${e}\n${e.stack}</pre>`
      }));
    }

    cb(null, html);
  }

};
const _default = ctrl;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ctrl, "ctrl", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\a-core\\App\\index.js");
  reactHotLoader.register(_default, "default", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\a-core\\App\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "../a-core/App/index.server.js":
/*!*************************************!*\
  !*** ../a-core/App/index.server.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "../a-core/App/api.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "../a-core/App/config.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

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




const express = __webpack_require__(/*! express */ "?22fe"),
      server = express(),
      http = __webpack_require__(/*! http */ "?8d19").Server(server),
      argz = __webpack_require__(/*! minimist */ "?2efa")(process.argv.slice(2));

process.title = _config__WEBPACK_IMPORTED_MODULE_2__.default.project.name + '::server';
server.use(express.json({
  limit: '2mb'
})); // to support JSON-encoded bodies

server.use(express.urlencoded({
  extended: true,
  limit: '2mb'
})); // to support URL-encoded bodies

(0,_api__WEBPACK_IMPORTED_MODULE_1__.default)(server, http);
var server_instance = http.listen(parseInt(argz.p || argz.port || 8000), function () {
  console.info('Running on ', server_instance.address().port);
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(server, "server", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\a-core\\App\\index.server.js");
  reactHotLoader.register(http, "http", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\a-core\\App\\index.server.js");
  reactHotLoader.register(argz, "argz", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\a-core\\App\\index.server.js");
  reactHotLoader.register(server_instance, "server_instance", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\a-core\\App\\index.server.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./App/.___layerPackIndexUtils.js":
/*!****************************************!*\
  !*** ./App/.___layerPackIndexUtils.js ***!
  \****************************************/
/***/ ((module) => {

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*
 *   The MIT License (MIT)
 *   Copyright (c) 2020. Nathanael Braun
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
module.exports = {
  /**
   * Walk & set executables from globs requires
   * @param _target
   * @param path
   * @param value
   */
  walknSetExport(_target, path, value) {
    let fPath = path.split('/'),
        target = _target,
        i,
        module;
    i = 0;

    while (i < fPath.length - 1) target = target[fPath[i]] = target[fPath[i]] || {}, i++;

    module = Object.keys(value).length === 1 && value.default || value;

    if (!target[fPath[i]]) {
      target[fPath[i]] = module;
    } else if (!target[fPath[i]].__esModule) {
      // if this is simple path obj write over
      Object.assign(module, target[fPath[i]]);
      target[fPath[i]] = module;
    }
  }

};

/***/ }),

/***/ "./App/.buildInfos.json.js":
/*!*********************************!*\
  !*** ./App/.buildInfos.json.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

module.exports = {
  project: {
    name: "api.project.com",
    description: undefined,
    author: "Nathan Braun <n8tz.js@gmail.com>",
    version: "1.0.0"
  },
  buildDate: 1609333566508,
  profile: "api",
  projectRoot: __webpack_require__(/*! path */ "path").join(require.main.path, "../.."),
  vars: {
    "rootAlias": "App",
    "targetDir": "dist/api",
    "externals": true,
    "DefinePluginCfg": {
      "__IS_SERVER__": true
    }
  },
  allCfg: [{
    "rootFolder": "App",
    "libsPath": "./packages",
    "extend": ["a-core"]
  }, {
    "rootFolder": "App",
    "config": "./conf/webpack/webpack.config.api.js",
    "vars": {
      "targetDir": "dist/api",
      "externals": true,
      "DefinePluginCfg": {
        "__IS_SERVER__": true
      }
    }
  }],
  allModId: ["a-core"]
};

/***/ }),

/***/ "./App/App.js":
/*!********************!*\
  !*** ./App/App.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/(** /*).js */ "./App/MapOf.App_comps________js.gen.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.scss */ "./App/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

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




class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    //console.log(require("App/assets/test.jpg"))
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "api server lkkj"));
  }

  // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  }

}

const _default = App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\App.js");
  reactHotLoader.register(_default, "default", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./App/MapOf.App_api_____js.gen.js":
/*!*****************************************!*\
  !*** ./App/MapOf.App_api_____js.gen.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "health": () => /* binding */ health,
/* harmony export */   "html": () => /* binding */ html,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/* This is a virtual file generated by layer-pack */
let req,
    _exports = {},
    walknSetExport = __webpack_require__(/*! App/.___layerPackIndexUtils */ "./App/.___layerPackIndexUtils.js").walknSetExport;

const _App_api_html_js = __webpack_require__(/*! App/api/html.js */ "./App/api/html.js");

walknSetExport(_exports, "html", _App_api_html_js);

const _App_api_health_js = __webpack_require__(/*! App/api/health.js */ "./App/api/health.js");

walknSetExport(_exports, "health", _App_api_health_js);
const health = _exports.health;
const html = _exports.html;
const _default = _exports;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(req, "req", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\MapOf.App_api_____js.gen.js");
  reactHotLoader.register(_exports, "_exports", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\MapOf.App_api_____js.gen.js");
  reactHotLoader.register(walknSetExport, "walknSetExport", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\MapOf.App_api_____js.gen.js");
  reactHotLoader.register(health, "health", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\MapOf.App_api_____js.gen.js");
  reactHotLoader.register(html, "html", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\MapOf.App_api_____js.gen.js");
  reactHotLoader.register(_default, "default", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\MapOf.App_api_____js.gen.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./App/MapOf.App_comps________js.gen.js":
/*!**********************************************!*\
  !*** ./App/MapOf.App_comps________js.gen.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ppmppComp2": () => /* binding */ ppmppComp2,
/* harmony export */   "pppiComp2": () => /* binding */ pppiComp2,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/* This is a virtual file generated by layer-pack */
let req,
    _exports = {},
    walknSetExport = __webpack_require__(/*! App/.___layerPackIndexUtils */ "./App/.___layerPackIndexUtils.js").walknSetExport;

const _App_comps_pppiComp2_js = __webpack_require__(/*! App/comps/pppiComp2.js */ "./App/comps/pppiComp2.js");

walknSetExport(_exports, "pppiComp2", _App_comps_pppiComp2_js);

const _App_comps_ppmppComp2_js = __webpack_require__(/*! App/comps/ppmppComp2.js */ "./App/comps/ppmppComp2.js");

walknSetExport(_exports, "ppmppComp2", _App_comps_ppmppComp2_js);
const ppmppComp2 = _exports.ppmppComp2;
const pppiComp2 = _exports.pppiComp2;
const _default = _exports;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(req, "req", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\MapOf.App_comps________js.gen.js");
  reactHotLoader.register(_exports, "_exports", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\MapOf.App_comps________js.gen.js");
  reactHotLoader.register(walknSetExport, "walknSetExport", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\MapOf.App_comps________js.gen.js");
  reactHotLoader.register(ppmppComp2, "ppmppComp2", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\MapOf.App_comps________js.gen.js");
  reactHotLoader.register(pppiComp2, "pppiComp2", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\MapOf.App_comps________js.gen.js");
  reactHotLoader.register(_default, "default", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\MapOf.App_comps________js.gen.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./App/api/health.js":
/*!***************************!*\
  !*** ./App/api/health.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": () => /* binding */ name,
/* harmony export */   "priorityLevel": () => /* binding */ priorityLevel,
/* harmony export */   "service": () => /* binding */ service
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "?22fe");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "../a-core/App/config.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "../a-core/App/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*
 *   The MIT License (MIT)
 *   Copyright (c) 2020. Nathanael Braun
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



const name = "Health service";
const priorityLevel = 100000;
const service = server => {
  server.get('/ping', function (req, res, next) {
    res.json(200, {
      ok: true
    });
  });
  server.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(_config__WEBPACK_IMPORTED_MODULE_1__.default.projectRoot + '/dist/www'));
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(name, "name", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\api\\health.js");
  reactHotLoader.register(priorityLevel, "priorityLevel", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\api\\health.js");
  reactHotLoader.register(service, "service", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\api\\health.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./App/api/html.js":
/*!*************************!*\
  !*** ./App/api/html.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": () => /* binding */ name,
/* harmony export */   "priorityLevel": () => /* binding */ priorityLevel,
/* harmony export */   "service": () => /* binding */ service
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "?22fe");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "../a-core/App/config.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "../a-core/App/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

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



const name = "Rendering service";
const priorityLevel = 100000;
const service = server => {
  server.get('/', function (req, res, next) {
    _index_js__WEBPACK_IMPORTED_MODULE_2__.default.renderSSR({
      url: req.url
    }, (err, html, nstate) => {
      res.send(200, html);
    });
  });
  server.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(_config__WEBPACK_IMPORTED_MODULE_1__.default.projectRoot + '/dist/www'));
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(name, "name", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\api\\html.js");
  reactHotLoader.register(priorityLevel, "priorityLevel", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\api\\html.js");
  reactHotLoader.register(service, "service", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\api\\html.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./App/comps/ppmppComp2.js":
/*!*********************************!*\
  !*** ./App/comps/ppmppComp2.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*
 *   The MIT License (MIT)
 *   Copyright (c) 2020. Nathanael Braun
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


const _default = () => {
  return /*#__PURE__*/React.createElement("div", null, "jhj kjl kj l");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\comps\\ppmppComp2.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./App/comps/pppiComp2.js":
/*!********************************!*\
  !*** ./App/comps/pppiComp2.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*
 *   The MIT License (MIT)
 *   Copyright (c) 2020. Nathanael Braun
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


const _default = () => {
  return /*#__PURE__*/React.createElement("div", null, "jhj kjl kj l ");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "D:\\shared\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\wp5-multiple-endpoints\\layers\\api.project.com\\App\\comps\\pppiComp2.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./App/App.scss":
/*!**********************!*\
  !*** ./App/App.scss ***!
  \**********************/
/***/ (() => {



/***/ }),

/***/ "../a-core/node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!":
/*!*********************************************************************************************************************!*\
  !*** ../a-core/node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1! ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/** layer pack externals modules loader **/
/*
 *   The MIT License (MIT)
 *   Copyright (c) 2020. Nathanael Braun
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
const Module = __webpack_require__(/*! module */ "module").Module,
      path   = __webpack_require__(/*! path */ "path");
(function () {
	let modPath        = [],
	    allRoots       = [],
	    baseDir        = false,
	    rootModule     = require.main,
	    __initialPaths = [].concat(rootModule.paths),
	    __oldNMP       = Module._nodeModulePaths;
	
	
	Module._nodeModulePaths = function ( from ) {
		let paths, rootMod;
		if (// if require is emited from the build ( doesn't seems to happen anymore ? )
			from === baseDir
		) {
			paths = [].concat(modPath).concat(__oldNMP(from));
			return paths;
		}
		else {
			paths   = __oldNMP(from).filter(
				dir => modPath.find(path => (dir.startsWith(path)))
			);
			rootMod = paths.pop();// keep inherited order if not sub node_modules
			paths.push(...modPath, ...__oldNMP(path.resolve(path.join(rootMod, '..'))));// add normal parents node_modules from head
			return paths;
		}
	};
	
	return function loadPaths( { allModulePath, cDir }, dist ) {
		modPath = allModulePath.map(p => path.join(cDir, p));
		baseDir = path.join(cDir, dist);
		
		rootModule.paths.length = 0;
		rootModule.paths.push(...modPath, ...__initialPaths);
	}
})()(
    {
        allModulePath:["packages","node_modules","../a-core/node_modules"],
        cDir:path.join(require.main.path,"../..")
    },
    "dist/api"
);/** layer pack externals sourcemaps**/
__webpack_require__(/*! source-map-support */ "?eab2").install();


/***/ }),

/***/ "?188d":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");;

/***/ }),

/***/ "?22fe":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "?8d19":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "?63a5":
/*!*********************!*\
  !*** external "is" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("is");;

/***/ }),

/***/ "?2efa":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("minimist");;

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("module");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "?588e":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "?5e9a":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "?9439":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "?c9d0":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ "?328e":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-loader/root");;

/***/ }),

/***/ "?eab2":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("source-map-support");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("../a-core/node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!");
/******/ 	return __webpack_require__("../a-core/App/index.server.js");
/******/ })()
;
//# sourceMappingURL=App.server.js.map