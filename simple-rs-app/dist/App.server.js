/** wpi externals - add module path **/
{
let ___wpi_amp = require('webpack-inherit/etc/node/loadModulePaths.js')(["G:\\n8tz\\libs\\wpi\\webpack-inherit-samples\\simple-rs-app\\node_modules"]);
}

/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
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

/***/ "./App/.wpiConfig.json":
/*!*****************************!*\
  !*** ./App/.wpiConfig.json ***!
  \*****************************/
/*! exports provided: project, projectRoot, vars, allCfg, allModId, default */
/***/ (function(module) {

eval("module.exports = {\"project\":{\"name\":\"simple-rs-app-alone\",\"author\":\"Nathan Braun <n8tz.js@gmail.com>\",\"version\":\"1.0.0\"},\"projectRoot\":\"G:\\\\n8tz\\\\libs\\\\wpi\\\\webpack-inherit-samples\\\\simple-rs-app\",\"vars\":{\"rootAlias\":\"App\",\"externals\":true,\"webpackPatch\":{\"devtool\":\"eval\",\"watchOptions\":{\"aggregateTimeout\":300,\"poll\":1000}}},\"allCfg\":[{\"rootFolder\":\"App\",\"libsPath\":\"./libs\",\"vars\":{\"externals\":true,\"webpackPatch\":{\"devtool\":\"eval\",\"watchOptions\":{\"aggregateTimeout\":300,\"poll\":1000}}},\"extend\":[\"wpi-react-rs-sass-ssr\"]},{\"rootFolder\":\"App\",\"extend\":[\"wpi-react-hmr-ssr\"]},{\"rootFolder\":\"App\",\"config\":\"./etc/wp/webpack.config.api.js\",\"extend\":[]}],\"allModId\":[\"wpi-react-rs-sass-ssr\",\"wpi-react-hmr-ssr\"]};\n\n//# sourceURL=webpack:///./App/.wpiConfig.json?");

/***/ }),

/***/ "./App/App.js":
/*!********************!*\
  !*** ./App/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"undefined?24b3\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"undefined?36a1\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"undefined?03c7\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"undefined?20a8\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"undefined?74ba\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"undefined?df9b\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ui_pages_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/pages/Home */ \"./App/ui/pages/Home.js\");\n/* harmony import */ var _ui_components_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/components/AppBar */ \"./App/ui/components/AppBar.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"undefined?53b9\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"undefined?36e2\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"undefined?7ff1\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ \"undefined?0beb\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Settings */ \"undefined?6a05\");\n/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Home */ \"undefined?2778\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/styles/index.scss */ \"./App/ui/styles/index.scss\");\n/* harmony import */ var _ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n\n\n\n\n\n\n\nvar Settings = function Settings(props) {\n  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ui_pages_Home__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({}, props, {\n    editable: true\n  }));\n};\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _React$Component);\n\n  function App() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {};\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{\n    key: \"render\",\n    value: function render() {\n      var Router = react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"BrowserRouter\"];\n      if (this.props.location) Router = react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"StaticRouter\"];\n      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Router, {\n        location: this.props.location,\n        context: {}\n      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ui_components_AppBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Route\"], {\n        path: \"/\",\n        exact: true,\n        component: _ui_pages_Home__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__[\"Route\"], {\n        path: \"/settings\",\n        component: Settings\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./App/App.js?");

/***/ }),

