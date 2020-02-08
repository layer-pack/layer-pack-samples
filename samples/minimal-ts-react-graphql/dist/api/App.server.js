/** wi externals **/
require('layer-pack/etc/node/loadModulePaths.js').loadPaths({allModulePath:["packages","node_modules"],cDir:__dirname+'/..\..'},"dist\\api");/** /wi externals **/
require('source-map-support').install();

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App/.buildInfos.json":
/*!******************************!*\
  !*** ./App/.buildInfos.json ***!
  \******************************/
/*! exports provided: project, buildDate, profile, projectRoot, vars, allCfg, allModId, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"project\":{\"name\":\"minimal-ts-react-graphql\",\"author\":\"Nathan Braun <n8tz.js@gmail.com>\",\"version\":\"1.0.0\"},\"buildDate\":1581173655311,\"profile\":\"api\",\"projectRoot\":\"G:\\\\n8tz\\\\libs\\\\lpack\\\\layer-pack-samples\\\\samples\\\\minimal-ts-react-graphql\",\"vars\":{\"rootAlias\":\"App\",\"targetDir\":\"dist/api\",\"externals\":true,\"production\":false,\"DefinePluginCfg\":{\"__IS_SERVER__\":true,\"GRAPHQL\":\"'http://localhost:8080/graphql'\",\"WS_SUBSCRIPTIONS\":0,\"LOCAL_STORAGE_KEY\":\"'reactql'\",\"__IS_DEV__\":true}},\"allCfg\":[{\"rootFolder\":\"App\",\"libsPath\":\"./packages\",\"extend\":[\"lpack-react-ts-apollo\"]},{\"rootFolder\":\"App\",\"config\":\"./etc/wp/webpack.config.api.js\",\"vars\":{\"targetDir\":\"dist/api\",\"externals\":true,\"production\":true,\"DefinePluginCfg\":{\"__IS_SERVER__\":true,\"GRAPHQL\":\"'http://localhost:8080/graphql'\",\"WS_SUBSCRIPTIONS\":0,\"LOCAL_STORAGE_KEY\":\"'reactql'\"}}}],\"allModId\":[\"lpack-react-ts-apollo\"]}");

/***/ }),

/***/ "./App/App.tsx":
/*!*********************!*\
  !*** ./App/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "undefined?c9d0");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader/root */ "undefined?328e");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var App_ui_comps_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! App/ui/comps/Post */ "./packages/lpack-react-ts-apollo/App/ui/comps/Post.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Root entry point
// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */




/* Local */
// Components
 // ----------------------------------------------------------------------------

const Root = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "ReactQL starter kit - edit me!")), "over it", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App_ui_comps_Post__WEBPACK_IMPORTED_MODULE_3__["default"], null));

const _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__["hot"])(Root);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Root, "Root", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\App.tsx");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\App.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./App/MapOf.App_api_____tsx.gen.js":
/*!******************************************!*\
  !*** ./App/MapOf.App_api_____tsx.gen.js ***!
  \******************************************/
/*! exports provided: graphql, index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
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
    walknSetExport = __webpack_require__(/*! layer-pack/etc/utils/indexUtils.js */ "undefined?7cef").walknSetExport;

const _App_api_index_tsx = __webpack_require__(/*! App/api/index.tsx */ "./packages/lpack-react-ts-apollo/App/api/index.tsx");

walknSetExport(_exports, "index", _App_api_index_tsx);

const _App_api_graphql_tsx = __webpack_require__(/*! App/api/graphql.tsx */ "./packages/lpack-react-ts-apollo/App/api/graphql.tsx");

