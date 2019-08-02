/** wi externals **/
require('webpack-inherit/etc/node/loadModulePaths.js').loadPaths({allModulePath:["packages","node_modules"],cDir:__dirname+'/..'},"dist");/** /wi externals **/

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
/*! exports provided: project, buildDate, profile, projectRoot, vars, allCfg, allModId, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"project\\\":{\\\"name\\\":\\\"simple-redux-app\\\",\\\"author\\\":\\\"Nathan Braun <n8tz.js@gmail.com>\\\",\\\"version\\\":\\\"1.0.0\\\"},\\\"buildDate\\\":1564738937007,\\\"profile\\\":\\\"api\\\",\\\"projectRoot\\\":\\\"G:\\\\\\\\n8tz\\\\\\\\libs\\\\\\\\wpi\\\\\\\\webpack-inherit-samples\\\\\\\\samples\\\\\\\\simple-redux-app\\\",\\\"vars\\\":{\\\"rootAlias\\\":\\\"App\\\",\\\"externals\\\":true,\\\"webpackPatch\\\":{\\\"devtool\\\":\\\"eval\\\",\\\"watchOptions\\\":{\\\"aggregateTimeout\\\":300,\\\"poll\\\":1000}}},\\\"allCfg\\\":[{\\\"rootFolder\\\":\\\"App\\\",\\\"basedOn\\\":\\\"defaultServer\\\",\\\"libsPath\\\":\\\"./packages\\\",\\\"vars\\\":{\\\"externals\\\":true,\\\"webpackPatch\\\":{\\\"devtool\\\":\\\"eval\\\",\\\"watchOptions\\\":{\\\"aggregateTimeout\\\":300,\\\"poll\\\":1000}}},\\\"extend\\\":[\\\"widget-management\\\",\\\"wi-layer-redux-thunk\\\",\\\"wi-layer-react-express\\\"]},{\\\"rootFolder\\\":\\\"App\\\"},{\\\"rootFolder\\\":\\\"App\\\",\\\"extend\\\":[]},{\\\"rootFolder\\\":\\\"App\\\",\\\"config\\\":\\\"./etc/wp/webpack.config.api.js\\\",\\\"extend\\\":[]}],\\\"allModId\\\":[\\\"widget-management\\\",\\\"wi-layer-redux-thunk\\\",\\\"wi-layer-react-express\\\"]}\");\n\n//# sourceURL=webpack:///./App/.wpiConfig.json?");

/***/ }),

/***/ "./App/App.js":
/*!********************!*\
  !*** ./App/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ \"undefined?9283\");\n/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"undefined?24b3\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"undefined?36a1\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"undefined?03c7\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"undefined?20a8\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"undefined?74ba\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var $super__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! $super */ \"./packages/widget-management/App/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"undefined?78cd\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ui_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/components/(*).js */ \"./App/MapOf.App_ui_components_____js.gen.js\");\n/* harmony import */ var _ui_containers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/containers/(*).js */ \"./App/MapOf.App_ui_containers_____js.gen.js\");\n/* harmony import */ var _ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/styles/index.scss */ \"./App/ui/styles/index.scss\");\n/* harmony import */ var _ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\nvar _dec, _class, _temp;\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n\n\nvar App = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (_ref) {\n  var appState = _ref.appState;\n  return {\n    appState: appState\n  };\n}), _dec(_class = (_temp =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _React$Component);\n\n  function App() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {};\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props$widgets = this.props.widgets,\n          widgets = _this$props$widgets === void 0 ? {} : _this$props$widgets;\n\n      _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(this.state);\n\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ui_components_js__WEBPACK_IMPORTED_MODULE_9__[\"AppBar\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ui_containers_js__WEBPACK_IMPORTED_MODULE_10__[\"ToolBar\"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"desk\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement($super__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component), _temp)) || _class);\n\n\n//# sourceURL=webpack:///./App/App.js?");

/***/ }),

/***/ "./App/MapOf.App_api_____js.gen.js":
/*!*****************************************!*\
  !*** ./App/MapOf.App_api_____js.gen.js ***!
  \*****************************************/
/*! exports provided: index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"index\", function() { return index; });\n/* This is a virtual file generated by webpack-inherit */\nvar req,\n    _exports = {},\n    root;\nreq = __webpack_require__(\"./App/api sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/wi-layer-react-express/App/api sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nvar index = _exports.index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_exports);\n\n//# sourceURL=webpack:///./App/MapOf.App_api_____js.gen.js?");

/***/ }),

/***/ "./App/MapOf.App_store_____actions_js.gen.js":
/*!***************************************************!*\
  !*** ./App/MapOf.App_store_____actions_js.gen.js ***!
  \***************************************************/
/*! exports provided: appState, widgets, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appState\", function() { return appState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"widgets\", function() { return widgets; });\n/* This is a virtual file generated by webpack-inherit */\nvar req,\n    _exports = {},\n    root;\nreq = __webpack_require__(\"./App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/actions\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/actions\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/widget-management/App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/actions\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/actions\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/wi-layer-redux-thunk/App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/actions\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/actions\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nvar appState = _exports.appState;\nvar widgets = _exports.widgets;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_exports);\n\n//# sourceURL=webpack:///./App/MapOf.App_store_____actions_js.gen.js?");

/***/ }),

/***/ "./App/MapOf.App_store_____initialState_js.gen.js":
/*!********************************************************!*\
  !*** ./App/MapOf.App_store_____initialState_js.gen.js ***!
  \********************************************************/
/*! exports provided: appState, widgets, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appState\", function() { return appState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"widgets\", function() { return widgets; });\n/* This is a virtual file generated by webpack-inherit */\nvar req,\n    _exports = {},\n    root;\nreq = __webpack_require__(\"./App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/initialState\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/widget-management/App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/initialState\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/wi-layer-redux-thunk/App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/initialState\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nvar appState = _exports.appState;\nvar widgets = _exports.widgets;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_exports);\n\n//# sourceURL=webpack:///./App/MapOf.App_store_____initialState_js.gen.js?");

/***/ }),

/***/ "./App/MapOf.App_store_____reducers_js.gen.js":
/*!****************************************************!*\
  !*** ./App/MapOf.App_store_____reducers_js.gen.js ***!
  \****************************************************/
/*! exports provided: appState, widgets, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appState\", function() { return appState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"widgets\", function() { return widgets; });\n/* This is a virtual file generated by webpack-inherit */\nvar req,\n    _exports = {},\n    root;\nreq = __webpack_require__(\"./App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/reducers\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/widget-management/App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/reducers\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/wi-layer-redux-thunk/App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/reducers\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nvar appState = _exports.appState;\nvar widgets = _exports.widgets;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_exports);\n\n//# sourceURL=webpack:///./App/MapOf.App_store_____reducers_js.gen.js?");

/***/ }),

/***/ "./App/MapOf.App_store_widgets_____actions_js.gen.js":
/*!***********************************************************!*\
  !*** ./App/MapOf.App_store_widgets_____actions_js.gen.js ***!
  \***********************************************************/
