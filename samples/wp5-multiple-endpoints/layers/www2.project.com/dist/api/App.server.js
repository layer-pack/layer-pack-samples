/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../a-core/App/App.js":
/*!****************************!*\
  !*** ../a-core/App/App.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Core"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Included ( among others ) : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "react ^16.8.6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "sass"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "es6 + decorators")));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "../a-core/App/api.js":
/*!****************************!*\
  !*** ../a-core/App/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is */ "?316c");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/(*).js */ "./App/MapOf.App_api_____js.gen.js");
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((server, http) => Object.keys(_api_js__WEBPACK_IMPORTED_MODULE_1__["default"]).map(service => is__WEBPACK_IMPORTED_MODULE_0___default().fn(_api_js__WEBPACK_IMPORTED_MODULE_1__["default"][service]) ? {
  name: service,
  priorityLevel: 0,
  service: _api_js__WEBPACK_IMPORTED_MODULE_1__["default"][service]
} : _api_js__WEBPACK_IMPORTED_MODULE_1__["default"][service]).sort((a, b) => a.priorityLevel > b.priorityLevel ? -1 : 1).forEach(service => {
  try {
    console.info("Load Api : ", service.name, "\n");
    service.service(server, http);
  } catch (e) {
    console.error("Api fail loading service ", service.name, "\n", e);
  }
}));

/***/ }),

/***/ "../a-core/App/config.js":
/*!*******************************!*\
  !*** ../a-core/App/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "?723f");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_objectSpread({}, __webpack_require__(/*! ./.buildInfos.json */ "./App/.buildInfos.json.js")));

/***/ }),

/***/ "../a-core/App/index.html.js":
/*!***********************************!*\
  !*** ../a-core/App/index.html.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
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

}

/***/ }),

/***/ "../a-core/App/index.js":
/*!******************************!*\
  !*** ../a-core/App/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "?8006");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "?434e");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "?610f");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-loader/root */ "?62db");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.html */ "../a-core/App/index.html.js");
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */






const ctrl = {
  renderTo(node, initialState = {}) {
    const isDev = "development" !== 'production',
          App = __webpack_require__(/*! App/App.js */ "./App/App.js")["default"],
          HMRApp = isDev ? (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__.hot)(App) : App;

    react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HMRApp, null), node);

    if (false) {}
  },

  renderSSR({
    state,
    tpl
  }, cb) {
    let content = "",
        App = __webpack_require__(/*! App/App.js */ "./App/App.js")["default"],
        html;

    try {
      content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));
      html = "<!doctype html>\n" + (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
        helmet: react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet.renderStatic(),
        content: content
      }));
    } catch (e) {
      html = "<!doctype html>\n" + (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index_html__WEBPACK_IMPORTED_MODULE_5__["default"], {
        ssrErrors: `<pre>${e}\n${e.stack}</pre>`
      }));
    }

    cb(null, html);
  }

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ctrl);

/***/ }),

/***/ "../www.project.com/App/App.js":
/*!*************************************!*\
  !*** ../www.project.com/App/App.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var $super__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $super */ "../a-core/App/App.js");
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */



class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement($super__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "www !!!!!"));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "../www.project.com/App/ui/comps2/FooBar.js":
/*!**************************************************!*\
  !*** ../www.project.com/App/ui/comps2/FooBar.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "A Comp jhg jhg !");
});

/***/ }),

/***/ "../www.project.com/App/ui/comps2/FooBtn.js":
/*!**************************************************!*\
  !*** ../www.project.com/App/ui/comps2/FooBtn.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "jhj kjl kj l1234 ");
});

/***/ }),

/***/ "../www.project.com/App/ui/comps2/FooBtn2.js":
/*!***************************************************!*\
  !*** ../www.project.com/App/ui/comps2/FooBtn2.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "jhj kjl kj l1234 ");
});

/***/ }),

/***/ "../www.project.com/App/ui/comps2/FooBtn22.js":
/*!****************************************************!*\
  !*** ../www.project.com/App/ui/comps2/FooBtn22.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "jhj kjl kj l1234 ");
});

/***/ }),

/***/ "../www.project.com/App/ui/comps2/bvnbvnb.js":
/*!***************************************************!*\
  !*** ../www.project.com/App/ui/comps2/bvnbvnb.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "jhj kjl kj l1234 ");
});

/***/ }),

/***/ "../www.project.com/App/ui/comps/FooBar.js":
/*!*************************************************!*\
  !*** ../www.project.com/App/ui/comps/FooBar.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "A Comp !");
});

/***/ }),

/***/ "../www.project.com/App/ui/comps/FooBtn.js":
/*!*************************************************!*\
  !*** ../www.project.com/App/ui/comps/FooBtn.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "jhj kjl kj l1234 ");
});

/***/ }),