/***/ "./App/App.scope.js":
/*!**************************!*\
  !*** ./App/App.scope.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"undefined?4d9b\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ \"undefined?0422\");\n/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superagent */ \"undefined?a026\");\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ \"undefined?beec\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rscopes */ \"undefined?05b7\");\n/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rscopes__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _obj, _init, _init2;\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\nvar asStore = rscopes__WEBPACK_IMPORTED_MODULE_4__[\"spells\"].asStore,\n    asScope = rscopes__WEBPACK_IMPORTED_MODULE_4__[\"spells\"].asScope;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_obj = {\n  appState: {\n    selectedWidgetId: \"rkUQHZrqM\",\n    selectWidget: function selectWidget(selectedWidgetId) {\n      return {\n        selectedWidgetId: selectedWidgetId\n      };\n    },\n    saveState: function saveState() {\n      superagent__WEBPACK_IMPORTED_MODULE_2___default.a.post('/', this.scopeObj.serialize()).then(function (e, r) {\n        console.log(e, r);\n      });\n    }\n  },\n  widgets: {\n    // initial state\n    items: [{\n      \"_id\": \"rkUQHZrqM\",\n      \"location\": \"Lisbonne\",\n      \"size\": {\n        \"width\": 350,\n        \"height\": 400\n      },\n      \"position\": {\n        \"x\": 403,\n        \"y\": 111\n      }\n    }, {\n      \"_id\": \"YDNiVOf1j\",\n      \"size\": {\n        \"width\": 350,\n        \"height\": 400\n      },\n      \"position\": {\n        \"x\": 21,\n        \"y\": 108\n      },\n      \"location\": \"paris\"\n    }, {\n      \"_id\": \"FkQ3V9Hcb\",\n      \"size\": {\n        \"width\": 350,\n        \"height\": 400\n      },\n      \"position\": {\n        \"x\": 771,\n        \"y\": 108\n      },\n      \"location\": \"rome\"\n    }, {\n      \"_id\": \"bYNiMYG_0\",\n      \"size\": {\n        \"width\": 514,\n        \"height\": 329\n      },\n      \"position\": {\n        \"x\": 28,\n        \"y\": 525\n      },\n      \"location\": \"marseille\"\n    }, {\n      \"_id\": \"5SJehewl2\",\n      \"size\": {\n        \"width\": 563,\n        \"height\": 328\n      },\n      \"position\": {\n        \"x\": 558,\n        \"y\": 526\n      },\n      \"location\": \"montpellier\"\n    }],\n    // actions\n    newWidget: function newWidget() {\n      return {\n        items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.nextState.items), [{\n          _id: shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate(),\n          size: {\n            width: 350,\n            height: 200\n          },\n          position: {\n            x: 100 + ~~(Math.random() * 600),\n            y: 100 + ~~(Math.random() * 600)\n          }\n        }])\n      };\n    },\n    updateWidget: function updateWidget(widget) {\n      return {\n        items: this.nextState.items.map(function (it) {\n          return it._id === widget._id ? widget : it;\n        })\n      };\n    },\n    rmWidget: function rmWidget(id) {\n      return {\n        items: this.nextState.items.filter(function (it) {\n          return it._id !== id;\n        })\n      };\n    }\n  }\n}, (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_obj, \"appState\", [asStore], (_init = Object.getOwnPropertyDescriptor(_obj, \"appState\"), _init = _init ? _init.value : undefined, {\n  enumerable: true,\n  configurable: true,\n  writable: true,\n  initializer: function initializer() {\n    return _init;\n  }\n}), _obj), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_obj, \"widgets\", [asStore], (_init2 = Object.getOwnPropertyDescriptor(_obj, \"widgets\"), _init2 = _init2 ? _init2.value : undefined, {\n  enumerable: true,\n  configurable: true,\n  writable: true,\n  initializer: function initializer() {\n    return _init2;\n  }\n}), _obj)), _obj);\n\n//# sourceURL=webpack:///./App/App.scope.js?");

/***/ }),

/***/ "./App/MapOf.App_api_____js.gen.js":
/*!*****************************************!*\
  !*** ./App/MapOf.App_api_____js.gen.js ***!
  \*****************************************/
/*! exports provided: index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"index\", function() { return index; });\n/* This is a virtual file generated by webpack-inherit */\nvar req,\n    _exports = {},\n    root;\nreq = __webpack_require__(\"./App/api sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./node_modules/wpi-react-hmr-ssr/App/api sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nvar index = _exports.index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_exports);\n\n//# sourceURL=webpack:///./App/MapOf.App_api_____js.gen.js?");

/***/ }),

/***/ "./App/api sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!*******************************************!*\
  !*** ./App/api sync ^\.\/([^\\\/]+)\.js$ ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./index.js\": \"./App/api/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./App/api sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\";\n\n//# sourceURL=webpack:///./App/api_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\.js$?");

/***/ }),

/***/ "./App/api/index.js":
/*!**************************!*\
  !*** ./App/api/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var App_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/index.js */ \"./App/index.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"undefined?9439\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\nvar wpiConf = __webpack_require__(/*! App/.wpiConfig.json */ \"./App/.wpiConfig.json\"),\n    fs = __webpack_require__(/*! fs */ \"fs\"),\n    express = __webpack_require__(/*! express */ \"undefined?22fe\"),\n    tpl = __webpack_require__(/*! ../index.html.tpl */ \"./App/index.html.tpl\");\n\nvar currentState;\n\ntry {\n  currentState = fs.readFileSync('./lastAppState.json');\n  currentState = JSON.parse(currentState);\n} catch (e) {\n  currentState = undefined;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (server) {\n  server.get('/', function (req, res, next) {\n    App_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderSSR({\n      location: req.url,\n      state: currentState,\n      tpl: tpl\n    }, function (err, html, nstate) {\n      res.send(200, html);\n    });\n  });\n  server.get('/settings', function (req, res, next) {\n    App_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderSSR({\n      location: req.url,\n      state: currentState,\n      tpl: tpl\n    }, function (err, html, nstate) {\n      res.send(200, html);\n    });\n  });\n  server.use(express[\"static\"](wpiConf.projectRoot + '/dist'));\n  server.use(\"/medias\", express[\"static\"](wpiConf.projectRoot + '/public'));\n  server.post('/', function (req, res, next) {\n    console.log(\"New state pushed\");\n    currentState = req.body;\n\n    try {\n      fs.writeFileSync('./lastAppState.json', JSON.stringify(req.body));\n    } catch (e) {}\n\n    res.send(200, 'ok');\n  });\n});\n\n//# sourceURL=webpack:///./App/api/index.js?");

/***/ }),