/*! exports provided: WeatherWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WeatherWidget\", function() { return WeatherWidget; });\n/* This is a virtual file generated by webpack-inherit */\nvar req,\n    _exports = {},\n    root;\nreq = __webpack_require__(\"./App/store/widgets sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/actions\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/actions\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/widget-management/App/store/widgets sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/actions\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/actions\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nvar WeatherWidget = _exports.WeatherWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_exports);\n\n//# sourceURL=webpack:///./App/MapOf.App_store_widgets_____actions_js.gen.js?");

/***/ }),

/***/ "./App/MapOf.App_store_widgets_____reducers_js.gen.js":
/*!************************************************************!*\
  !*** ./App/MapOf.App_store_widgets_____reducers_js.gen.js ***!
  \************************************************************/
/*! exports provided: WeatherWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WeatherWidget\", function() { return WeatherWidget; });\n/* This is a virtual file generated by webpack-inherit */\nvar req,\n    _exports = {},\n    root;\nreq = __webpack_require__(\"./App/store/widgets sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/reducers\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/widget-management/App/store/widgets sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/reducers\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nvar WeatherWidget = _exports.WeatherWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_exports);\n\n//# sourceURL=webpack:///./App/MapOf.App_store_widgets_____reducers_js.gen.js?");

/***/ }),

/***/ "./App/MapOf.App_ui_components_____js.gen.js":
/*!***************************************************!*\
  !*** ./App/MapOf.App_ui_components_____js.gen.js ***!
  \***************************************************/
/*! exports provided: AppBar, WeatherInfos, Widget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppBar\", function() { return AppBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WeatherInfos\", function() { return WeatherInfos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Widget\", function() { return Widget; });\n/* This is a virtual file generated by webpack-inherit */\nvar req,\n    _exports = {},\n    root;\nreq = __webpack_require__(\"./App/ui/components sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/widget-management/App/ui/components sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/wi-layer-redux-thunk/App/ui/components sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nvar AppBar = _exports.AppBar;\nvar WeatherInfos = _exports.WeatherInfos;\nvar Widget = _exports.Widget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_exports);\n\n//# sourceURL=webpack:///./App/MapOf.App_ui_components_____js.gen.js?");

/***/ }),

/***/ "./App/MapOf.App_ui_containers_____js.gen.js":
/*!***************************************************!*\
  !*** ./App/MapOf.App_ui_containers_____js.gen.js ***!
  \***************************************************/
/*! exports provided: ToolBar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToolBar\", function() { return ToolBar; });\n/* This is a virtual file generated by webpack-inherit */\nvar req,\n    _exports = {},\n    root;\nreq = __webpack_require__(\"./App/ui/containers sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/widget-management/App/ui/containers sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/wi-layer-redux-thunk/App/ui/containers sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nvar ToolBar = _exports.ToolBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_exports);\n\n//# sourceURL=webpack:///./App/MapOf.App_ui_containers_____js.gen.js?");

/***/ }),

/***/ "./App/MapOf.App_ui_widgets_____js.gen.js":
/*!************************************************!*\
  !*** ./App/MapOf.App_ui_widgets_____js.gen.js ***!
  \************************************************/
/*! exports provided: WeatherWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WeatherWidget\", function() { return WeatherWidget; });\n/* This is a virtual file generated by webpack-inherit */\nvar req,\n    _exports = {},\n    root;\nreq = __webpack_require__(\"./App/ui/widgets sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nreq = __webpack_require__(\"./packages/widget-management/App/ui/widgets sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\");\nreq.keys().forEach(function (key) {\n  var mod,\n      name = key.match(/^\\.\\/([^\\\\\\/]+)\\.js$/),\n      i = 0,\n      modExport = _exports;\n  name = name && name[1] || key.substr(2);\n  name = name.split('/');\n  mod = req(key);\n\n  while (i < name.length - 1) {\n    modExport = modExport[name[i]] = modExport[name[i]] || {}, i++;\n  }\n\n  modExport[name[i]] = Object.keys(mod).length === 1 && mod[\"default\"] || mod;\n});\nvar WeatherWidget = _exports.WeatherWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_exports);\n\n//# sourceURL=webpack:///./App/MapOf.App_ui_widgets_____js.gen.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var App_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/index.js */ \"./App/index.js\");\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\nvar wpiConf = __webpack_require__(/*! App/.wpiConfig.json */ \"./App/.wpiConfig.json\"),\n    fs = __webpack_require__(/*! fs */ \"fs\"),\n    express = __webpack_require__(/*! express */ \"undefined?22fe\"),\n    indexTpl = __webpack_require__(/*! ../index.html.tpl */ \"./App/index.html.tpl\");\n\nvar currentState;\n/**\n * Add the rendering services to the main express instance\n * @param server {express}\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (server) {\n  var servePage = function servePage(req, res, next) {\n    App_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderSSR({\n      location: req.url,\n      state: currentState,\n      indexTpl: indexTpl\n    }, function (err, html, nstate) {\n      res.send(200, err && \"\" + err || html);\n    });\n  };\n\n  server.get('/', servePage);\n  server.get('/settings', servePage);\n  server.use(express[\"static\"](wpiConf.projectRoot + '/dist'));\n  server.post('/', function (req, res, next) {\n    console.log(\"New state pushed\");\n    currentState = req.body;\n    res.send(200, 'ok');\n  });\n});\n\n//# sourceURL=webpack:///./App/api/index.js?");

/***/ }),

/***/ "./App/index.html.tpl":
/*!****************************!*\
  !*** ./App/index.html.tpl ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (function () {\n  var fn = function anonymous(it\n) {\nvar out='<!DOCTYPE html><!-- ~ Copyright (c)  2018 Wise Wild Web . ~ ~  MIT License ~ ~  Permission is hereby granted, free of charge, to any person obtaining a copy ~  of this software and associated documentation files (the \"Software\"), to deal ~  in the Software without restriction, including without limitation the rights ~  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell ~  copies of the Software, and to permit persons to whom the Software is ~  furnished to do so, subject to the following conditions: ~ ~  The above copyright notice and this permission notice shall be included in all ~  copies or substantial portions of the Software. ~ ~  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR ~  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, ~  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE ~  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER ~  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, ~  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE ~  SOFTWARE. ~ ~ @author : Nathanael Braun ~ @contact : n8tz.js@gmail.com --><html lang=\"en\"><head> <meta charset=\"UTF-8\"> <title>Weather desk</title> <script>window.__STATE__  ='+(it.state || \"{}\")+';</script> <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\"></head><body><div id=\"app\">'+(it.app || '')+'</div><script src=\"./App.vendors.js\"></script><script src=\"./App.js\"></script></body></html>';return out;\n};\n  fn.render = fn;\n  return fn;\n})();\n\n//# sourceURL=webpack:///./App/index.html.tpl?");

/***/ }),