/***/ "../www.project.com/App/ui/comps/FooBtn2.js":
/*!**************************************************!*\
  !*** ../www.project.com/App/ui/comps/FooBtn2.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "jhj kjl kj l1234 ");
});

/***/ }),

/***/ "../www.project.com/App/ui/comps/FooBtn22.js":
/*!***************************************************!*\
  !*** ../www.project.com/App/ui/comps/FooBtn22.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "jhj kjl kj l1234 ");
});

/***/ }),

/***/ "../www.project.com/App/ui/comps/bvnbvnb.js":
/*!**************************************************!*\
  !*** ../www.project.com/App/ui/comps/bvnbvnb.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "jhj kjl kj l1234 ");
});

/***/ }),

/***/ "./App/.___layerPackIndexUtils.js":
/*!****************************************!*\
  !*** ./App/.___layerPackIndexUtils.js ***!
  \****************************************/
/***/ ((module) => {

/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
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
    } else {
      // when we are in hot reload this may delete some sub modules... @todo
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

module.exports = {
  project: {
    name: "www.project.com",
    description: undefined,
    author: "Nathan Braun <n8tz.js@gmail.com>",
    version: "1.0.0"
  },
  buildDate: 1635942388363,
  profile: "api",
  projectRoot: __webpack_require__(/*! path */ "?adb0").join(require.main.path, "../.."),
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
    "libsPath": "..",
    "extend": ["www.project.com", "a-core"]
  }, {
    "rootFolder": "App",
    "libsPath": "..",
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
  allModId: ["www.project.com", "a-core"]
};

/***/ }),

/***/ "./App/App.js":
/*!********************!*\
  !*** ./App/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var $super__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $super */ "../www.project.com/App/App.js");
/* harmony import */ var _ui_comps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/comps/(** /*).js */ "./App/MapOf.App_ui_comps________js.gen.js");
/* harmony import */ var _ui_comps2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/comps2/(** /*).js */ "./App/MapOf.App_ui_comps2________js.gen.js");
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */





class App extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement($super__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "www2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_comps_js__WEBPACK_IMPORTED_MODULE_2__["default"].Btn, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_comps_js__WEBPACK_IMPORTED_MODULE_2__["default"].Bar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_comps2_js__WEBPACK_IMPORTED_MODULE_3__["default"].FooBar, null));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./App/MapOf.App_api_____js.gen.js":
/*!*****************************************!*\
  !*** ./App/MapOf.App_api_____js.gen.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* This is a virtual file generated by layer-pack */
let req,
    _exports = {},
    walknSetExport = __webpack_require__(/*! App/.___layerPackIndexUtils */ "./App/.___layerPackIndexUtils.js").walknSetExport;

const _App_api_html_js = __webpack_require__(/*! App/api/html.js */ "./App/api/html.js");

walknSetExport(_exports, "html", _App_api_html_js);
const html = _exports.html;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_exports);

/***/ }),

/***/ "./App/MapOf.App_ui_comps2________js.gen.js":
/*!**************************************************!*\
  !*** ./App/MapOf.App_ui_comps2________js.gen.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bvnbvnb": () => (/* binding */ bvnbvnb),
/* harmony export */   "FooBar": () => (/* binding */ FooBar),
/* harmony export */   "FooBtn": () => (/* binding */ FooBtn),
/* harmony export */   "FooBtn2": () => (/* binding */ FooBtn2),
/* harmony export */   "FooBtn22": () => (/* binding */ FooBtn22),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* This is a virtual file generated by layer-pack */
let req,
    _exports = {},
    walknSetExport = __webpack_require__(/*! App/.___layerPackIndexUtils */ "./App/.___layerPackIndexUtils.js").walknSetExport;

const _App_ui_comps2_FooBar_js = __webpack_require__(/*! App/ui/comps2/FooBar.js */ "../www.project.com/App/ui/comps2/FooBar.js");

walknSetExport(_exports, "FooBar", _App_ui_comps2_FooBar_js);

const _App_ui_comps2_FooBtn_js = __webpack_require__(/*! App/ui/comps2/FooBtn.js */ "../www.project.com/App/ui/comps2/FooBtn.js");

walknSetExport(_exports, "FooBtn", _App_ui_comps2_FooBtn_js);

const _App_ui_comps2_bvnbvnb_js = __webpack_require__(/*! App/ui/comps2/bvnbvnb.js */ "../www.project.com/App/ui/comps2/bvnbvnb.js");

walknSetExport(_exports, "bvnbvnb", _App_ui_comps2_bvnbvnb_js);