/***/ "./App/index.html.tpl":
/*!****************************!*\
  !*** ./App/index.html.tpl ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (function () {\n  var fn = function anonymous(it\n/*``*/) {\nvar out='<!DOCTYPE html><!-- ~ Copyright (c)  2018 Wise Wild Web . ~ ~  MIT License ~ ~  Permission is hereby granted, free of charge, to any person obtaining a copy ~  of this software and associated documentation files (the \"Software\"), to deal ~  in the Software without restriction, including without limitation the rights ~  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell ~  copies of the Software, and to permit persons to whom the Software is ~  furnished to do so, subject to the following conditions: ~ ~  The above copyright notice and this permission notice shall be included in all ~  copies or substantial portions of the Software. ~ ~  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR ~  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, ~  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE ~  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER ~  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, ~  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE ~  SOFTWARE. ~ ~ @author : Nathanael Braun ~ @contact : n8tz.js@gmail.com --><html lang=\"en\"><head> <meta charset=\"UTF-8\"> <title>RS Weather desk</title> <script>window.__STATE__  ='+(it.state || \"{}\")+';</script> <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\"></head><body><div id=\"app\">'+(it.app || '')+'</div><script src=\"./App.vendors.js\"></script><script src=\"./App.js\"></script></body></html>';return out;\n};\n  fn.render = fn;\n  return fn;\n})();\n\n//# sourceURL=webpack:///./App/index.html.tpl?");

/***/ }),

/***/ "./App/index.js":
/*!**********************!*\
  !*** ./App/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.scope */ \"./App/App.scope.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ \"undefined?beec\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"undefined?5e9a\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"undefined?9439\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_rescope__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-rescope */ \"undefined?492a\");\n/* harmony import */ var react_rescope__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_rescope__WEBPACK_IMPORTED_MODULE_5__);\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n\n\nvar ctrl = {\n  renderTo: function renderTo(node, state) {\n    var cScope = new react_rescope__WEBPACK_IMPORTED_MODULE_5__[\"Scope\"](_App_scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      id: \"App\",\n      autoDestroy: true\n    }),\n        App = Object(react_rescope__WEBPACK_IMPORTED_MODULE_5__[\"reScope\"])(cScope)(__webpack_require__(/*! ./App */ \"./App/App.js\")[\"default\"]);\n    window.contexts = react_rescope__WEBPACK_IMPORTED_MODULE_5__[\"Scope\"].scopes;\n    state && cScope.restore(state);\n    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, null), node);\n\n    if (false) {}\n  },\n  renderSSR: function renderSSR(cfg, cb) {\n    var _attempts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n    var rid = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),\n        cScope = new react_rescope__WEBPACK_IMPORTED_MODULE_5__[\"Scope\"](_App_scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      id: rid,\n      autoDestroy: false\n    }),\n        App = Object(react_rescope__WEBPACK_IMPORTED_MODULE_5__[\"reScope\"])(cScope)(__webpack_require__(/*! ./App */ \"./App/App.js\")[\"default\"]);\n    cfg.state && cScope.restore(cfg.state, {\n      alias: \"App\"\n    });\n    var html,\n        appHtml = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, {\n      location: cfg.location\n    })),\n        stable = cScope.isStableTree();\n    cScope.onceStableTree(function (state) {\n      var nstate = cScope.serialize({\n        alias: \"App\"\n      });\n\n      if (!stable && _attempts < 0) {\n        ctrl.renderSSR(cfg, cb, ++_attempts);\n      } else {\n        try {\n          html = cfg.tpl.render({\n            app: appHtml,\n            state: JSON.stringify(nstate)\n          });\n        } catch (e) {\n          return cb(e);\n        }\n\n        cb(null, html, !stable && nstate);\n      }\n\n      cScope.destroy();\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ctrl);\n\n//# sourceURL=webpack:///./App/index.js?");

/***/ }),

/***/ "./App/stores/WeatherSearch.js":
/*!*************************************!*\
  !*** ./App/stores/WeatherSearch.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WeatherSearch; });\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"undefined?e108\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"undefined?24b3\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"undefined?36a1\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"undefined?03c7\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"undefined?20a8\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"undefined?56eb\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"undefined?74ba\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rscopes */ \"undefined?05b7\");\n/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rscopes__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var rscopes_spells__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rscopes/spells */ \"undefined?8ec2\");\n/* harmony import */ var rscopes_spells__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rscopes_spells__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! superagent */ \"undefined?a026\");\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\nvar WeatherSearch =\n/*#__PURE__*/\nfunction (_Store) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(WeatherSearch, _Store);\n\n  function WeatherSearch() {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, WeatherSearch);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(WeatherSearch).apply(this, arguments));\n\n    _this.checkUpdate = function () {\n      var _this$data = _this.data,\n          location = _this$data.location,\n          fetched = _this$data.fetched;\n\n      if (location && fetched < Date.now() - 1000 * 60) {\n        console.log(\"search \", location);\n\n        _this.doSearch(location);\n      }\n    };\n\n    _this._refreshTm = setInterval(_this.checkUpdate, 1000 * 10);\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(WeatherSearch, [{\n    key: \"destroy\",\n    value: function destroy() {\n      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(WeatherSearch.prototype), \"destroy\", this).call(this);\n\n      clearInterval(this._refreshTm);\n    }\n  }, {\n    key: \"apply\",\n    value: function apply() {\n      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var state = arguments.length > 1 ? arguments[1] : undefined;\n\n      var _ref = arguments.length > 2 ? arguments[2] : undefined,\n          location = _ref.location,\n          results = _ref.results,\n          record = _ref.record;\n\n      location = location || state.defaultLocation;\n      if (location == data.location && data.results) return data; // do query weather if needed\n\n      if (location) {\n        this.doSearch(location);\n        return {\n          location: location,\n          fetching: true\n        };\n      }\n\n      return data;\n    }\n  }, {\n    key: \"doSearch\",\n    value: function doSearch(location) {\n      var _this2 = this;\n\n      var state = this.nextState;\n      this.wait(); // so the whole scope tree will wait for SSR\n\n      superagent__WEBPACK_IMPORTED_MODULE_9___default.a.get(state.src + location).then(function (res) {\n        if (location !== _this2.data.location) return; // update the store data\n\n        _this2.push({\n          results: res.body,\n          location: location,\n          fetching: false,\n          fetched: Date.now()\n        }); // update the record location\n\n\n        state.record && _this2.$actions.updateWidget(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state.record, {\n          location: location\n        }));\n      }) // release anyway\n      .then(function (e) {\n        return _this2.release();\n      })[\"catch\"](function (e) {\n        return _this2.release();\n      });\n      this.push({\n        location: location,\n        fetching: true\n      });\n    }\n  }]);\n\n  return WeatherSearch;\n}(rscopes__WEBPACK_IMPORTED_MODULE_7__[\"Store\"]);\n\nWeatherSearch.state = {\n  // initial state value\n  src: \"http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=\",\n  autoUpdate: 1000 * 10\n};\nWeatherSearch.actions = {\n  updateWeatherSearch: function updateWeatherSearch(location) {\n    if (location.length < 4) return {\n      location: location\n    };\n    return {\n      location: location\n    };\n  }\n};\n\n\n//# sourceURL=webpack:///./App/stores/WeatherSearch.js?");