/***/ "./App/index.js":
/*!**********************!*\
  !*** ./App/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/App */ \"./App/App.js\");\n/* harmony import */ var App_store_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! App/store/configure */ \"./packages/wi-layer-redux-thunk/App/store/configure.js\");\n/* harmony import */ var App_store_initialState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! App/store/initialState */ \"./packages/wi-layer-redux-thunk/App/store/initialState.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"undefined?5e9a\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"undefined?9439\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-loader/root */ \"undefined?328e\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"undefined?78cd\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n\n\n\n\nvar ctrl = {\n  renderTo: function renderTo(node) {\n    var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var store = Object(App_store_configure__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(initialState),\n        isDev = \"development\" !== 'production',\n        HMRApp = isDev ? Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_6__[\"hot\"])(App_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) : App_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"Provider\"], {\n      store: store\n    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HMRApp, null)), node);\n\n    if (false) {}\n  },\n  renderSSR: function renderSSR(_ref, cb) {\n    var state = _ref.state,\n        location = _ref.location,\n        indexTpl = _ref.indexTpl;\n    var store = Object(App_store_configure__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state || App_store_initialState__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    var content = \"\",\n        html,\n        preloadedState;\n\n    try {\n      content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"Provider\"], {\n        store: store\n      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        location: location\n      })));\n      preloadedState = store.getState();\n      html = indexTpl.render({\n        app: content,\n        state: JSON.stringify(preloadedState)\n      });\n    } catch (e) {\n      html = indexTpl.render({\n        app: \"<div class=\\\"error\\\">\".concat(e + \"\", \"<br><pre>\").concat(e.stack + \"\", \"</pre></div>\"),\n        state: \"{}\"\n      });\n    }\n\n    cb(null, html);\n  }\n};\nif (typeof window !== 'undefined') window.App = ctrl;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ctrl);\n\n//# sourceURL=webpack:///./App/index.js?");

/***/ }),

/***/ "./App/index.server.js":
/*!*****************************!*\
  !*** ./App/index.server.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/App */ \"./App/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./packages/wi-layer-react-express/App/api.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"undefined?9439\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n\nvar express = __webpack_require__(/*! express */ \"undefined?22fe\"),\n    server = express(),\n    http = __webpack_require__(/*! http */ \"http\").Server(server),\n    argz = __webpack_require__(/*! minimist */ \"undefined?2efa\")(process.argv.slice(2)),\n    wpiConf = __webpack_require__(/*! App/.wpiConfig.json */ \"./App/.wpiConfig.json\"),\n    debug = __webpack_require__(/*! App/console */ \"./packages/wi-layer-react-express/App/console.js\")[\"default\"](\"server\");\n\nprocess.title = wpiConf.project.name + '::server';\ndebug.log(\"process.env.DEBUG : \", process.env.DEBUG);\nserver.use(express.json()); // to support JSON-encoded bodies\n\nserver.use(express.urlencoded()); // to support URL-encoded bodies\n\nObject(_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(server, http);\nvar server_instance = http.listen(parseInt(argz.p || argz.port || 8000), function () {\n  debug.info('Running on ', server_instance.address().port);\n});\n\n//# sourceURL=webpack:///./App/index.server.js?");

/***/ }),

/***/ "./App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$":
/*!******************************************************!*\
  !*** ./App/store sync ^\.\/([^\\\/]+)\/actions\.js$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./appState/actions.js\": \"./App/store/appState/actions.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/actions\\\\.js$\";\n\n//# sourceURL=webpack:///./App/store_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/actions\\.js$?");

/***/ }),

/***/ "./App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$":
/*!***********************************************************!*\
  !*** ./App/store sync ^\.\/([^\\\/]+)\/initialState\.js$ ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./appState/initialState.js\": \"./App/store/appState/initialState.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/initialState\\\\.js$\";\n\n//# sourceURL=webpack:///./App/store_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/initialState\\.js$?");

/***/ }),

/***/ "./App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$":
/*!*******************************************************!*\
  !*** ./App/store sync ^\.\/([^\\\/]+)\/reducers\.js$ ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./appState/reducers.js\": \"./App/store/appState/reducers.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/reducers\\\\.js$\";\n\n//# sourceURL=webpack:///./App/store_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/reducers\\.js$?");

/***/ }),

/***/ "./App/store/appState/actions.js":
/*!***************************************!*\
  !*** ./App/store/appState/actions.js ***!
  \***************************************/
/*! exports provided: SAVING_STATE, saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SAVING_STATE\", function() { return SAVING_STATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveState\", function() { return saveState; });\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superagent */ \"undefined?a026\");\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\nvar SAVING_STATE = 'SAVING_STATE';\nfunction saveState(then) {\n  return function (dispatch, getState) {\n    return superagent__WEBPACK_IMPORTED_MODULE_0___default.a.post('/', getState()).then(function (res) {\n      console.log('Saved');\n    })[\"catch\"](function (e) {\n      console.log('Not Saved');\n    });\n  };\n}\n\n//# sourceURL=webpack:///./App/store/appState/actions.js?");

/***/ }),

/***/ "./App/store/appState/initialState.js":
/*!********************************************!*\
  !*** ./App/store/appState/initialState.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\r\n * The MIT License (MIT)\r\n * Copyright (c) 2019. Wise Wild Web\r\n *\r\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\r\n *\r\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\r\n *\r\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n *\r\n *  @author : Nathanael Braun\r\n *  @contact : n8tz.js@gmail.com\r\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  src: \"http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=\",\n  selectedWidgetId: null\n});\n\n//# sourceURL=webpack:///./App/store/appState/initialState.js?");

/***/ }),

/***/ "./App/store/appState/reducers.js":
/*!****************************************!*\
  !*** ./App/store/appState/reducers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return appState; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./App/store/appState/actions.js\");\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\nfunction appState() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./App/store/appState/reducers.js?");

/***/ }),

/***/ "./App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$":
/*!**************************************************************!*\
  !*** ./App/store/widgets sync ^\.\/([^\\\/]+)\/actions\.js$ ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./WeatherWidget/actions.js\": \"./App/store/widgets/WeatherWidget/actions.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./App/store/widgets sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/actions\\\\.js$\";\n\n//# sourceURL=webpack:///./App/store/widgets_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/actions\\.js$?");

/***/ }),

/***/ "./App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$":
/*!***************************************************************!*\
  !*** ./App/store/widgets sync ^\.\/([^\\\/]+)\/reducers\.js$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./WeatherWidget/reducers.js\": \"./App/store/widgets/WeatherWidget/reducers.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./App/store/widgets sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/reducers\\\\.js$\";\n\n//# sourceURL=webpack:///./App/store/widgets_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/reducers\\.js$?");

/***/ }),

/***/ "./App/store/widgets/WeatherWidget/actions.js":
/*!****************************************************!*\
  !*** ./App/store/widgets/WeatherWidget/actions.js ***!
  \****************************************************/
/*! exports provided: weatherSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weatherSearch\", function() { return weatherSearch; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"undefined?188d\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ \"undefined?a026\");\n/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ \"./packages/widget-management/App/store/widgets/actions.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\nfunction weatherSearch(record, location, then) {\n  return function (dispatch, getState) {\n    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"updateWidget\"])(_objectSpread({}, record, {\n      fetching: location\n    })));\n    return superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get(getState().appState.src + location).then(function (res) {\n      var current = getState().widgets.items[record._id];\n\n      if (current && current.fetching === location) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"updateWidget\"])(_objectSpread({}, record, {\n        fetching: false,\n        fetched: Date.now(),\n        results: res.body,\n        location: location\n      })));\n    })[\"catch\"](function (e) {\n      var current = getState().widgets.items[record._id];\n\n      if (current && current.fetching === location) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"updateWidget\"])(_objectSpread({}, record, {\n        fetching: false\n      })));\n    });\n  };\n}\n\n//# sourceURL=webpack:///./App/store/widgets/WeatherWidget/actions.js?");

/***/ }),