walknSetExport(_exports, "graphql", _App_api_graphql_tsx);
const graphql = _exports.graphql;
const index = _exports.index;
const _default = _exports;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(req, "req", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_api_____tsx.gen.js");
  reactHotLoader.register(_exports, "_exports", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_api_____tsx.gen.js");
  reactHotLoader.register(walknSetExport, "walknSetExport", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_api_____tsx.gen.js");
  reactHotLoader.register(graphql, "graphql", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_api_____tsx.gen.js");
  reactHotLoader.register(index, "index", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_api_____tsx.gen.js");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_api_____tsx.gen.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./App/MapOf.App_db_entities________graphql.gen.js":
/*!*********************************************************!*\
  !*** ./App/MapOf.App_db_entities________graphql.gen.js ***!
  \*********************************************************/
/*! exports provided: Post, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
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
    walknSetExport = __webpack_require__(/*! layer-pack/etc/utils/indexUtils.js */ "undefined?7cef").walknSetExport;

const _App_db_entities_Post_graphql = __webpack_require__(/*! App/db/entities/Post.graphql */ "./packages/lpack-react-ts-apollo/App/db/entities/Post.graphql");

walknSetExport(_exports, "Post", _App_db_entities_Post_graphql);
const Post = _exports.Post;
const _default = _exports;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(req, "req", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_entities________graphql.gen.js");
  reactHotLoader.register(_exports, "_exports", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_entities________graphql.gen.js");
  reactHotLoader.register(walknSetExport, "walknSetExport", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_entities________graphql.gen.js");
  reactHotLoader.register(Post, "Post", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_entities________graphql.gen.js");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_entities________graphql.gen.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./App/MapOf.App_db_entities________js.gen.js":
/*!****************************************************!*\
  !*** ./App/MapOf.App_db_entities________js.gen.js ***!
  \****************************************************/
/*! exports provided: Post, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
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
    walknSetExport = __webpack_require__(/*! layer-pack/etc/utils/indexUtils.js */ "undefined?7cef").walknSetExport;

const _App_db_entities_Post_js = __webpack_require__(/*! App/db/entities/Post.js */ "./packages/lpack-react-ts-apollo/App/db/entities/Post.js");

walknSetExport(_exports, "Post", _App_db_entities_Post_js);
const Post = _exports.Post;
const _default = _exports;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(req, "req", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_entities________js.gen.js");
  reactHotLoader.register(_exports, "_exports", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_entities________js.gen.js");
  reactHotLoader.register(walknSetExport, "walknSetExport", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_entities________js.gen.js");
  reactHotLoader.register(Post, "Post", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_entities________js.gen.js");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_entities________js.gen.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./App/MapOf.App_db_scalars________js.gen.js":
/*!***************************************************!*\
  !*** ./App/MapOf.App_db_scalars________js.gen.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/* This is a virtual file generated by layer-pack */
let req,
    _exports = {},
    walknSetExport = __webpack_require__(/*! layer-pack/etc/utils/indexUtils.js */ "undefined?7cef").walknSetExport;

const _default = _exports;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(req, "req", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_scalars________js.gen.js");
  reactHotLoader.register(_exports, "_exports", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_scalars________js.gen.js");
  reactHotLoader.register(walknSetExport, "walknSetExport", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_scalars________js.gen.js");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\App\\MapOf.App_db_scalars________js.gen.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/api.tsx":
/*!****************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/api.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is */ "undefined?63a5");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/(*).tsx */ "./App/MapOf.App_api_____tsx.gen.js");
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



let debug = __webpack_require__(/*! ./console */ "./packages/lpack-react-ts-apollo/App/console.tsx").default("server");

const _default = (server, http) => Object.keys(_api_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]).map(service => is__WEBPACK_IMPORTED_MODULE_0___default.a.fn(_api_tsx__WEBPACK_IMPORTED_MODULE_1__["default"][service]) ? {
  name: service,
  priorityLevel: 0,
  service: _api_tsx__WEBPACK_IMPORTED_MODULE_1__["default"][service]
} : _api_tsx__WEBPACK_IMPORTED_MODULE_1__["default"][service]).sort((a, b) => a.priorityLevel > b.priorityLevel ? -1 : 1).forEach(service => {
  try {
    debug.info("Load Api : ", service.name, "\n");
    service.service(server, http);
  } catch (e) {
    debug.error("Api fail loading service ", service.name, "\n", e);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(debug, "debug", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\api.tsx");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\api.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/api/graphql.tsx":
/*!************************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/api/graphql.tsx ***!
  \************************************************************/
/*! exports provided: name, priorityLevel, service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priorityLevel", function() { return priorityLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return service; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "undefined?188d");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var App_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! App/db */ "./packages/lpack-react-ts-apollo/App/db/index.api.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*
 * Copyright (c) 2020.  Ernst & Young
 *  @author : Nathan
 */
//import {MongoClient, ObjectId} from 'mongodb'
//import {graphqlExpress, graphiqlExpress} from 'graphql-server-express'
//import {makeExecutableSchema}            from 'graphql-tools'
 //const { ApolloServer, gql } = require('apollo-server');
//const graphqlHTTP     = require('express-graphql');
//const { buildSchema } = require('graphql');

const {
  ApolloServer,
  gql,
  graphiqlExpress
} = __webpack_require__(/*! apollo-server-express */ "undefined?22f3");

let schema,
    entities = {};
const name = "Apollo GraphQL service";
const priorityLevel = 100;
const service = app => {
  const server = new ApolloServer(_objectSpread({}, App_db__WEBPACK_IMPORTED_MODULE_1__["graphql"].schema, {
    playground: {
      settings: {
        'editor.theme': 'light'
      },
      tabs: [{
        endpoint: "/graphql"
      }]
    }
  }));
  server.applyMiddleware({
    app,
    path: '/graphql'
  });
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(schema, "schema", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\api\\graphql.tsx");
  reactHotLoader.register(entities, "entities", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\api\\graphql.tsx");
  reactHotLoader.register(name, "name", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\api\\graphql.tsx");
  reactHotLoader.register(priorityLevel, "priorityLevel", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\api\\graphql.tsx");
  reactHotLoader.register(service, "service", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\api\\graphql.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/api/index.tsx":
/*!**********************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/api/index.tsx ***!
  \**********************************************************/
/*! exports provided: name, priorityLevel, service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priorityLevel", function() { return priorityLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return service; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "undefined?22fe");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var App_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! App/config */ "./packages/lpack-react-ts-apollo/App/config.tsx");
/* harmony import */ var App_index_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! App/index.tsx */ "./packages/lpack-react-ts-apollo/App/index.tsx");
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
    // console.log("hop")
    App_index_tsx__WEBPACK_IMPORTED_MODULE_2__["default"].renderSSR({
      url: req.url
    }, (err, html, nstate) => {
      // console.log(html)
      res.send(200, html);
    });
  });
  server.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(App_config__WEBPACK_IMPORTED_MODULE_1__["default"].projectRoot + '/dist/www'));
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(name, "name", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\api\\index.tsx");
  reactHotLoader.register(priorityLevel, "priorityLevel", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\api\\index.tsx");
  reactHotLoader.register(service, "service", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\api\\index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/config.tsx":
/*!*******************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/config.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "undefined?188d");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = _objectSpread({}, __webpack_require__(/*! ./.buildInfos.json */ "./App/.buildInfos.json"));

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
 *  @contact : n8tz.js@gmail.com
 */
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\config.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/console.tsx":
/*!********************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/console.tsx ***!
  \********************************************************/
/*! exports provided: console, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "console", function() { return d_console; });
/* harmony import */ var App_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/config */ "./packages/lpack-react-ts-apollo/App/config.tsx");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debounce */ "undefined?508e");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var debug_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug-logger */ "undefined?63f7");
/* harmony import */ var debug_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! is */ "undefined?63a5");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_3__);
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

/**
 * console utils
 */





const isBrowserSide = !true,
      _console =  true && function _console(ns, nmFn = v => '') {
  var c = debug_logger__WEBPACK_IMPORTED_MODULE_2___default()(ns),
      fn = ns2 => new _console(ns + "::" + ns2);

  for (var k in c) if (c.hasOwnProperty(k) && !this[k] && is__WEBPACK_IMPORTED_MODULE_3___default.a.fn(c[k])) fn[k] = c[k].bind(c, nmFn(ns));

  fn.beep = function () {
    process.stdout.write('\x07'); // do a beep

    this.error(...arguments);
  };

  return fn;
} || function _console(ns, nmFn = v => '') {
  var c = console,
      fn = ns2 => new _console(ns + "::" + ns2);

  for (var k in c) if (c.hasOwnProperty(k) && !this[k] && is__WEBPACK_IMPORTED_MODULE_3___default.a.fn(c[k])) fn[k] = c[k].bind(console, nmFn(ns));

  fn.beep = function () {
    this.error(...arguments);
  };

  return fn;
};

debug_logger__WEBPACK_IMPORTED_MODULE_2___default.a.inspectOptions = {
  colors: true
};
debug_logger__WEBPACK_IMPORTED_MODULE_2___default.a.debug.enable(App_config__WEBPACK_IMPORTED_MODULE_0__["default"].project.name + '*');

console.watch = console.watch || function (oObj, sProp) {
  let sPrivateProp = "$_" + sProp + "_$"; // to minimize the name clash risk

  oObj[sPrivateProp] = oObj[sProp]; // overwrite with accessor

  Object.defineProperty(oObj, sProp, {
    get: function () {
      return oObj[sPrivateProp];
    },
    set: function (value) {
      console.log("setting " + sProp + " to " + value);
      debugger; // sets breakpoint

      oObj[sPrivateProp] = value;
    }
  });
}; // well group the react/vendors warns as they abuse of it each minors versions


isBrowserSide && !window.consoleHookDone && function () {
  window.consoleHookDone = true;

  function truncate(string, ln) {
    if (string.length > ln) return string.substring(0, ln) + '...';else return string;
  }

  ;
  let hookedWarn = console.warn,
      hookedError = console.error,
      recentWarn = [],
      recentErrors = [],
      warn = debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
    console.groupCollapsed(" %d %cvendors warns happen%c (%s)", recentWarn.length, "color: orange; text-decoration: underline", "color: gray; font-style: italic;font-size:.7em", truncate(recentWarn.map(v => v.join(', ')).join('\t'), 50));
    recentWarn.forEach(([argz, trace]) => {
      console.groupCollapsed(...argz);
      hookedWarn.call(console, trace);
      console.groupEnd();
    });
    recentWarn = [];
    console.groupEnd();
  }, 2000),
      error = debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
    console.groupCollapsed(" %d %cvendors errors happen%c (%s)", recentErrors.length, "color: red; text-decoration: underline", "color: gray; font-style: italic;font-size:.7em", truncate(recentErrors.map(v => v.join(', ')).join('\t'), 50)); // recentErrors.forEach(argz => hookedWarn.apply(console, argz));

    recentErrors.forEach(([argz, trace]) => {
      console.groupCollapsed(...argz);
      hookedError.call(console, trace);
      console.groupEnd();
    });
    recentErrors = [];
    console.groupEnd();
  }, 2000);

  console.warn = function (...argz) {
    if (!argz[0] && argz[0].startWith(App_config__WEBPACK_IMPORTED_MODULE_0__["default"].project.name)) return hookedWarn(...argz);
    recentWarn.push([argz, new Error().stack]);
    warn();
  };

  console.error = function (...argz) {
    if (is__WEBPACK_IMPORTED_MODULE_3___default.a.string(argz[0]) && argz[0].substr(0, App_config__WEBPACK_IMPORTED_MODULE_0__["default"].project.name.length) === App_config__WEBPACK_IMPORTED_MODULE_0__["default"].project.name) return hookedWarn(...argz);
    recentErrors.push([argz, new Error().stack]);
    error();
  };
}();
const d_console = new _console(App_config__WEBPACK_IMPORTED_MODULE_0__["default"].project.name);

const _default = d_console;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isBrowserSide, "isBrowserSide", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\console.tsx");
  reactHotLoader.register(_console, "_console", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\console.tsx");
  reactHotLoader.register(d_console, "d_console", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\console.tsx");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\console.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/db/entities/Post.graphql":
/*!*********************************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/db/entities/Post.graphql ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("scalar Image\r\n\r\ntype Post {\r\n    _id: String\r\n    title: String\r\n    preview: Image\r\n    content: String\r\n}\r\n\r\n\r\ntype Query {\r\n    post(_id: String): Post\r\n    posts: [Post]\r\n}\r\ntype Mutation {\r\n    createPost(title: String, content: String): Post\r\n}");

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/db/entities/Post.js":
/*!****************************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/db/entities/Post.js ***!
  \****************************************************************/
/*! exports provided: Post, Query, Mutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return Mutation; });
/* harmony import */ var App_db_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/db/utils */ "./packages/lpack-react-ts-apollo/App/db/utils.js");
/* harmony import */ var App_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! App/db */ "./packages/lpack-react-ts-apollo/App/db/index.api.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*
 * Copyright (c) 2020.  Ernst & Young
 *  @author : Nathan
 */


const Post = {};
const Query = {
  async posts() {
    console.log("posts");
    return [{
      title: "test"
    }];
  }

};
const Mutation = {
  async createPost(root, args, context, info) {
    console.log("createPost");
    return args;
  }

};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Post, "Post", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\db\\entities\\Post.js");
  reactHotLoader.register(Query, "Query", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\db\\entities\\Post.js");
  reactHotLoader.register(Mutation, "Mutation", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\db\\entities\\Post.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/db/graphql/fragments.tsx":
/*!*********************************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/db/graphql/fragments.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const result = {
  __schema: {
    types: []
  }
};
const _default = result;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(result, "result", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\db\\graphql\\fragments.tsx");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\db\\graphql\\fragments.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/db/index.api.js":
/*!************************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/db/index.api.js ***!
  \************************************************************/
/*! exports provided: graphql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony import */ var App_db_entities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/db/entities/** /(*).js */ "./App/MapOf.App_db_entities________js.gen.js");
/* harmony import */ var App_db_entities_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! App/db/entities/** /(*).graphql */ "./App/MapOf.App_db_entities________graphql.gen.js");
/* harmony import */ var App_db_scalars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! App/db/scalars/** /(*).js */ "./App/MapOf.App_db_scalars________js.gen.js");
/* harmony import */ var _graphql_toolkit_schema_merging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @graphql-toolkit/schema-merging */ "undefined?8dc2");
/* harmony import */ var _graphql_toolkit_schema_merging__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_graphql_toolkit_schema_merging__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql */ "undefined?3114");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_4__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*
 * Copyright (c) 2020.  Ernst & Young
 *  @author : Nathan
 */





const graphql = {
  schema: {
    typeDefs: Object(_graphql_toolkit_schema_merging__WEBPACK_IMPORTED_MODULE_3__["mergeTypeDefs"])([...Object.keys(App_db_scalars_js__WEBPACK_IMPORTED_MODULE_2__["default"]).map(typeId => "scalar " + typeId + '\n'), ...Object.keys(App_db_entities_graphql__WEBPACK_IMPORTED_MODULE_1__["default"]).map(typeId => App_db_entities_graphql__WEBPACK_IMPORTED_MODULE_1__["default"][typeId]), `
				      schema {
				        query: Query
				        mutation: Mutation
				      }
			`], {
      //useSchemaDefinition  : schemaDefinition,
      //forceSchemaDefinition: schemaDefinition,
      throwOnConflict: true,
      commentDescriptions: true,
      reverseDirectives: true //...options,

    }),
    resolvers: Object(_graphql_toolkit_schema_merging__WEBPACK_IMPORTED_MODULE_3__["mergeResolvers"])([...Object.keys(App_db_scalars_js__WEBPACK_IMPORTED_MODULE_2__["default"]).map(typeId => ({
      [typeId]: new graphql__WEBPACK_IMPORTED_MODULE_4__["GraphQLScalarType"](App_db_scalars_js__WEBPACK_IMPORTED_MODULE_2__["default"][typeId])
    })), ...Object.keys(App_db_entities_js__WEBPACK_IMPORTED_MODULE_0__["default"]).map(typeId => App_db_entities_js__WEBPACK_IMPORTED_MODULE_0__["default"][typeId]), {}])
  }
};

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(graphql, "graphql", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\db\\index.api.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/db/lib/apollo.ts":
/*!*************************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/db/lib/apollo.ts ***!
  \*************************************************************/
/*! exports provided: createClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClient", function() { return createClient; });
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-cache-inmemory */ "undefined?4bd1");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ "undefined?4274");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link */ "undefined?714f");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-error */ "undefined?6c75");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-http */ "undefined?1111");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-ws */ "undefined?d9ca");
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_link_ws__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-utilities */ "undefined?cbd3");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_utilities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var subscriptions_transport_ws__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! subscriptions-transport-ws */ "undefined?1c5c");
/* harmony import */ var subscriptions_transport_ws__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(subscriptions_transport_ws__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var App_db_graphql_fragments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! App/db/graphql/fragments */ "./packages/lpack-react-ts-apollo/App/db/graphql/fragments.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Apollo GraphQL client
// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */








/* Local */

 // ----------------------------------------------------------------------------
// Match up fragments

const fragmentMatcher = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__["IntrospectionFragmentMatcher"]({
  introspectionQueryResultData: App_db_graphql_fragments__WEBPACK_IMPORTED_MODULE_8__["default"]
});
function createClient() {
  // Create the cache first, which we'll share across Apollo tooling.
  // This is an in-memory cache. Since we'll be calling `createClient` on
  // universally, the cache will survive until the HTTP request is
  // responded to (on the server) or for the whole of the user's visit (in
  // the browser)
  const cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]({
    fragmentMatcher
  }); // Create a HTTP client (both server/client). It takes the GraphQL
  // server from the `GRAPHQL` environment variable, which by default is
  // set to an external playground at https://graphqlhub.com/graphql

  const httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]({
    credentials: "same-origin",
    uri: 'http://localhost:8080/graphql'
  }); // If we're in the browser, we'd have received initial state from the
  // server. Restore it, so the client app can continue with the same data.

  if (false) {} // Return a new Apollo Client back, with the cache we've just created,
  // and an array of 'links' (Apollo parlance for GraphQL middleware)
  // to tell Apollo how to handle GraphQL requests


  return new apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    cache,
    link: apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"].from([// General error handler, to log errors back to the console.
    // Replace this in production with whatever makes sense in your
    // environment. Remember you can use the global `__IS_SERVER__` variable to
    // determine whether you're running on the server, and record errors
    // out to third-party services, etc
    Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_3__["onError"])(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({
          message,
          locations,
          path
        }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      }

      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    }), // Split on HTTP and WebSockets
     false ? undefined : httpLink // <-- just use HTTP on the server
    ]),
    // On the server, enable SSR mode
    ssrMode: true
  });
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fragmentMatcher, "fragmentMatcher", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\db\\lib\\apollo.ts");
  reactHotLoader.register(createClient, "createClient", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\db\\lib\\apollo.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/db/utils.js":
/*!********************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/db/utils.js ***!
  \********************************************************/
/*! exports provided: prepare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepare", function() { return prepare; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/*
 * Copyright (c) 2020.  Ernst & Young
 *  @author : Nathan
 */
const prepare = o => {
  o._id = o._id.toString();
  return o;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(prepare, "prepare", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\db\\utils.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/index.html.tsx":
/*!***********************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/index.html.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Html; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Server-side HTML render
// Component to render the full HTML response in React
// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

class Html extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", htmlAttrs, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, helmet && helmet.title.toComponent(), helmet && helmet.meta.toComponent(), helmet && helmet.link.toComponent(), helmet && helmet.script.toComponent(), state && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: "window.__APOLLO__  = " + JSON.stringify(state)
      }
    }), css && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
      type: "text/css",
      dangerouslySetInnerHTML: {
        __html: css + ''
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", bodyAttrs, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "root",
      dangerouslySetInnerHTML: {
        __html: content
      }
    }), ssrErrors && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "ssrErrors",
      dangerouslySetInnerHTML: {
        __html: ssrErrors
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      src: "./App.js"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
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

  reactHotLoader.register(Html, "Html", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\index.html.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/index.server.tsx":
/*!*************************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/index.server.tsx ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./packages/lpack-react-ts-apollo/App/api.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./packages/lpack-react-ts-apollo/App/config.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const express = __webpack_require__(/*! express */ "undefined?22fe"),
      server = express(),
      http = __webpack_require__(/*! http */ "http").Server(server),
      argz = __webpack_require__(/*! minimist */ "undefined?2efa")(process.argv.slice(2)),
      debug = __webpack_require__(/*! ./console */ "./packages/lpack-react-ts-apollo/App/console.tsx").default("server");

const fetch = __webpack_require__(/*! node-fetch */ "undefined?5cd5");

global.fetch = fetch;
process.title = _config__WEBPACK_IMPORTED_MODULE_1__["default"].project.name + '::server';
debug.warn("process.env.DEBUG : ", process.env.DEBUG);
server.use(express.json({
  limit: '10mb'
})); // to support JSON-encoded bodies

server.use(express.urlencoded({
  extended: true,
  limit: '10mb'
})); // to support URL-encoded bodies

Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])(server, http);
var server_instance = http.listen(parseInt(argz.p || argz.port || 8000), function () {
  debug.info('Running on ', server_instance.address().port);
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(server, "server", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\index.server.tsx");
  reactHotLoader.register(http, "http", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\index.server.tsx");
  reactHotLoader.register(argz, "argz", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\index.server.tsx");
  reactHotLoader.register(debug, "debug", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\index.server.tsx");
  reactHotLoader.register(server_instance, "server_instance", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\index.server.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/index.tsx":
/*!******************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js */ "undefined?770c");
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "undefined?5e9a");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "undefined?9439");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "undefined?c9d0");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-loader/root */ "undefined?328e");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime */ "undefined?bc80");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_html_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.html.tsx */ "./packages/lpack-react-ts-apollo/App/index.html.tsx");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "undefined?20e6");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "undefined?a371");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var App_db_lib_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! App/db/lib/apollo */ "./packages/lpack-react-ts-apollo/App/db/lib/apollo.ts");
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







 // The `Context` type for the Koa HTTP server