/***/ }),

/***/ "./App/ui/components/AppBar.js":
/*!*************************************!*\
  !*** ./App/ui/components/AppBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ \"undefined?9283\");\n/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"undefined?91cd\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"undefined?36e2\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"undefined?7ff1\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"undefined?0beb\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Settings */ \"undefined?6a05\");\n/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Home */ \"undefined?2778\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"undefined?53b9\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(_ref);\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    position: \"static\",\n    className: \"AppBar\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    cvariant: \"h6\",\n    color: \"inherit\",\n    noWrap: true\n  }, \"Weather desk\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"tools\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n    to: \"/\",\n    className: \"homeBtn\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    \"aria-label\": \"home\",\n    color: \"inherit\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default.a, null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n    to: \"/settings\",\n    className: \"settingsBtn\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    \"aria-label\": \"settings\",\n    color: \"inherit\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6___default.a, null))))));\n});\n\n//# sourceURL=webpack:///./App/ui/components/AppBar.js?");

/***/ }),

/***/ "./App/ui/components/WeatherInfos.js":
/*!*******************************************!*\
  !*** ./App/ui/components/WeatherInfos.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"undefined?bd76\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var weatherData = _ref.weatherData,\n      lastQuery = _ref.lastQuery;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"WeatherInfos\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"location\"\n  }, weatherData.name, \"\\xA0\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"sub\", null, \"(\", moment__WEBPACK_IMPORTED_MODULE_1___default()(weatherData.dt * 1000).fromNow(), \")\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"background\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://source.unsplash.com/600x400/?day,sky,\" + weatherData.name\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"picto\"\n  }, weatherData.weather[0] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"http://openweathermap.org/img/w/\" + weatherData.weather[0].icon + '.png'\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), weatherData.weather[0] && weatherData.weather[0].description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"infos\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"temp\"\n  }, weatherData.main.temp, \"\\xB0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"wind\"\n  }, weatherData.wind.speed, \" mh\")));\n});\n\n//# sourceURL=webpack:///./App/ui/components/WeatherInfos.js?");

/***/ }),