/***/ "./App/store/widgets/WeatherWidget/reducers.js":
/*!*****************************************************!*\
  !*** ./App/store/widgets/WeatherWidget/reducers.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return widgets; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"undefined?188d\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ \"./packages/widget-management/App/store/widgets/actions.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\nfunction widgets(widget, action) {\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_1__[\"WIDGET_CHANGED\"]:\n      return _objectSpread({}, widget, {}, action.record);\n\n    default:\n      return widget;\n  }\n}\n\n//# sourceURL=webpack:///./App/store/widgets/WeatherWidget/reducers.js?");

/***/ }),

/***/ "./App/ui/components sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!*****************************************************!*\
  !*** ./App/ui/components sync ^\.\/([^\\\/]+)\.js$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./AppBar.js\": \"./App/ui/components/AppBar.js\",\n\t\"./WeatherInfos.js\": \"./App/ui/components/WeatherInfos.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./App/ui/components sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\";\n\n//# sourceURL=webpack:///./App/ui/components_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\.js$?");

/***/ }),

/***/ "./App/ui/components/AppBar.js":
/*!*************************************!*\
  !*** ./App/ui/components/AppBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"undefined?91cd\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"undefined?36e2\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"undefined?0beb\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    position: \"static\",\n    className: \"AppBar\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    cvariant: \"h6\",\n    color: \"inherit\",\n    noWrap: true\n  }, \"Widget desk\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"tools\"\n  }, children)));\n});\n\n//# sourceURL=webpack:///./App/ui/components/AppBar.js?");

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

/***/ "./App/ui/containers sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!*****************************************************!*\
  !*** ./App/ui/containers sync ^\.\/([^\\\/]+)\.js$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./ToolBar.js\": \"./App/ui/containers/ToolBar.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./App/ui/containers sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\";\n\n//# sourceURL=webpack:///./App/ui/containers_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\.js$?");

/***/ }),

/***/ "./App/ui/containers/ToolBar.js":
/*!**************************************!*\
  !*** ./App/ui/containers/ToolBar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ \"undefined?9283\");\n/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"undefined?24b3\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"undefined?36a1\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"undefined?03c7\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"undefined?20a8\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"undefined?74ba\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ \"undefined?8406\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Add */ \"undefined?3b94\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Save */ \"undefined?128e\");\n/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var App_store_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! App/store/actions */ \"./packages/wi-layer-redux-thunk/App/store/actions.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ \"undefined?78cd\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\nvar _class, _temp;\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__[\"connect\"])()((_temp = _class =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ToolBar, _React$Component);\n\n  function ToolBar() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ToolBar);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ToolBar)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {};\n\n    _this.newWidget = function (record) {\n      var dispatch = _this.props.dispatch;\n      dispatch(App_store_actions__WEBPACK_IMPORTED_MODULE_9__[\"default\"].widgets.newWidget({\n        type: \"WeatherWidget\"\n      }));\n    };\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ToolBar, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          dispatch = _this$props.dispatch,\n          editable = _this$props.editable;\n\n      _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(this.state);\n\n      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(\"div\", {\n        className: \"ToolBar\"\n      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        \"aria-label\": \"new\",\n        size: \"small\",\n        color: \"secondary\",\n        onClick: this.newWidget\n      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default.a, null)), \"\\xA0\\xA0\", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        \"aria-label\": \"SaveState\",\n        size: \"small\",\n        color: \"secondary\",\n        onClick: function onClick(e) {\n          return dispatch(App_store_actions__WEBPACK_IMPORTED_MODULE_9__[\"default\"].appState.saveState());\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_8___default.a, null))));\n    }\n  }]);\n\n  return ToolBar;\n}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component), _class.propTypes = {}, _temp)));\n\n//# sourceURL=webpack:///./App/ui/containers/ToolBar.js?");

/***/ }),

/***/ "./App/ui/styles/index.scss":
/*!**********************************!*\
  !*** ./App/ui/styles/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty (null-loader)\n\n//# sourceURL=webpack:///./App/ui/styles/index.scss?");

/***/ }),

/***/ "./App/ui/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!**************************************************!*\
  !*** ./App/ui/widgets sync ^\.\/([^\\\/]+)\.js$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./WeatherWidget.js\": \"./App/ui/widgets/WeatherWidget.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./App/ui/widgets sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\";\n\n//# sourceURL=webpack:///./App/ui/widgets_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\.js$?");

/***/ }),

/***/ "./App/ui/widgets/WeatherWidget.js":
/*!*****************************************!*\
  !*** ./App/ui/widgets/WeatherWidget.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WeatherWidget; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"undefined?24b3\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"undefined?36a1\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"undefined?03c7\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"undefined?20a8\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"undefined?74ba\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"undefined?188d\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ \"undefined?8406\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Delete */ \"undefined?a433\");\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"undefined?52bc\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Save */ \"undefined?128e\");\n/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var App_store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! App/store/actions */ \"./packages/wi-layer-redux-thunk/App/store/actions.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ \"undefined?3832\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ \"undefined?78cd\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_WeatherInfos_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/WeatherInfos.js */ \"./App/ui/components/WeatherInfos.js\");\n\n\n\n\n\n\n\nvar _dec, _class, _class2, _temp;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n\n\n\n\n\nvar WeatherWidget = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__[\"connect\"])(function (state, props) {\n  return {\n    record: state.widgets.items[props.id]\n  };\n}, function (dispatch) {\n  return _objectSpread({\n    dispatch: dispatch\n  }, App_store_actions__WEBPACK_IMPORTED_MODULE_10__[\"default\"].widgets.WeatherWidget);\n}), _dec(_class = (_temp = _class2 =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(WeatherWidget, _React$Component);\n\n  function WeatherWidget() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WeatherWidget);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(WeatherWidget)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {};\n\n    _this.checkUpdate = function () {\n      var _this$props = _this.props,\n          dispatch = _this$props.dispatch,\n          record = _this$props.record,\n          weatherSearch = _this$props.weatherSearch;\n      if (record.location && record.fetched < Date.now() - 1000 * 60) dispatch(weatherSearch(record, record.location));\n    };\n\n    _this.toggleEdit = function () {\n      _this.setState({\n        editing: !_this.state.editing\n      });\n    };\n\n    _this.updateSearch = function (_ref) {\n      var searching = _ref.target.value;\n      var _this$props2 = _this.props,\n          record = _this$props2.record,\n          dispatch = _this$props2.dispatch,\n          weatherSearch = _this$props2.weatherSearch;\n\n      _this.setState({\n        searching: searching\n      });\n\n      if (searching.length > 2) dispatch(weatherSearch(record, searching));\n    };\n\n    _this.stopPropagation = function (e) {\n      return e.stopPropagation();\n    };\n\n    _this.doClose = function (e) {\n      var _this$props3 = _this.props,\n          record = _this$props3.record,\n          onClose = _this$props3.onClose;\n      onClose && onClose(record);\n    };\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WeatherWidget, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this$props4 = this.props,\n          dispatch = _this$props4.dispatch,\n          record = _this$props4.record,\n          weatherSearch = _this$props4.weatherSearch;\n      if (record.location && !record.results) dispatch(weatherSearch(record, record.location));\n      this._refreshTm = setInterval(this.checkUpdate, 1000 * 10);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      clearInterval(this._refreshTm);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props5 = this.props,\n          record = _this$props5.record,\n          dispatch = _this$props5.dispatch,\n          editable = _this$props5.editable,\n          onClose = _this$props5.onClose,\n          _this$state = this.state,\n          editing = _this$state.editing,\n          searching = _this$state.searching;\n      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(\"div\", {\n        className: \"WeatherWidget\"\n      }, !editing && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, record.results && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_WeatherInfos_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        weatherData: record.results\n      }) || record.fetching && \"Loading....\" || \"Edit me !\", editable && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        \"aria-label\": \"edit\",\n        className: \"edit\",\n        onClick: this.toggleEdit\n      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_8___default.a, null)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        \"aria-label\": \"Delete\",\n        className: \"delete\",\n        onClick: this.doClose\n      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default.a, null)))) || react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(\"div\", {\n        className: \"search\"\n      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(\"input\", {\n        type: \"text\",\n        onChange: this.updateSearch,\n        value: searching !== undefined ? searching : record.location,\n        onMouseDown: this.stopPropagation\n      })), record.fetching && \"Loading....\" || record.results && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_WeatherInfos_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        weatherData: record.results\n      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        \"aria-label\": \"Save\",\n        className: \"save\",\n        disabled: !!record.fetching,\n        onClick: this.toggleEdit\n      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9___default.a, null))));\n    }\n  }]);\n\n  return WeatherWidget;\n}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component), _class2.propTypes = {\n  record: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired,\n  editable: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool\n}, _class2.defaultProps = {\n  editable: true\n}, _temp)) || _class);\n\n;\n\n//# sourceURL=webpack:///./App/ui/widgets/WeatherWidget.js?");