// Apollo GraphQL
 // React SSR routers


/* Local */
// Root component
// Utility for creating a per-request Apollo client

 // Types

// Class for handling Webpack stats output
// import Output from "@/lib/output";
//
// Every byte sent back to the client is React; this is our main template
// import Html from "@/views/ssr";
const ctrl = {
  renderTo(node, initialState = {}) {
    const isDev = "development" !== 'production',
          App = __webpack_require__(/*! App/App.tsx */ "./App/App.tsx").default,
          HMRApp = isDev ? Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__["hot"])(App) : App;

    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HMRApp, null), node);

    if (false) {}
  },

  async renderSSR({
    state,
    url
  }, cb) {
    let content = "",
        App = __webpack_require__(/*! App/App.tsx */ "./App/App.tsx").default,
        html; //
    // Create a new Apollo client


    const client = Object(App_db_lib_apollo__WEBPACK_IMPORTED_MODULE_10__["createClient"])(); // Create a fresh 'context' for React Router

    const routerContext = {}; // Render our components - passing down MobX state, a GraphQL client,
    // and a router for rendering based on our route config

    const components = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_8__["ApolloProvider"], {
      client: client
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_9__["StaticRouter"], {
      location: url,
      context: routerContext
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, null))); // Await GraphQL data coming from the API server

    await Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["getDataFromTree"])(components); // Handle 404 `Not Found`

    if (routerContext.status === 404) {
      // By default, just set the status code to 404. You can
      // modify this section to do things like log errors to a
      // third-party, or redirect users to a dedicated 404 page
      // ctx.status = 404;
      // ctx.body = "Not found";
      // html = "<!doctype html>\n" + renderToString(<Index ssrErrors={`<pre>${e}\n${e.stack}</pre>`}/>);
      //
      return cb(404, html);
    } // Create response HTML


    html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(components);

    try {
      // content = renderToString(<App/>);
      html = "<!doctype html>\n" + Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_index_html_tsx__WEBPACK_IMPORTED_MODULE_7__["default"] // css={output.client.main("css")!}
      , {
        helmet: react_helmet__WEBPACK_IMPORTED_MODULE_4__["Helmet"].renderStatic(),
        content: html // scripts={output.client.scripts()}
        ,
        state: client.extract() // <-- GraphQL store

      }));
    } catch (e) {
      html = "<!doctype html>\n" + Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_index_html_tsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        ssrErrors: `<pre>${e}\n${e.stack}</pre>`
      }));
    }

    cb(null, html);
  }

};
const _default = ctrl;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ctrl, "ctrl", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\index.tsx");
  reactHotLoader.register(_default, "default", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./packages/lpack-react-ts-apollo/App/ui/comps/Post.js":
/*!*************************************************************!*\
  !*** ./packages/lpack-react-ts-apollo/App/ui/comps/Post.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Posts; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "undefined?f8b7");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "undefined?5a92");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




const GetPostsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query GetPostsQuery {
        posts {
            _id
            title
            content
        }
    }
`;
function Posts({
  onPostSelected
}) {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GetPostsQuery);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    name: "post",
    onChange: onPostSelected
  }, data.posts.map(post => react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    key: post.title
  }, post.title)));
}

__signature__(Posts, "useQuery{{ loading, error, data }}", () => [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"]]);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GetPostsQuery, "GetPostsQuery", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\ui\\comps\\Post.js");
  reactHotLoader.register(Posts, "Posts", "G:\\n8tz\\libs\\lpack\\layer-pack-samples\\samples\\minimal-ts-react-graphql\\packages\\lpack-react-ts-apollo\\App\\ui\\comps\\Post.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi App/index.server.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! App/index.server.tsx */"./packages/lpack-react-ts-apollo/App/index.server.tsx");