/***/ "./App/ui/containers/WeatherBlock.js":
/*!*******************************************!*\
  !*** ./App/ui/containers/WeatherBlock.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WeatherBlock; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"undefined?24b3\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"undefined?36a1\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"undefined?03c7\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"undefined?20a8\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"undefined?74ba\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"undefined?3832\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Fab */ \"undefined?8406\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Delete */ \"undefined?a433\");\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"undefined?52bc\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Save */ \"undefined?128e\");\n/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rscopes */ \"undefined?05b7\");\n/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rscopes__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var App_stores_WeatherSearch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! App/stores/WeatherSearch */ \"./App/stores/WeatherSearch.js\");\n/* harmony import */ var App_ui_components_WeatherInfos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! App/ui/components/WeatherInfos */ \"./App/ui/components/WeatherInfos.js\");\n\n\n\n\n\n\nvar _dec, _dec2, _dec3, _class, _class2, _temp;\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n\n\n\n\n\nvar WeatherBlock = (_dec = Object(rscopes__WEBPACK_IMPORTED_MODULE_11__[\"reScope\"])({\n  // will keep separate instances for each instance of WeatherWidget\n  // WeatherSearch can still require stores in the parents scopes\n  WeatherSearch: App_stores_WeatherSearch__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n}), _dec2 = Object(rscopes__WEBPACK_IMPORTED_MODULE_11__[\"propsToScope\"])([\"record.location:WeatherSearch.defaultLocation\", \"record:WeatherSearch.record\"]), _dec3 = Object(rscopes__WEBPACK_IMPORTED_MODULE_11__[\"scopeToProps\"])(\"WeatherSearch\"), _dec(_class = _dec2(_class = _dec3(_class = (_temp = _class2 =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(WeatherBlock, _React$Component);\n\n  function WeatherBlock() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WeatherBlock);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(WeatherBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {};\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WeatherBlock, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          record = _this$props.record,\n          $actions = _this$props.$actions,\n          editable = _this$props.editable,\n          WeatherSearch = _this$props.WeatherSearch,\n          state = this.state;\n      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n        className: \"WeatherBlock\"\n      }, !this.state.editing && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, WeatherSearch.results && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(App_ui_components_WeatherInfos__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        weatherData: WeatherSearch.results\n      }) || WeatherSearch.fetching && \"Loading....\" || \"Edit me !\", editable && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        \"aria-label\": \"edit\",\n        className: \"edit\",\n        onClick: function onClick(e) {\n          return _this2.setState({\n            editing: true\n          });\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default.a, null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        \"aria-label\": \"Delete\",\n        className: \"delete\",\n        onClick: function onClick(e) {\n          return $actions.rmWidget(record._id);\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default.a, null)))) || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n        className: \"search\"\n      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"input\", {\n        type: \"text\",\n        onChange: function onChange(e) {\n          _this2.setState({\n            searching: e.target.value\n          });\n\n          if (e.target.value.length > 2) $actions.updateWeatherSearch(e.target.value);\n        },\n        value: state.searching !== undefined ? state.searching : record.location,\n        onMouseDown: function onMouseDown(e) {\n          return e.stopPropagation();\n        }\n      })), WeatherSearch.fetching && \"Loading....\" || WeatherSearch.results && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(App_ui_components_WeatherInfos__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        weatherData: WeatherSearch.results\n      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        \"aria-label\": \"Save\",\n        className: \"save\",\n        editable: record.fetching,\n        onClick: function onClick(e) {\n          return _this2.setState({\n            editing: false\n          });\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10___default.a, null))));\n    }\n  }]);\n\n  return WeatherBlock;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component), _class2.propTypes = {\n  record: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,\n  editable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool\n}, _temp)) || _class) || _class) || _class);\n\n;\n\n//# sourceURL=webpack:///./App/ui/containers/WeatherBlock.js?");

/***/ }),

/***/ "./App/ui/containers/Widget.js":
/*!*************************************!*\
  !*** ./App/ui/containers/Widget.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Widget; });\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"undefined?e108\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"undefined?24b3\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"undefined?36a1\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"undefined?03c7\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"undefined?20a8\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"undefined?74ba\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"undefined?3832\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rnd */ \"undefined?84ab\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_rnd__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rscopes */ \"undefined?05b7\");\n/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rscopes__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\nvar _class, _class2, _temp;\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\nvar resizeHandles = {\n  bottom: true,\n  bottomLeft: true,\n  bottomRight: true,\n  left: true,\n  right: true,\n  top: true,\n  topLeft: true,\n  topRight: true\n};\n\nvar Widget = Object(rscopes__WEBPACK_IMPORTED_MODULE_9__[\"reScope\"])(_class = (_temp = _class2 =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Widget, _React$Component);\n\n  function Widget() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Widget);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Widget)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {};\n\n    _this.saveState = function (e, d) {\n      var _this$props = _this.props,\n          $actions = _this$props.$actions,\n          record = _this$props.record;\n      $actions.updateWidget(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, record, {\n        size: _this.state.size || record.size,\n        position: _this.state.position || record.position\n      }));\n    };\n\n    _this.drag = function (e, d) {\n      var _this$props2 = _this.props,\n          record = _this$props2.record,\n          dispatch = _this$props2.dispatch,\n          onSelect = _this$props2.onSelect,\n          selected = _this$props2.selected;\n      !selected && onSelect(record);\n\n      _this.setState({\n        position: {\n          x: d.x,\n          y: d.y\n        }\n      });\n    };\n\n    _this.resize = function (e, direction, ref, delta, position) {\n      _this.setState({\n        position: position,\n        size: {\n          width: ref.offsetWidth,\n          height: ref.offsetHeight\n        }\n      });\n    };\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Widget, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props3 = this.props,\n          _this$props3$record = _this$props3.record;\n      _this$props3$record = _this$props3$record === void 0 ? {} : _this$props3$record;\n      var position = _this$props3$record.position,\n          size = _this$props3$record.size,\n          record = _this$props3.record,\n          children = _this$props3.children,\n          editable = _this$props3.editable,\n          dispatch = _this$props3.dispatch,\n          onSelect = _this$props3.onSelect,\n          selected = _this$props3.selected,\n          state = this.state;\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_rnd__WEBPACK_IMPORTED_MODULE_8__[\"Rnd\"], {\n        className: \"Widget\",\n        disableDragging: !editable,\n        enableResizing: editable && resizeHandles,\n        style: {\n          zIndex: selected ? 2000 : 1\n        },\n        size: state.size || size,\n        position: state.position || position,\n        onDragStop: this.saveState,\n        onResizeStop: this.saveState,\n        onDrag: this.drag,\n        onResize: this.resize\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \" content\"\n      }, children));\n    }\n  }]);\n\n  return Widget;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component), _class2.propTypes = {\n  selected: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n  editable: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n  record: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,\n  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func\n}, _temp)) || _class;\n\n\n;\n\n//# sourceURL=webpack:///./App/ui/containers/Widget.js?");