/***/ }),

/***/ "./packages/wi-layer-react-express/App/api sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!***************************************************************************!*\
  !*** ./packages/wi-layer-react-express/App/api sync ^\.\/([^\\\/]+)\.js$ ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./index.js\": \"./App/api/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./packages/wi-layer-react-express/App/api sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/wi-layer-react-express/App/api_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\.js$?");

/***/ }),

/***/ "./packages/wi-layer-react-express/App/api.js":
/*!****************************************************!*\
  !*** ./packages/wi-layer-react-express/App/api.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is */ \"undefined?63a5\");\n/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/(*).js */ \"./App/MapOf.App_api_____js.gen.js\");\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\nvar debug = __webpack_require__(/*! App/console */ \"./packages/wi-layer-react-express/App/console.js\")[\"default\"](\"server\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (server, http) {\n  return Object.keys(_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).map(function (service) {\n    return is__WEBPACK_IMPORTED_MODULE_0___default.a.fn(_api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][service]) ? {\n      name: service,\n      priorityLevel: 0,\n      service: _api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][service]\n    } : _api_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][service];\n  }).sort(function (a, b) {\n    return a.priorityLevel > b.priorityLevel ? -1 : 1;\n  }).forEach(function (service) {\n    try {\n      service.service(server, http);\n    } catch (e) {\n      debug.error(\"Api fail loading service \", service.name, \"\\n\", e);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./packages/wi-layer-react-express/App/api.js?");

/***/ }),

/***/ "./packages/wi-layer-react-express/App/console.js":
/*!********************************************************!*\
  !*** ./packages/wi-layer-react-express/App/console.js ***!
  \********************************************************/
/*! exports provided: console, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"console\", function() { return d_console; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"undefined?4d9b\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"undefined?0db5\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\nvar cfg = __webpack_require__(/*! App/.wpiConfig.json */ \"./App/.wpiConfig.json\"),\n    debug = __webpack_require__(/*! debug-logger */ \"undefined?63f7\"),\n    isFunction = __webpack_require__(/*! is */ \"undefined?63a5\")[\"function\"],\n    isBrowserSide = new Function(\"try {return this===window;}catch(e){ return false;}\")(),\n    debounce = __webpack_require__(/*! debounce */ \"undefined?508e\"),\n    _console = !isBrowserSide && function _console(ns) {\n  var nmFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {\n    return '';\n  };\n\n  var c = debug(ns),\n      fn = function fn(ns2) {\n    return new _console(ns + \"::\" + ns2);\n  };\n\n  for (var k in c) {\n    if (c.hasOwnProperty(k) && !this[k] && isFunction(c[k])) fn[k] = c[k].bind(c, nmFn(ns));\n  }\n\n  fn.beep = function () {\n    process.stdout.write('\\x07'); // do a beep\n\n    this.error.apply(this, arguments);\n  };\n\n  return fn;\n} || function _console(ns) {\n  var nmFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {\n    return '';\n  };\n\n  var c = console,\n      fn = function fn(ns2) {\n    return new _console(ns + \"::\" + ns2);\n  };\n\n  for (var k in c) {\n    if (c.hasOwnProperty(k) && !this[k] && isFunction(c[k])) fn[k] = c[k].bind(console, nmFn(ns));\n  }\n\n  fn.beep = function () {\n    this.error.apply(this, arguments);\n  };\n\n  return fn;\n};\n\ndebug.inspectOptions = {\n  colors: true\n};\ndebug.debug.enable(cfg.project.name + '*');\n\nconsole.watch = console.watch || function (oObj, sProp) {\n  var sPrivateProp = \"$_\" + sProp + \"_$\"; // to minimize the name clash risk\n\n  oObj[sPrivateProp] = oObj[sProp]; // overwrite with accessor\n\n  Object.defineProperty(oObj, sProp, {\n    get: function get() {\n      return oObj[sPrivateProp];\n    },\n    set: function set(value) {\n      console.log(\"setting \" + sProp + \" to \" + value);\n      debugger; // sets breakpoint\n\n      oObj[sPrivateProp] = value;\n    }\n  });\n}; // well group the react/vendors warns as they abuse of it each minors versions\n\n\nisBrowserSide && !window.consoleHookDone && function () {\n  window.consoleHookDone = true;\n\n  function truncate(string, ln) {\n    if (string.length > ln) return string.substring(0, ln) + '...';else return string;\n  }\n\n  ;\n  var hookedWarn = console.warn,\n      hookedError = console.error,\n      recentWarn = [],\n      recentErrors = [],\n      warn = debounce(function () {\n    console.groupCollapsed(\" %d %cvendors warns happen%c (%s)\", recentWarn.length, \"color: orange; text-decoration: underline\", \"color: gray; font-style: italic;font-size:.8em\", truncate(recentWarn.map(function (v) {\n      return v.join(', ');\n    }).join('\\t'), 50));\n    recentWarn.forEach(function (_ref) {\n      var _console2;\n\n      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),\n          argz = _ref2[0],\n          trace = _ref2[1];\n\n      (_console2 = console).groupCollapsed.apply(_console2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argz));\n\n      hookedWarn.call(console, trace);\n      console.groupEnd();\n    });\n    recentWarn = [];\n    console.groupEnd();\n  }, 2000),\n      error = debounce(function () {\n    console.groupCollapsed(\" %d %cvendors errors happen%c (%s)\", recentErrors.length, \"color: red; text-decoration: underline\", \"color: gray; font-style: italic;font-size:.8em\", truncate(recentErrors.map(function (v) {\n      return v.join(', ');\n    }).join('\\t'), 50)); // recentErrors.forEach(argz => hookedWarn.apply(console, argz));\n\n    recentErrors.forEach(function (_ref3) {\n      var _console3;\n\n      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),\n          argz = _ref4[0],\n          trace = _ref4[1];\n\n      (_console3 = console).groupCollapsed.apply(_console3, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argz));\n\n      hookedError.call(console, trace);\n      console.groupEnd();\n    });\n    recentErrors = [];\n    console.groupEnd();\n  }, 2000);\n\n  console.warn = function () {\n    for (var _len = arguments.length, argz = new Array(_len), _key = 0; _key < _len; _key++) {\n      argz[_key] = arguments[_key];\n    }\n\n    if (!argz[0] && argz[0].startWith(cfg.project.name)) return hookedWarn.apply(void 0, argz);\n    recentWarn.push([argz, new Error().stack]);\n    warn();\n  };\n\n  console.trace = function () {//if ( /^Caipi/.test(argz[0]) )\n    //    return hookedWarn(...argz);\n    //recentWarn.push([argz, (new Error()).stack]);\n    //warn();\n  };\n\n  console.error = function () {\n    for (var _len2 = arguments.length, argz = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      argz[_key2] = arguments[_key2];\n    }\n\n    if (argz[0].startWith(cfg.project.name)) return hookedWarn.apply(void 0, argz);\n    recentErrors.push([argz, new Error().stack]);\n    error();\n  };\n}();\nvar d_console = new _console(cfg.project.name);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (d_console);\n\n//# sourceURL=webpack:///./packages/wi-layer-react-express/App/console.js?");