/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "undefined?1111":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "undefined?188d":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "undefined?1c5c":
/*!*********************************************!*\
  !*** external "subscriptions-transport-ws" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("subscriptions-transport-ws");

/***/ }),

/***/ "undefined?20e6":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "undefined?22f3":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "undefined?22fe":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "undefined?2efa":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("minimist");

/***/ }),

/***/ "undefined?3114":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "undefined?328e":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),

/***/ "undefined?4274":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "undefined?4bd1":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "undefined?508e":
/*!***************************!*\
  !*** external "debounce" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),

/***/ "undefined?588e":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "undefined?5a92":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "undefined?5cd5":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "undefined?5e9a":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "undefined?63a5":
/*!*********************!*\
  !*** external "is" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is");

/***/ }),

/***/ "undefined?63f7":
/*!*******************************!*\
  !*** external "debug-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug-logger");

/***/ }),

/***/ "undefined?6c75":
/*!************************************!*\
  !*** external "apollo-link-error" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "undefined?714f":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "undefined?770c":
/*!**************************!*\
  !*** external "core-js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js");

/***/ }),

/***/ "undefined?7cef":
/*!*****************************************************!*\
  !*** external "layer-pack/etc/utils/indexUtils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("layer-pack/etc/utils/indexUtils.js");

/***/ }),

/***/ "undefined?8dc2":
/*!**************************************************!*\
  !*** external "@graphql-toolkit/schema-merging" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@graphql-toolkit/schema-merging");

/***/ }),

/***/ "undefined?9439":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "undefined?a371":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "undefined?bc80":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "undefined?c9d0":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "undefined?cbd3":
/*!***********************************!*\
  !*** external "apollo-utilities" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),

/***/ "undefined?d9ca":
/*!*********************************!*\
  !*** external "apollo-link-ws" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),

/***/ "undefined?f8b7":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ })

/******/ });
//# sourceMappingURL=App.server.js.map