/***/ }),

/***/ "./App/ui/pages/Home.js":
/*!******************************!*\
  !*** ./App/ui/pages/Home.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ \"undefined?9283\");\n/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"undefined?24b3\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"undefined?36a1\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"undefined?03c7\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"undefined?20a8\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"undefined?74ba\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"undefined?3832\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var App_ui_containers_Widget_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! App/ui/containers/Widget.js */ \"./App/ui/containers/Widget.js\");\n/* harmony import */ var App_ui_containers_WeatherBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! App/ui/containers/WeatherBlock */ \"./App/ui/containers/WeatherBlock.js\");\n/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rscopes */ \"undefined?05b7\");\n/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rscopes__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Fab */ \"undefined?8406\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Add */ \"undefined?3b94\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Save */ \"undefined?128e\");\n/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\nvar _dec, _class, _class2, _temp;\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n\n\n\n\nvar Home = (_dec = Object(rscopes__WEBPACK_IMPORTED_MODULE_10__[\"scopeToProps\"])(\"widgets\", \"appState\"), _dec(_class = (_temp = _class2 =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Home, _React$Component);\n\n  function Home() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Home);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {};\n\n    _this.selectWidget = function (record) {\n      var $actions = _this.props.$actions;\n      $actions.selectWidget(record._id);\n    };\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Home, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          _this$props$widgets = _this$props.widgets,\n          widgets = _this$props$widgets === void 0 ? {} : _this$props$widgets,\n          appState = _this$props.appState,\n          $actions = _this$props.$actions,\n          editable = _this$props.editable;\n\n      _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(this.state);\n\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"desk\"\n      }, widgets.items.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(App_ui_containers_Widget_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          key: item._id,\n          record: item,\n          editable: editable,\n          onSelect: _this2.selectWidget,\n          selected: item._id === appState.selectedWidgetId\n        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(App_ui_containers_WeatherBlock__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          record: item,\n          editable: editable,\n          onClose: _this2.rmWidget\n        }));\n      })), editable && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        \"aria-label\": \"edit\",\n        className: \"newBtn button\",\n        onClick: $actions.newWidget\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default.a, null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        \"aria-label\": \"Delete\",\n        className: \"saveBtn button\",\n        onClick: $actions.saveState\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_13___default.a, null))));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component), _class2.propTypes = {\n  editable: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool\n}, _temp)) || _class);\n\n\n//# sourceURL=webpack:///./App/ui/pages/Home.js?");

/***/ }),

/***/ "./App/ui/styles/index.scss":
/*!**********************************!*\
  !*** ./App/ui/styles/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty (null-loader)\n\n//# sourceURL=webpack:///./App/ui/styles/index.scss?");

/***/ }),

/***/ "./node_modules/wpi-react-hmr-ssr/App/api sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!**************************************************************************!*\
  !*** ./node_modules/wpi-react-hmr-ssr/App/api sync ^\.\/([^\\\/]+)\.js$ ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./index.js\": \"./App/api/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/wpi-react-hmr-ssr/App/api sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\";\n\n//# sourceURL=webpack:///./node_modules/wpi-react-hmr-ssr/App/api_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\.js$?");

/***/ }),

/***/ "./node_modules/wpi-react-hmr-ssr/App/api.js":
/*!***************************************************!*\
  !*** ./node_modules/wpi-react-hmr-ssr/App/api.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is */ \"undefined?63a5\");\n/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/(*).js */ \"./App/MapOf.App_api_____js.gen.js\");\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\nvar debug = __webpack_require__(/*! App/console */ \"./node_modules/wpi-react-hmr-ssr/App/console.js\")[\"default\"](\"server\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (server, http) {\n  return Object.keys(_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).map(function (service) {\n    return is__WEBPACK_IMPORTED_MODULE_0___default.a.fn(_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][service]) ? {\n      name: service,\n      priorityLevel: 0,\n      service: _api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][service]\n    } : _api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][service];\n  }).sort(function (a, b) {\n    return a.priorityLevel > b.priorityLevel ? -1 : 1;\n  }).forEach(function (service) {\n    try {\n      service.service(server, http);\n    } catch (e) {\n      debug.error(\"Api fail loading service \", service.name, \"\\n\", e);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./node_modules/wpi-react-hmr-ssr/App/api.js?");

/***/ }),

/***/ "./node_modules/wpi-react-hmr-ssr/App/console.js":
/*!*******************************************************!*\
  !*** ./node_modules/wpi-react-hmr-ssr/App/console.js ***!
  \*******************************************************/