/***/ }),

/***/ "./packages/wi-layer-redux-thunk/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$":
/*!************************************************************************************!*\
  !*** ./packages/wi-layer-redux-thunk/App/store sync ^\.\/([^\\\/]+)\/actions\.js$ ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./packages/wi-layer-redux-thunk/App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/actions\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/wi-layer-redux-thunk/App/store_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/actions\\.js$?");

/***/ }),

/***/ "./packages/wi-layer-redux-thunk/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$":
/*!*****************************************************************************************!*\
  !*** ./packages/wi-layer-redux-thunk/App/store sync ^\.\/([^\\\/]+)\/initialState\.js$ ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./packages/wi-layer-redux-thunk/App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/initialState\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/wi-layer-redux-thunk/App/store_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/initialState\\.js$?");

/***/ }),

/***/ "./packages/wi-layer-redux-thunk/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$":
/*!*************************************************************************************!*\
  !*** ./packages/wi-layer-redux-thunk/App/store sync ^\.\/([^\\\/]+)\/reducers\.js$ ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./packages/wi-layer-redux-thunk/App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/reducers\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/wi-layer-redux-thunk/App/store_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/reducers\\.js$?");

/***/ }),

/***/ "./packages/wi-layer-redux-thunk/App/store/actions.js":
/*!************************************************************!*\
  !*** ./packages/wi-layer-redux-thunk/App/store/actions.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"undefined?d325\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./(*)/actions.js */ \"./App/MapOf.App_store_____actions_js.gen.js\");\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_actions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./packages/wi-layer-redux-thunk/App/store/actions.js?");

/***/ }),

/***/ "./packages/wi-layer-redux-thunk/App/store/configure.js":
/*!**************************************************************!*\
  !*** ./packages/wi-layer-redux-thunk/App/store/configure.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"undefined?d325\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"undefined?5aa9\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"undefined?8808\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./packages/wi-layer-redux-thunk/App/store/reducers.js\");\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\nfunction configureStore(preloadedState) {\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));\n\n  if (false) {}\n\n  return store;\n}\n\n//# sourceURL=webpack:///./packages/wi-layer-redux-thunk/App/store/configure.js?");

/***/ }),

/***/ "./packages/wi-layer-redux-thunk/App/store/initialState.js":
/*!*****************************************************************!*\
  !*** ./packages/wi-layer-redux-thunk/App/store/initialState.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./(*)/initialState.js */ \"./App/MapOf.App_store_____initialState_js.gen.js\");\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_initialState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./packages/wi-layer-redux-thunk/App/store/initialState.js?");

/***/ }),

/***/ "./packages/wi-layer-redux-thunk/App/store/reducers.js":
/*!*************************************************************!*\
  !*** ./packages/wi-layer-redux-thunk/App/store/reducers.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"undefined?d325\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./(*)/reducers.js */ \"./App/MapOf.App_store_____reducers_js.gen.js\");\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(_reducers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./packages/wi-layer-redux-thunk/App/store/reducers.js?");

/***/ }),

/***/ "./packages/wi-layer-redux-thunk/App/ui/components sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!***********************************************************************************!*\
  !*** ./packages/wi-layer-redux-thunk/App/ui/components sync ^\.\/([^\\\/]+)\.js$ ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./packages/wi-layer-redux-thunk/App/ui/components sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/wi-layer-redux-thunk/App/ui/components_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\.js$?");

/***/ }),

/***/ "./packages/wi-layer-redux-thunk/App/ui/containers sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!***********************************************************************************!*\
  !*** ./packages/wi-layer-redux-thunk/App/ui/containers sync ^\.\/([^\\\/]+)\.js$ ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./packages/wi-layer-redux-thunk/App/ui/containers sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/wi-layer-redux-thunk/App/ui/containers_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\.js$?");

/***/ }),

/***/ "./packages/widget-management/App/App.js":
/*!***********************************************!*\
  !*** ./packages/widget-management/App/App.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ \"undefined?9283\");\n/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"undefined?24b3\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"undefined?36a1\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"undefined?03c7\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"undefined?20a8\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"undefined?74ba\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var App_store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! App/store/actions */ \"./packages/wi-layer-redux-thunk/App/store/actions.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"undefined?78cd\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ui_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/components/(*).js */ \"./App/MapOf.App_ui_components_____js.gen.js\");\n/* harmony import */ var _ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/styles/index.scss */ \"./App/ui/styles/index.scss\");\n/* harmony import */ var _ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _ui_widgets_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/widgets/(*).js */ \"./App/MapOf.App_ui_widgets_____js.gen.js\");\n\n\n\n\n\n\n\nvar _dec, _class, _temp;\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\n\n\n\nvar App = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (_ref) {\n  var widgets = _ref.widgets,\n      appState = _ref.appState;\n  return {\n    widgets: widgets,\n    appState: appState\n  };\n}), _dec(_class = (_temp =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _React$Component);\n\n  function App() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {};\n\n    _this.rmWidget = function (record) {\n      var dispatch = _this.props.dispatch;\n      dispatch(App_store_actions__WEBPACK_IMPORTED_MODULE_6__[\"default\"].widgets.rmWidget(record._id));\n    };\n\n    _this.selectWidget = function (record) {\n      var dispatch = _this.props.dispatch;\n      dispatch(App_store_actions__WEBPACK_IMPORTED_MODULE_6__[\"default\"].widgets.selectWidget(record._id));\n    };\n\n    _this.updateWidget = function (record) {\n      var dispatch = _this.props.dispatch;\n      dispatch(App_store_actions__WEBPACK_IMPORTED_MODULE_6__[\"default\"].widgets.updateWidget(record));\n    };\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props$widgets = this.props.widgets,\n          widgets = _this$props$widgets === void 0 ? {} : _this$props$widgets;\n\n      _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(this.state);\n\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, Object.keys(widgets.items).map(function (wid) {\n        var WidgetComp = _ui_widgets_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"][widgets.items[wid].type];\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ui_components_js__WEBPACK_IMPORTED_MODULE_9__[\"Widget\"], {\n          key: wid,\n          record: widgets.items[wid],\n          onSelect: _this2.selectWidget,\n          onWidgetUpdated: _this2.updateWidget,\n          selected: wid === widgets.selectedWidgetId\n        }, WidgetComp && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(WidgetComp, {\n          id: wid,\n          onClose: _this2.rmWidget\n        }));\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component), _temp)) || _class);\n\n\n//# sourceURL=webpack:///./packages/widget-management/App/App.js?");