const _App_ui_comps2_FooBtn2_js = __webpack_require__(/*! App/ui/comps2/FooBtn2.js */ "../www.project.com/App/ui/comps2/FooBtn2.js");

walknSetExport(_exports, "FooBtn2", _App_ui_comps2_FooBtn2_js);

const _App_ui_comps2_FooBtn22_js = __webpack_require__(/*! App/ui/comps2/FooBtn22.js */ "../www.project.com/App/ui/comps2/FooBtn22.js");

walknSetExport(_exports, "FooBtn22", _App_ui_comps2_FooBtn22_js);
const bvnbvnb = _exports.bvnbvnb;
const FooBar = _exports.FooBar;
const FooBtn = _exports.FooBtn;
const FooBtn2 = _exports.FooBtn2;
const FooBtn22 = _exports.FooBtn22;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_exports);

/***/ }),

/***/ "./App/MapOf.App_ui_comps________js.gen.js":
/*!*************************************************!*\
  !*** ./App/MapOf.App_ui_comps________js.gen.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bar": () => (/* binding */ Bar),
/* harmony export */   "Btn": () => (/* binding */ Btn),
/* harmony export */   "bvnbvnb": () => (/* binding */ bvnbvnb),
/* harmony export */   "FooBar": () => (/* binding */ FooBar),
/* harmony export */   "FooBtn": () => (/* binding */ FooBtn),
/* harmony export */   "FooBtn2": () => (/* binding */ FooBtn2),
/* harmony export */   "FooBtn22": () => (/* binding */ FooBtn22),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* This is a virtual file generated by layer-pack */
let req,
    _exports = {},
    walknSetExport = __webpack_require__(/*! App/.___layerPackIndexUtils */ "./App/.___layerPackIndexUtils.js").walknSetExport;

const _App_ui_comps_Bar_js = __webpack_require__(/*! App/ui/comps/Bar.js */ "./App/ui/comps/Bar.js");

walknSetExport(_exports, "Bar", _App_ui_comps_Bar_js);

const _App_ui_comps_Btn_js = __webpack_require__(/*! App/ui/comps/Btn.js */ "./App/ui/comps/Btn.js");

walknSetExport(_exports, "Btn", _App_ui_comps_Btn_js);

const _App_ui_comps_FooBar_js = __webpack_require__(/*! App/ui/comps/FooBar.js */ "../www.project.com/App/ui/comps/FooBar.js");

walknSetExport(_exports, "FooBar", _App_ui_comps_FooBar_js);

const _App_ui_comps_FooBtn_js = __webpack_require__(/*! App/ui/comps/FooBtn.js */ "../www.project.com/App/ui/comps/FooBtn.js");

walknSetExport(_exports, "FooBtn", _App_ui_comps_FooBtn_js);

const _App_ui_comps_bvnbvnb_js = __webpack_require__(/*! App/ui/comps/bvnbvnb.js */ "../www.project.com/App/ui/comps/bvnbvnb.js");

walknSetExport(_exports, "bvnbvnb", _App_ui_comps_bvnbvnb_js);

const _App_ui_comps_FooBtn2_js = __webpack_require__(/*! App/ui/comps/FooBtn2.js */ "../www.project.com/App/ui/comps/FooBtn2.js");

walknSetExport(_exports, "FooBtn2", _App_ui_comps_FooBtn2_js);

const _App_ui_comps_FooBtn22_js = __webpack_require__(/*! App/ui/comps/FooBtn22.js */ "../www.project.com/App/ui/comps/FooBtn22.js");

walknSetExport(_exports, "FooBtn22", _App_ui_comps_FooBtn22_js);
const Bar = _exports.Bar;
const Btn = _exports.Btn;
const bvnbvnb = _exports.bvnbvnb;
const FooBar = _exports.FooBar;
const FooBtn = _exports.FooBtn;
const FooBtn2 = _exports.FooBtn2;
const FooBtn22 = _exports.FooBtn22;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_exports);

/***/ }),

/***/ "./App/api/html.js":
/*!*************************!*\
  !*** ./App/api/html.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "priorityLevel": () => (/* binding */ priorityLevel),
/* harmony export */   "service": () => (/* binding */ service)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "?c4a6");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "../a-core/App/config.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "../a-core/App/index.js");
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */



const name = "Rendering service";
const priorityLevel = 100000;
const service = server => {
  server.get('/', function (req, res, next) {
    _index_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderSSR({
      url: req.url
    }, (err, html, nstate) => {
      res.send(200, html);
    });
  });
  server.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"](_config__WEBPACK_IMPORTED_MODULE_1__["default"].projectRoot + '/dist/www'));
};

/***/ }),