/*! exports provided: console, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"console\", function() { return d_console; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"undefined?4d9b\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"undefined?0db5\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\nvar cfg = __webpack_require__(/*! App/.wpiConfig.json */ \"./App/.wpiConfig.json\"),\n    debug = __webpack_require__(/*! debug-logger */ \"undefined?63f7\"),\n    isFunction = __webpack_require__(/*! is */ \"undefined?63a5\")[\"function\"],\n    isBrowserSide = new Function(\"try {return this===window;}catch(e){ return false;}\")(),\n    debounce = __webpack_require__(/*! debounce */ \"undefined?508e\"),\n    _console = !isBrowserSide && function _console(ns) {\n  var nmFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {\n    return '';\n  };\n\n  var c = debug(ns),\n      fn = function fn(ns2) {\n    return new _console(ns + \"::\" + ns2);\n  };\n\n  for (var k in c) {\n    if (c.hasOwnProperty(k) && !this[k] && isFunction(c[k])) fn[k] = c[k].bind(c, nmFn(ns));\n  }\n\n  fn.beep = function () {\n    process.stdout.write('\\x07'); // do a beep\n\n    this.error.apply(this, arguments);\n  };\n\n  return fn;\n} || function _console(ns) {\n  var nmFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {\n    return '';\n  };\n\n  var c = console,\n      fn = function fn(ns2) {\n    return new _console(ns + \"::\" + ns2);\n  };\n\n  for (var k in c) {\n    if (c.hasOwnProperty(k) && !this[k] && isFunction(c[k])) fn[k] = c[k].bind(console, nmFn(ns));\n  }\n\n  fn.beep = function () {\n    this.error.apply(this, arguments);\n  };\n\n  return fn;\n};\n\ndebug.inspectOptions = {\n  colors: true\n};\ndebug.debug.enable(cfg.project.name + '*');\n\nconsole.watch = console.watch || function (oObj, sProp) {\n  var sPrivateProp = \"$_\" + sProp + \"_$\"; // to minimize the name clash risk\n\n  oObj[sPrivateProp] = oObj[sProp]; // overwrite with accessor\n\n  Object.defineProperty(oObj, sProp, {\n    get: function get() {\n      return oObj[sPrivateProp];\n    },\n    set: function set(value) {\n      console.log(\"setting \" + sProp + \" to \" + value);\n      debugger; // sets breakpoint\n\n      oObj[sPrivateProp] = value;\n    }\n  });\n}; // well group the react/vendors warns as they abuse of it each minors versions\n\n\nisBrowserSide && !window.consoleHookDone && function () {\n  window.consoleHookDone = true;\n\n  function truncate(string, ln) {\n    if (string.length > ln) return string.substring(0, ln) + '...';else return string;\n  }\n\n  ;\n  var hookedWarn = console.warn,\n      hookedError = console.error,\n      recentWarn = [],\n      recentErrors = [],\n      warn = debounce(function () {\n    console.groupCollapsed(\" %d %cvendors warns happen%c (%s)\", recentWarn.length, \"color: orange; text-decoration: underline\", \"color: gray; font-style: italic;font-size:.8em\", truncate(recentWarn.map(function (v) {\n      return v.join(', ');\n    }).join('\\t'), 50));\n    recentWarn.forEach(function (_ref) {\n      var _console2;\n\n      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),\n          argz = _ref2[0],\n          trace = _ref2[1];\n\n      (_console2 = console).groupCollapsed.apply(_console2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argz));\n\n      hookedWarn.call(console, trace);\n      console.groupEnd();\n    });\n    recentWarn = [];\n    console.groupEnd();\n  }, 2000),\n      error = debounce(function () {\n    console.groupCollapsed(\" %d %cvendors errors happen%c (%s)\", recentErrors.length, \"color: red; text-decoration: underline\", \"color: gray; font-style: italic;font-size:.8em\", truncate(recentErrors.map(function (v) {\n      return v.join(', ');\n    }).join('\\t'), 50)); // recentErrors.forEach(argz => hookedWarn.apply(console, argz));\n\n    recentErrors.forEach(function (_ref3) {\n      var _console3;\n\n      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),\n          argz = _ref4[0],\n          trace = _ref4[1];\n\n      (_console3 = console).groupCollapsed.apply(_console3, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argz));\n\n      hookedError.call(console, trace);\n      console.groupEnd();\n    });\n    recentErrors = [];\n    console.groupEnd();\n  }, 2000);\n\n  console.warn = function () {\n    for (var _len = arguments.length, argz = new Array(_len), _key = 0; _key < _len; _key++) {\n      argz[_key] = arguments[_key];\n    }\n\n    if (!argz[0] && argz[0].startWith(cfg.project.name)) return hookedWarn.apply(void 0, argz);\n    recentWarn.push([argz, new Error().stack]);\n    warn();\n  };\n\n  console.trace = function () {//if ( /^Caipi/.test(argz[0]) )\n    //    return hookedWarn(...argz);\n    //recentWarn.push([argz, (new Error()).stack]);\n    //warn();\n  };\n\n  console.error = function () {\n    for (var _len2 = arguments.length, argz = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      argz[_key2] = arguments[_key2];\n    }\n\n    if (argz[0].startWith(cfg.project.name)) return hookedWarn.apply(void 0, argz);\n    recentErrors.push([argz, new Error().stack]);\n    error();\n  };\n}();\nvar d_console = new _console(cfg.project.name);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (d_console);\n\n//# sourceURL=webpack:///./node_modules/wpi-react-hmr-ssr/App/console.js?");

/***/ }),