/***/ }),

/***/ "./packages/widget-management/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$":
/*!*********************************************************************************!*\
  !*** ./packages/widget-management/App/store sync ^\.\/([^\\\/]+)\/actions\.js$ ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./widgets/actions.js\": \"./packages/widget-management/App/store/widgets/actions.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./packages/widget-management/App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/actions\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/widget-management/App/store_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/actions\\.js$?");

/***/ }),

/***/ "./packages/widget-management/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/initialState\\.js$":
/*!**************************************************************************************!*\
  !*** ./packages/widget-management/App/store sync ^\.\/([^\\\/]+)\/initialState\.js$ ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./widgets/initialState.js\": \"./packages/widget-management/App/store/widgets/initialState.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./packages/widget-management/App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/initialState\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/widget-management/App/store_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/initialState\\.js$?");

/***/ }),

/***/ "./packages/widget-management/App/store sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$":
/*!**********************************************************************************!*\
  !*** ./packages/widget-management/App/store sync ^\.\/([^\\\/]+)\/reducers\.js$ ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./widgets/reducers.js\": \"./packages/widget-management/App/store/widgets/reducers.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./packages/widget-management/App/store sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/reducers\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/widget-management/App/store_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/reducers\\.js$?");

/***/ }),

/***/ "./packages/widget-management/App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/actions\\.js$":
/*!*****************************************************************************************!*\
  !*** ./packages/widget-management/App/store/widgets sync ^\.\/([^\\\/]+)\/actions\.js$ ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./packages/widget-management/App/store/widgets sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/actions\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/widget-management/App/store/widgets_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/actions\\.js$?");

/***/ }),

/***/ "./packages/widget-management/App/store/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\/reducers\\.js$":
/*!******************************************************************************************!*\
  !*** ./packages/widget-management/App/store/widgets sync ^\.\/([^\\\/]+)\/reducers\.js$ ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./packages/widget-management/App/store/widgets sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\/reducers\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/widget-management/App/store/widgets_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\/reducers\\.js$?");

/***/ }),

/***/ "./packages/widget-management/App/store/widgets/actions.js":
/*!*****************************************************************!*\
  !*** ./packages/widget-management/App/store/widgets/actions.js ***!
  \*****************************************************************/
/*! exports provided: WIDGET_CHANGED, WIDGET_NEW, WIDGET_RM, SELECTED_WIDGET_CHANGED, selectWidget, newWidget, updateWidget, rmWidget, WeatherWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WIDGET_CHANGED\", function() { return WIDGET_CHANGED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WIDGET_NEW\", function() { return WIDGET_NEW; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WIDGET_RM\", function() { return WIDGET_RM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SELECTED_WIDGET_CHANGED\", function() { return SELECTED_WIDGET_CHANGED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectWidget\", function() { return selectWidget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newWidget\", function() { return newWidget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateWidget\", function() { return updateWidget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rmWidget\", function() { return rmWidget; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"undefined?188d\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ \"undefined?beec\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./(*)/actions.js */ \"./App/MapOf.App_store_widgets_____actions_js.gen.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"WeatherWidget\", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_2__[\"WeatherWidget\"]; });\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\nvar WIDGET_CHANGED = 'WIDGET_CHANGED';\nvar WIDGET_NEW = 'WIDGET_NEW';\nvar WIDGET_RM = 'WIDGET_RM';\nvar SELECTED_WIDGET_CHANGED = 'SELECTED_WIDGET_CHANGED';\n\nfunction selectWidget(wid) {\n  return {\n    type: SELECTED_WIDGET_CHANGED,\n    wid: wid\n  };\n}\nfunction newWidget(record) {\n  return {\n    type: WIDGET_NEW,\n    record: _objectSpread({\n      _id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),\n      size: {\n        width: 350,\n        height: 400\n      },\n      position: {\n        x: 100 + ~~(Math.random() * 600),\n        y: 100 + ~~(Math.random() * 600)\n      }\n    }, record)\n  };\n}\nfunction updateWidget(record) {\n  return {\n    type: WIDGET_CHANGED,\n    record: record\n  };\n}\nfunction rmWidget(wid) {\n  return {\n    type: WIDGET_RM,\n    wid: wid\n  };\n}\n\n//# sourceURL=webpack:///./packages/widget-management/App/store/widgets/actions.js?");

/***/ }),

/***/ "./packages/widget-management/App/store/widgets/initialState.js":
/*!**********************************************************************!*\
  !*** ./packages/widget-management/App/store/widgets/initialState.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  selectedWidgetId: null,\n  items: {\n    \"rkUQHZrqM\": {\n      \"_id\": \"rkUQHZrqM\",\n      \"location\": \"Lisbonne\",\n      \"type\": \"WeatherWidget\",\n      \"size\": {\n        \"width\": 350,\n        \"height\": 400\n      },\n      \"position\": {\n        \"x\": 403,\n        \"y\": 111\n      }\n    },\n    \"YDNiVOf1j\": {\n      \"_id\": \"YDNiVOf1j\",\n      \"type\": \"WeatherWidget\",\n      \"size\": {\n        \"width\": 350,\n        \"height\": 400\n      },\n      \"position\": {\n        \"x\": 21,\n        \"y\": 108\n      },\n      \"location\": \"paris\"\n    },\n    \"FkQ3V9Hcb\": {\n      \"_id\": \"FkQ3V9Hcb\",\n      \"type\": \"WeatherWidget\",\n      \"size\": {\n        \"width\": 350,\n        \"height\": 400\n      },\n      \"position\": {\n        \"x\": 771,\n        \"y\": 108\n      },\n      \"location\": \"rome\"\n    },\n    \"bYNiMYG_0\": {\n      \"_id\": \"bYNiMYG_0\",\n      \"type\": \"WeatherWidget\",\n      \"size\": {\n        \"width\": 514,\n        \"height\": 329\n      },\n      \"position\": {\n        \"x\": 28,\n        \"y\": 525\n      },\n      \"location\": \"marseille\"\n    },\n    \"5SJehewl2\": {\n      \"_id\": \"5SJehewl2\",\n      \"type\": \"WeatherWidget\",\n      \"size\": {\n        \"width\": 563,\n        \"height\": 328\n      },\n      \"position\": {\n        \"x\": 558,\n        \"y\": 526\n      },\n      \"location\": \"montpellier\"\n    }\n  }\n});\n\n//# sourceURL=webpack:///./packages/widget-management/App/store/widgets/initialState.js?");

/***/ }),