/***/ "./App/ui/comps/Bar.js":
/*!*****************************!*\
  !*** ./App/ui/comps/Bar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "A Comp !");
});

/***/ }),

/***/ "./App/ui/comps/Btn.js":
/*!*****************************!*\
  !*** ./App/ui/comps/Btn.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "jhj kjl kj l1234 ");
});

/***/ }),

/***/ "?723f":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "?c4a6":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "?e3e5":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "?316c":
/*!*********************!*\
  !*** external "is" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("is");

/***/ }),

/***/ "?b829":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("minimist");

/***/ }),

/***/ "?adb0":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "?6d61":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "?8006":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "?434e":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "?610f":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ "?62db":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-loader/root");

/***/ }),

/***/ "?123b":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("source-map-support");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("module");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************************************************************************************************************!*\
  !*** ../a-core/node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1! ***!
  \*********************************************************************************************************************/
/** layer pack externals modules loader **/
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
const Module = __webpack_require__(/*! module */ "module").Module,
      path   = __webpack_require__(/*! path */ "path");
(function () {
	let modPath        = [],
	    allRoots       = [],
	    allRootDeps    = [],
	    baseDir        = false,
	    rootModule     = require.main,
	    __initialPaths = [].concat(rootModule.paths),
	    __oldNMP       = Module._nodeModulePaths,
	    __oldReq       = Module.prototype.require;
	
	Module.prototype.require = function ( id ) {
		let paths, rootMod, from = this.filename, resolved;
		if ( /^(\.|\/|[\w\W]+\:\\)/.test(id) )
			return __oldReq.call(this, id);
		
		let packageName = id.match(/^(\@[^\\\/]+[\\\/][^\\\/]+|[^\\\/]+)/i)[0];
		if ( !packageName )
			return __oldReq.call(this, id);
		
		if (// if require is emited from the build
			!this.parent
		) {
			paths = [
				...modPath.filter(p => !allRoots.includes(p)),
				...allRoots.filter(
					( p, i ) => allRootDeps[i].includes(packageName)
				),
				...allRoots.filter(
					( p, i ) => !allRootDeps[i].includes(packageName)
				),
				...__oldNMP(path.resolve(path.join(allRoots[0], '..', '..')))
			];
		}
		else {
			paths   = __oldNMP(from).filter(
				dir => modPath.find(path => (dir.startsWith(path)))
			);
			rootMod = paths.pop();// keep inherited order if not sub node_modules
			paths.push(
				...allRoots.filter(
					( p, i ) => allRootDeps[i].includes(packageName)
				),
				...allRoots.filter(
					( p, i ) => !allRootDeps[i].includes(packageName)
				)
			);
		}
		resolved = require.resolve(id, { paths: paths });
		return __oldReq.call(this, resolved);
	};
	
	
	return function loadPaths( { allModulePath, allModuleRoots, allDeps, cDir }, dist ) {
		modPath                 = allModulePath.map(p => path.join(cDir, p));
		allRoots                = allModuleRoots.map(p => path.join(cDir, p));
		allRootDeps             = allDeps;
		baseDir                 = path.join(cDir, dist);
		rootModule.paths.length = 0;
		rootModule.paths.push(...modPath, ...__initialPaths);
	}
})()( {
							 allModulePath:["..","..","node_modules","../www.project.com/node_modules","../a-core/node_modules"],
							 allModuleRoots:["node_modules","../www.project.com/node_modules","../a-core/node_modules"],
							 allDeps:[["www.project.com"],["a-core"],["react-helmet","react-hot-loader","express","moment","react","is","react-dom","shortid"]],
							 cDir:path.join(require.main.path,"../..")
							},
							"dist/api"
							);/** layer pack externals sourcemaps**/
__webpack_require__(/*! source-map-support */ "?123b").install();

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************!*\
  !*** ../a-core/App/index.server.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "?6d61");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "../a-core/App/api.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "../a-core/App/config.js");
/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */




const express = __webpack_require__(/*! express */ "?c4a6"),
      server = express(),
      http = __webpack_require__(/*! http */ "?e3e5").Server(server),
      argz = __webpack_require__(/*! minimist */ "?b829")(process.argv.slice(2));

process.title = _config__WEBPACK_IMPORTED_MODULE_2__["default"].project.name + '::server';
server.use(express.json({
  limit: '2mb'
})); // to support JSON-encoded bodies

server.use(express.urlencoded({
  extended: true,
  limit: '2mb'
})); // to support URL-encoded bodies

(0,_api__WEBPACK_IMPORTED_MODULE_1__["default"])(server, http);
var server_instance = http.listen(parseInt(argz.p || argz.port || 8000), function () {
  console.info('Running on ', server_instance.address().port);
});
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=App.server.js.map