/***/ "./node_modules/wpi-react-hmr-ssr/App/index.server.js":
/*!************************************************************!*\
  !*** ./node_modules/wpi-react-hmr-ssr/App/index.server.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/App */ \"./App/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./node_modules/wpi-react-hmr-ssr/App/api.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"undefined?9439\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n\nvar express = __webpack_require__(/*! express */ \"undefined?22fe\"),\n    server = express(),\n    http = __webpack_require__(/*! http */ \"http\").Server(server),\n    argz = __webpack_require__(/*! minimist */ \"undefined?2efa\")(process.argv.slice(2)),\n    wpiConf = __webpack_require__(/*! App/.wpiConfig */ \"./App/.wpiConfig.json\"),\n    debug = __webpack_require__(/*! App/console */ \"./node_modules/wpi-react-hmr-ssr/App/console.js\")[\"default\"](\"server\");\n\nprocess.title = wpiConf.project.name + '::server';\ndebug.warn(\"process.env.DEBUG : \", process.env.DEBUG);\nserver.use(express.json()); // to support JSON-encoded bodies\n\nserver.use(express.urlencoded()); // to support URL-encoded bodies\n\nObject(_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(server, http);\nvar server_instance = http.listen(parseInt(argz.p || argz.port || 8000), function () {\n  debug.info('Running on ', server_instance.address().port);\n});\n\n//# sourceURL=webpack:///./node_modules/wpi-react-hmr-ssr/App/index.server.js?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi App/index.server ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! App/index.server */\"./node_modules/wpi-react-hmr-ssr/App/index.server.js\");\n\n\n//# sourceURL=webpack:///multi_App/index.server?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "undefined?03c7":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "undefined?0422":
/*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/applyDecoratedDescriptor" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/applyDecoratedDescriptor\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/applyDecoratedDescriptor%22?");

/***/ }),

/***/ "undefined?05b7":
/*!**************************!*\
  !*** external "rscopes" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rscopes\");\n\n//# sourceURL=webpack:///external_%22rscopes%22?");

/***/ }),

/***/ "undefined?0beb":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "undefined?0db5":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "undefined?128e":
/*!******************************************!*\
  !*** external "@material-ui/icons/Save" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Save\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Save%22?");

/***/ }),

/***/ "undefined?20a8":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "undefined?22fe":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "undefined?24b3":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "undefined?2778":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Home\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Home%22?");

/***/ }),

/***/ "undefined?2efa":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"minimist\");\n\n//# sourceURL=webpack:///external_%22minimist%22?");

/***/ }),

/***/ "undefined?36a1":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "undefined?36e2":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "undefined?3832":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "undefined?3b94":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Add\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Add%22?");

/***/ }),

/***/ "undefined?492a":
/*!********************************!*\
  !*** external "react-rescope" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-rescope\");\n\n//# sourceURL=webpack:///external_%22react-rescope%22?");

/***/ }),

/***/ "undefined?4d9b":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/toConsumableArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/toConsumableArray%22?");

/***/ }),

/***/ "undefined?508e":
/*!***************************!*\
  !*** external "debounce" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debounce\");\n\n//# sourceURL=webpack:///external_%22debounce%22?");

/***/ }),

/***/ "undefined?52bc":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Edit\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Edit%22?");

/***/ }),

/***/ "undefined?53b9":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "undefined?56eb":
/*!*********************************************!*\
  !*** external "@babel/runtime/helpers/get" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/get\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/get%22?");

/***/ }),

/***/ "undefined?588e":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "undefined?5e9a":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "undefined?63a5":
/*!*********************!*\
  !*** external "is" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"is\");\n\n//# sourceURL=webpack:///external_%22is%22?");

/***/ }),

/***/ "undefined?63f7":
/*!*******************************!*\
  !*** external "debug-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug-logger\");\n\n//# sourceURL=webpack:///external_%22debug-logger%22?");

/***/ }),

/***/ "undefined?6a05":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Settings\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Settings%22?");

/***/ }),

/***/ "undefined?74ba":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "undefined?7ff1":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "undefined?8406":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Fab\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Fab%22?");

/***/ }),

/***/ "undefined?84ab":
/*!****************************!*\
  !*** external "react-rnd" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-rnd\");\n\n//# sourceURL=webpack:///external_%22react-rnd%22?");

/***/ }),

/***/ "undefined?8ec2":
/*!*********************************!*\
  !*** external "rscopes/spells" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rscopes/spells\");\n\n//# sourceURL=webpack:///external_%22rscopes/spells%22?");

/***/ }),

/***/ "undefined?91cd":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "undefined?9283":
/*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/objectDestructuringEmpty" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectDestructuringEmpty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectDestructuringEmpty%22?");

/***/ }),

/***/ "undefined?9439":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "undefined?a026":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"superagent\");\n\n//# sourceURL=webpack:///external_%22superagent%22?");

/***/ }),

/***/ "undefined?a433":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Delete\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Delete%22?");

/***/ }),

/***/ "undefined?bd76":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "undefined?beec":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"shortid\");\n\n//# sourceURL=webpack:///external_%22shortid%22?");

/***/ }),

/***/ "undefined?df9b":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/extends\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/extends%22?");

/***/ }),

/***/ "undefined?e108":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectSpread\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectSpread%22?");

/***/ })

/******/ });