/***/ "./packages/widget-management/App/store/widgets/reducers.js":
/*!******************************************************************!*\
  !*** ./packages/widget-management/App/store/widgets/reducers.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return widgets; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"undefined?188d\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./(*)/reducers.js */ \"./App/MapOf.App_store_widgets_____reducers_js.gen.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./packages/widget-management/App/store/widgets/actions.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\nfunction widgets() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    items: {}\n  };\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_2__[\"SELECTED_WIDGET_CHANGED\"]:\n      return _objectSpread({}, state, {\n        selectedWidgetId: action.wid\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_2__[\"WIDGET_CHANGED\"]:\n      var lastWState = state.items[action.record._id];\n      return _objectSpread({}, state, {\n        items: _objectSpread({}, state.items, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.record._id, _reducers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][lastWState.type](lastWState, action)))\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_2__[\"WIDGET_NEW\"]:\n      return _objectSpread({}, state, {\n        items: _objectSpread({}, state.items, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.record._id, action.record))\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_2__[\"WIDGET_RM\"]:\n      var newState = _objectSpread({}, state, {\n        items: _objectSpread({}, state.items)\n      });\n\n      delete newState.items[action.wid];\n      return newState;\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./packages/widget-management/App/store/widgets/reducers.js?");

/***/ }),

/***/ "./packages/widget-management/App/ui/components sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!********************************************************************************!*\
  !*** ./packages/widget-management/App/ui/components sync ^\.\/([^\\\/]+)\.js$ ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Widget.js\": \"./packages/widget-management/App/ui/components/Widget.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./packages/widget-management/App/ui/components sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/widget-management/App/ui/components_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\.js$?");

/***/ }),

/***/ "./packages/widget-management/App/ui/components/Widget.js":
/*!****************************************************************!*\
  !*** ./packages/widget-management/App/ui/components/Widget.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Widget; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"undefined?188d\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"undefined?24b3\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"undefined?36a1\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"undefined?03c7\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"undefined?20a8\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"undefined?74ba\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"undefined?3832\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"undefined?588e\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rnd */ \"undefined?84ab\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_rnd__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/*\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : n8tz.js@gmail.com\n */\n\n\n\nvar resizeHandles = {\n  bottom: true,\n  bottomLeft: true,\n  bottomRight: true,\n  left: true,\n  right: true,\n  top: true,\n  topLeft: true,\n  topRight: true\n};\n\nvar Widget =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Widget, _React$Component);\n\n  function Widget() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Widget);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Widget)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {};\n\n    _this.saveState = function (e, d) {\n      var _this$props = _this.props,\n          onWidgetUpdated = _this$props.onWidgetUpdated,\n          record = _this$props.record;\n      onWidgetUpdated(_objectSpread({}, record, {\n        size: _this.state.size || record.size,\n        position: _this.state.position || record.position\n      }));\n    };\n\n    _this.select = function (e, d) {\n      var _this$props2 = _this.props,\n          record = _this$props2.record,\n          onSelect = _this$props2.onSelect,\n          selected = _this$props2.selected;\n      !selected && onSelect(record);\n    };\n\n    _this.drag = function (e, d) {\n      var _this$props3 = _this.props,\n          record = _this$props3.record,\n          onSelect = _this$props3.onSelect,\n          selected = _this$props3.selected;\n      !selected && onSelect(record);\n\n      _this.setState({\n        position: {\n          x: d.x,\n          y: d.y\n        }\n      });\n    };\n\n    _this.resize = function (e, direction, ref, delta, position) {\n      _this.setState({\n        position: position,\n        size: {\n          width: ref.offsetWidth,\n          height: ref.offsetHeight\n        }\n      });\n    };\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Widget, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props4 = this.props,\n          _this$props4$record = _this$props4.record;\n      _this$props4$record = _this$props4$record === void 0 ? {} : _this$props4$record;\n      var position = _this$props4$record.position,\n          size = _this$props4$record.size,\n          children = _this$props4.children,\n          editable = _this$props4.editable,\n          selected = _this$props4.selected,\n          state = this.state;\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_rnd__WEBPACK_IMPORTED_MODULE_8__[\"Rnd\"], {\n        className: \"Widget\",\n        disableDragging: !editable,\n        enableResizing: editable && resizeHandles,\n        style: {\n          zIndex: selected ? 2000 : 1\n        },\n        size: state.size || size,\n        position: state.position || position,\n        onDragStop: this.saveState,\n        onResizeStop: this.saveState,\n        onDrag: this.drag,\n        onResize: this.resize,\n        onClick: this.select\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"content\"\n      }, children));\n    }\n  }]);\n\n  return Widget;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\nWidget.propTypes = {\n  selected: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n  editable: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n  record: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,\n  onWidgetUpdated: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,\n  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func\n};\nWidget.defaultProps = {\n  editable: true,\n  onWidgetUpdated: function onWidgetUpdated(state) {\n    return false;\n  },\n  onSelect: function onSelect(state) {\n    return false;\n  }\n};\n\n;\n\n//# sourceURL=webpack:///./packages/widget-management/App/ui/components/Widget.js?");

/***/ }),

/***/ "./packages/widget-management/App/ui/containers sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!********************************************************************************!*\
  !*** ./packages/widget-management/App/ui/containers sync ^\.\/([^\\\/]+)\.js$ ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./packages/widget-management/App/ui/containers sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/widget-management/App/ui/containers_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\.js$?");

/***/ }),

/***/ "./packages/widget-management/App/ui/widgets sync recursive ^\\.\\/([^\\\\\\/]+)\\.js$":
/*!*****************************************************************************!*\
  !*** ./packages/widget-management/App/ui/widgets sync ^\.\/([^\\\/]+)\.js$ ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./packages/widget-management/App/ui/widgets sync recursive ^\\\\.\\\\/([^\\\\\\\\\\\\/]+)\\\\.js$\";\n\n//# sourceURL=webpack:///./packages/widget-management/App/ui/widgets_sync_^\\.\\/(%5B^\\\\\\/%5D+)\\.js$?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi App/index.server ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! App/index.server */\"./App/index.server.js\");\n\n\n//# sourceURL=webpack:///multi_App/index.server?");

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

/***/ "undefined?188d":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

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

/***/ "undefined?2efa":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"minimist\");\n\n//# sourceURL=webpack:///external_%22minimist%22?");

/***/ }),

/***/ "undefined?328e":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

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

/***/ "undefined?588e":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "undefined?5aa9":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

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

/***/ "undefined?74ba":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "undefined?78cd":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

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

/***/ "undefined?8808":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

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

/***/ "undefined?d325":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ })

/******/ });