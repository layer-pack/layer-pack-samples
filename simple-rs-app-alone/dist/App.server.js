/** wpi externals - add module path **/
{
let ___wpi_amp = require('webpack-inherit/etc/node/loadModulePaths.js')(["G:\\n8tz\\libs\\wpi\\webpack-inherit-sample\\simple-rs-app-alone\\node_modules","node_modules"]);
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

module.exports = {"project":{"name":"simple-rs-app-alone","author":"Nathan Braun <n8tz.js@gmail.com>","version":"1.0.0"},"projectRoot":"G:\\n8tz\\libs\\wpi\\webpack-inherit-sample\\simple-rs-app-alone","vars":{"rootAlias":"App","externals":true},"allCfg":[{"rootFolder":"App","vars":{"externals":true},"extend":["wpi-react-rs-sass-ssr"]},{"rootFolder":"App","extend":["wpi-react-hmr-ssr"]},{"rootFolder":"App","config":"./etc/wp/webpack.config.api.js","extend":[]}],"allModId":["wpi-react-rs-sass-ssr","wpi-react-hmr-ssr"]};

/***/ }),

/***/ "./App/App.js":
/*!********************!*\
  !*** ./App/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ui_pages_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/pages/Home */ "./App/ui/pages/Home.js");
/* harmony import */ var _ui_pages_Settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/pages/Settings */ "./App/ui/pages/Settings.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "undefined?53b9");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ "undefined?91cd");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "undefined?36e2");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "undefined?7ff1");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "undefined?0beb");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Settings */ "undefined?6a05");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Home */ "undefined?2778");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/styles/index.scss */ "./App/ui/styles/index.scss");
/* harmony import */ var _ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ui_styles_index_scss__WEBPACK_IMPORTED_MODULE_15__);






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












var App =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "render",
    value: function render() {
      var Router = react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"];
      if (this.props.location) Router = react_router_dom__WEBPACK_IMPORTED_MODULE_8__["StaticRouter"];
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Router, {
        location: this.props.location
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9___default.a, {
        position: "static",
        className: "AppBar"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
        cvariant: "h6",
        color: "inherit",
        noWrap: true
      }, "Weather desk"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tools"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: "/",
        className: "homeBtn"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        "aria-label": "home",
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14___default.a, null))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: "/settings",
        className: "settingsBtn"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
        "aria-label": "settings",
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_13___default.a, null)))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/",
        exact: true,
        component: _ui_pages_Home__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
        path: "/settings",
        component: _ui_pages_Settings__WEBPACK_IMPORTED_MODULE_7__["default"]
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./App/App.scope.js":
/*!**************************!*\
  !*** ./App/App.scope.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "undefined?4d9b");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "undefined?0422");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superagent */ "undefined?a026");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ "undefined?beec");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rscopes */ "undefined?05b7");
/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rscopes__WEBPACK_IMPORTED_MODULE_4__);



var _obj, _init, _init2;

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



var asStore = rscopes__WEBPACK_IMPORTED_MODULE_4__["spells"].asStore,
    asScope = rscopes__WEBPACK_IMPORTED_MODULE_4__["spells"].asScope;
/* harmony default export */ __webpack_exports__["default"] = (_obj = {
  appState: {
    selectedWidgetId: "rkUQHZrqM",
    selectWidget: function selectWidget(selectedWidgetId) {
      return {
        selectedWidgetId: selectedWidgetId
      };
    }
  },
  widgets: {
    // initial state
    items: [{
      "_id": "rkUQHZrqM",
      "location": "Lisbonne",
      "size": {
        "width": 350,
        "height": 400
      },
      "position": {
        "x": 403,
        "y": 111
      }
    }, {
      "_id": "YDNiVOf1j",
      "size": {
        "width": 350,
        "height": 400
      },
      "position": {
        "x": 21,
        "y": 108
      },
      "location": "paris"
    }, {
      "_id": "FkQ3V9Hcb",
      "size": {
        "width": 350,
        "height": 400
      },
      "position": {
        "x": 771,
        "y": 108
      },
      "location": "rome"
    }, {
      "_id": "bYNiMYG_0",
      "size": {
        "width": 514,
        "height": 329
      },
      "position": {
        "x": 28,
        "y": 525
      },
      "location": "marseille"
    }, {
      "_id": "5SJehewl2",
      "size": {
        "width": 563,
        "height": 328
      },
      "position": {
        "x": 558,
        "y": 526
      },
      "location": "montpellier"
    }],
    // actions
    newWidget: function newWidget() {
      return {
        items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.nextState.items), [{
          _id: shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate(),
          size: {
            width: 350,
            height: 200
          },
          position: {
            x: 100 + ~~(Math.random() * 600),
            y: 100 + ~~(Math.random() * 600)
          }
        }])
      };
    },
    updateWidget: function updateWidget(widget) {
      return {
        items: this.nextState.items.map(function (it) {
          return it._id === widget._id ? widget : it;
        })
      };
    },
    rmWidget: function rmWidget(widget) {
      return {
        items: this.nextState.items.filter(function (it) {
          return it._id !== widget._id;
        })
      };
    },
    saveState: function saveState() {
      superagent__WEBPACK_IMPORTED_MODULE_2___default.a.post('/', this.scopeObj.serialize()).then(function (e, r) {
        console.log(e, r);
      });
    }
  }
}, (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_obj, "appState", [asStore], (_init = Object.getOwnPropertyDescriptor(_obj, "appState"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_1___default()(_obj, "widgets", [asStore], (_init2 = Object.getOwnPropertyDescriptor(_obj, "widgets"), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj)), _obj);

/***/ }),

/***/ "./App/api sync recursive ^\\.\\/(([^\\\\\\/]+\\/)+)?[^\\\\\\/]+\\.js$":
/*!*********************************************************!*\
  !*** ./App/api sync ^\.\/(([^\\\/]+\/)+)?[^\\\/]+\.js$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "./App/api/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./App/api sync recursive ^\\.\\/(([^\\\\\\/]+\\/)+)?[^\\\\\\/]+\\.js$";

/***/ }),

/***/ "./App/api/index.js":
/*!**************************!*\
  !*** ./App/api/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var App_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/index.js */ "./App/index.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "undefined?9439");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
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



var wpiConf = __webpack_require__(/*! App/.wpiConfig.json */ "./App/.wpiConfig.json"),
    fs = __webpack_require__(/*! fs */ "fs"),
    express = __webpack_require__(/*! express */ "undefined?22fe"),
    tpl = __webpack_require__(/*! ../index.html.tpl */ "./App/index.html.tpl");

var currentState;

try {
  currentState = fs.readFileSync('./lastAppState.json');
  currentState = JSON.parse(currentState);
} catch (e) {
  currentState = undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (function (server) {
  server.get('/', function (req, res, next) {
    App_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderSSR({
      location: req.url,
      state: currentState,
      tpl: tpl
    }, function (err, html, nstate) {
      res.send(200, html);
    });
  });
  server.get('/settings', function (req, res, next) {
    App_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderSSR({
      location: req.url,
      state: currentState,
      tpl: tpl
    }, function (err, html, nstate) {
      res.send(200, html);
    });
  });
  server.use(express.static(wpiConf.projectRoot + '/dist'));
  server.use("/medias", express.static(wpiConf.projectRoot + '/public'));
  server.post('/', function (req, res, next) {
    console.log("New state pushed");
    currentState = req.body;

    try {
      fs.writeFileSync('./lastAppState.json', JSON.stringify(req.body));
    } catch (e) {}

    res.send(200, 'ok');
  });
});

/***/ }),

/***/ "./App/index.html.tpl":
/*!****************************!*\
  !*** ./App/index.html.tpl ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (function () {
  var fn = function anonymous(it
/*``*/) {
var out='<!DOCTYPE html><!-- ~ Copyright (c)  2018 Wise Wild Web . ~ ~  MIT License ~ ~  Permission is hereby granted, free of charge, to any person obtaining a copy ~  of this software and associated documentation files (the "Software"), to deal ~  in the Software without restriction, including without limitation the rights ~  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell ~  copies of the Software, and to permit persons to whom the Software is ~  furnished to do so, subject to the following conditions: ~ ~  The above copyright notice and this permission notice shall be included in all ~  copies or substantial portions of the Software. ~ ~  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR ~  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, ~  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE ~  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER ~  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, ~  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE ~  SOFTWARE. ~ ~ @author : Nathanael Braun ~ @contact : n8tz.js@gmail.com --><html lang="en"><head> <meta charset="UTF-8"> <title>Weather desk</title> <script>window.__STATE__  ='+(it.state || "{}")+';</script> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></head><body><div id="app">'+(it.app || '')+'</div><script src="./App.vendors.js"></script><script src="./App.js"></script></body></html>';return out;
};
  fn.render = fn;
  return fn;
})();

/***/ }),

/***/ "./App/index.js":
/*!**********************!*\
  !*** ./App/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.scope */ "./App/App.scope.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "undefined?beec");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "undefined?5e9a");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "undefined?9439");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_rescope__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-rescope */ "undefined?492a");
/* harmony import */ var react_rescope__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_rescope__WEBPACK_IMPORTED_MODULE_5__);
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






var ctrl = {
  renderTo: function renderTo(node, state) {
    var cScope = new react_rescope__WEBPACK_IMPORTED_MODULE_5__["Scope"](_App_scope__WEBPACK_IMPORTED_MODULE_0__["default"], {
      id: "App",
      autoDestroy: true
    }),
        App = Object(react_rescope__WEBPACK_IMPORTED_MODULE_5__["reScope"])(cScope)(__webpack_require__(/*! ./App */ "./App/App.js").default);
    window.contexts = react_rescope__WEBPACK_IMPORTED_MODULE_5__["Scope"].scopes;
    state && cScope.restore(state);
    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, null), node);

    if (false) {}
  },
  renderSSR: function renderSSR(cfg, cb) {
    var _attempts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var rid = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
        cScope = new react_rescope__WEBPACK_IMPORTED_MODULE_5__["Scope"](_App_scope__WEBPACK_IMPORTED_MODULE_0__["default"], {
      id: rid,
      autoDestroy: false
    }),
        App = Object(react_rescope__WEBPACK_IMPORTED_MODULE_5__["reScope"])(cScope)(__webpack_require__(/*! ./App */ "./App/App.js").default);
    cfg.state && cScope.restore(cfg.state, {
      alias: "App"
    });
    var html,
        appHtml = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, {
      location: cfg.location
    })),
        stable = cScope.isStableTree();
    cScope.onceStableTree(function (state) {
      var nstate = cScope.serialize({
        alias: "App"
      });

      if (!stable && _attempts < 3) {
        ctrl.renderSSR({}, cb, ++_attempts);
      } else {
        try {
          html = cfg.tpl.render({
            app: appHtml,
            state: JSON.stringify(nstate)
          });
        } catch (e) {
          return cb(e);
        }

        cb(null, html, !stable && nstate);
      }

      cScope.destroy();
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ctrl);

/***/ }),

/***/ "./App/stores/WeatherSearch.js":
/*!*************************************!*\
  !*** ./App/stores/WeatherSearch.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeatherSearch; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "undefined?e108");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "undefined?56eb");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rscopes */ "undefined?05b7");
/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rscopes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rscopes_spells__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rscopes/spells */ "undefined?8ec2");
/* harmony import */ var rscopes_spells__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rscopes_spells__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! superagent */ "undefined?a026");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_9__);








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




var WeatherSearch =
/*#__PURE__*/
function (_Store) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(WeatherSearch, _Store);

  function WeatherSearch(_ref) {
    var _this;

    var $actions = _ref.$actions,
        record = _ref.record;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, WeatherSearch);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(WeatherSearch).apply(this, arguments));
    _this._refreshTm = setInterval(_this.checkUpdate, 1000 * 10);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(WeatherSearch, [{
    key: "destroy",
    value: function destroy() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(WeatherSearch.prototype), "destroy", this).call(this);

      clearInterval(this._refreshTm);
    }
  }, {
    key: "apply",
    value: function apply() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var state = arguments.length > 1 ? arguments[1] : undefined;

      var _ref2 = arguments.length > 2 ? arguments[2] : undefined,
          location = _ref2.location,
          results = _ref2.results,
          record = _ref2.record;

      location = location || state.defaultLocation;
      if (location == data.location && data.results) return data; // do query weather if needed

      if (location) {
        this.wait(); // so the whole scope tree will wait for SSR

        superagent__WEBPACK_IMPORTED_MODULE_9___default.a.get(state.src + location).then(function (res) {
          if (location !== _this2.data.location) return; // update the store data

          _this2.push({
            results: res.body,
            location: location,
            fetching: false
          }); // update the record location


          _this2.$actions.updateWidget(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state.record, {
            location: location
          }));
        }) // release anyway
        .then(function (e) {
          return _this2.release();
        }).catch(function (e) {
          return _this2.release();
        });
        return {
          location: location,
          fetching: true
        };
      }

      return data;
    }
  }]);

  return WeatherSearch;
}(rscopes__WEBPACK_IMPORTED_MODULE_7__["Store"]);

WeatherSearch.state = {
  // initial state value
  src: "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
  autoUpdate: 1000 * 10
};
WeatherSearch.actions = {
  updateWeatherSearch: function updateWeatherSearch(location) {
    if (location.length < 4) return {
      location: location
    };
    return {
      location: location
    };
  }
};


/***/ }),

/***/ "./App/ui/components/WeatherInfos.js":
/*!*******************************************!*\
  !*** ./App/ui/components/WeatherInfos.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "undefined?bd76");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
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


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var weatherData = _ref.weatherData,
      lastQuery = _ref.lastQuery;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "WeatherInfos"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "location"
  }, weatherData.name, "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sub", null, "(", moment__WEBPACK_IMPORTED_MODULE_1___default()(weatherData.dt * 1000).fromNow(), ")")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "background"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://source.unsplash.com/600x400/?day,sky," + weatherData.name
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picto"
  }, weatherData.weather[0] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + '.png'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), weatherData.weather[0] && weatherData.weather[0].description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "infos"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "temp"
  }, weatherData.main.temp, "\xB0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wind"
  }, weatherData.wind.speed, " mh")));
});

/***/ }),

/***/ "./App/ui/containers/WeatherBlock.js":
/*!*******************************************!*\
  !*** ./App/ui/containers/WeatherBlock.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeatherBlock; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "undefined?3832");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Fab */ "undefined?8406");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Delete */ "undefined?a433");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Edit */ "undefined?52bc");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Save */ "undefined?128e");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rscopes */ "undefined?05b7");
/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rscopes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var App_stores_WeatherSearch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! App/stores/WeatherSearch */ "./App/stores/WeatherSearch.js");
/* harmony import */ var App_ui_components_WeatherInfos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! App/ui/components/WeatherInfos */ "./App/ui/components/WeatherInfos.js");






var _dec, _dec2, _dec3, _class, _class2, _temp;

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









var WeatherBlock = (_dec = Object(rscopes__WEBPACK_IMPORTED_MODULE_11__["reScope"])({
  // will keep separate instances for each instance of WeatherWidget
  // WeatherSearch can still require stores in the parents scopes
  WeatherSearch: App_stores_WeatherSearch__WEBPACK_IMPORTED_MODULE_12__["default"]
}), _dec2 = Object(rscopes__WEBPACK_IMPORTED_MODULE_11__["propsToScope"])(["record.location:WeatherSearch.defaultLocation", "record:WeatherSearch.record"]), _dec3 = Object(rscopes__WEBPACK_IMPORTED_MODULE_11__["scopeToProps"])("WeatherSearch"), _dec(_class = _dec2(_class = _dec3(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(WeatherBlock, _React$Component);

  function WeatherBlock() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WeatherBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(WeatherBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WeatherBlock, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          record = _this$props.record,
          $actions = _this$props.$actions,
          disabled = _this$props.disabled,
          WeatherSearch = _this$props.WeatherSearch,
          state = this.state;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "WeatherBlock"
      }, !this.state.editing && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, WeatherSearch.results && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(App_ui_components_WeatherInfos__WEBPACK_IMPORTED_MODULE_13__["default"], {
        weatherData: WeatherSearch.results
      }) || WeatherSearch.fetching && "Loading...." || "Edit me !", !disabled && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default.a, {
        "aria-label": "edit",
        className: "edit",
        onClick: function onClick(e) {
          return _this2.setState({
            editing: true
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default.a, null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default.a, {
        "aria-label": "Delete",
        className: "delete",
        onClick: function onClick(e) {
          return $actions.rmWidget(record._id);
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default.a, null)))) || react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "search"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        onChange: function onChange(e) {
          _this2.setState({
            searching: e.target.value
          });

          if (e.target.value.length > 2) $actions.updateWeatherSearch(e.target.value);
        },
        value: state.searching !== undefined ? state.searching : record.location,
        onMouseDown: function onMouseDown(e) {
          return e.stopPropagation();
        }
      })), WeatherSearch.fetching && "Loading...." || WeatherSearch.results && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(App_ui_components_WeatherInfos__WEBPACK_IMPORTED_MODULE_13__["default"], {
        weatherData: WeatherSearch.results
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default.a, {
        "aria-label": "Save",
        className: "save",
        disabled: record.fetching,
        onClick: function onClick(e) {
          return _this2.setState({
            editing: false
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_10___default.a, null))));
    }
  }]);

  return WeatherBlock;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component), _class2.propTypes = {
  record: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
}, _temp)) || _class) || _class) || _class);

;

/***/ }),

/***/ "./App/ui/containers/Widget.js":
/*!*************************************!*\
  !*** ./App/ui/containers/Widget.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Widget; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "undefined?e108");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "undefined?3832");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rnd */ "undefined?84ab");
/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_rnd__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rscopes */ "undefined?05b7");
/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rscopes__WEBPACK_IMPORTED_MODULE_9__);







var _class, _class2, _temp;

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





var Widget = Object(rscopes__WEBPACK_IMPORTED_MODULE_9__["reScope"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Widget, _React$Component);

  function Widget() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Widget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Widget)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};

    _this.saveState = function (e, d) {
      var _this$props = _this.props,
          $actions = _this$props.$actions,
          record = _this$props.record;
      $actions.updateWidget(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, record, {
        size: _this.state.size || record.size,
        position: _this.state.position || record.position
      }));
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Widget, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _this$props2$record = _this$props2.record;
      _this$props2$record = _this$props2$record === void 0 ? {} : _this$props2$record;
      var position = _this$props2$record.position,
          size = _this$props2$record.size,
          record = _this$props2.record,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          $actions = _this$props2.$actions,
          onSelect = _this$props2.onSelect,
          selected = _this$props2.selected,
          state = this.state;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_rnd__WEBPACK_IMPORTED_MODULE_8__["Rnd"], {
        className: "Widget",
        disableDragging: !!disabled,
        enableResizing: disabled //dragHandleClassName={ "handle" }
        ,
        style: selected ? {
          zIndex: 2000
        } : undefined,
        size: state.size || size,
        position: state.position || position,
        onDragStop: this.saveState,
        onResizeStop: this.saveState,
        onDrag: function onDrag(e, d) {
          !selected && onSelect(record);

          _this2.setState({
            position: {
              x: d.x,
              y: d.y
            }
          });
        },
        onResize: function onResize(e, direction, ref, delta, position) {
          _this2.setState({
            position: position,
            size: {
              width: ref.offsetWidth,
              height: ref.offsetHeight
            }
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: " content"
      }, children));
    }
  }]);

  return Widget;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component), _class2.propTypes = {
  selected: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  record: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
}, _temp)) || _class;


;

/***/ }),

/***/ "./App/ui/pages/Home.js":
/*!******************************!*\
  !*** ./App/ui/pages/Home.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var App_ui_containers_Widget_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! App/ui/containers/Widget.js */ "./App/ui/containers/Widget.js");
/* harmony import */ var App_ui_containers_WeatherBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! App/ui/containers/WeatherBlock */ "./App/ui/containers/WeatherBlock.js");
/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rscopes */ "undefined?05b7");
/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rscopes__WEBPACK_IMPORTED_MODULE_8__);






var _dec, _class, _temp;

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




var Home = (_dec = Object(rscopes__WEBPACK_IMPORTED_MODULE_8__["scopeToProps"])("widgets", "appState"), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Home, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$widgets = _this$props.widgets,
          widgets = _this$props$widgets === void 0 ? {
        items: []
      } : _this$props$widgets,
          appState = _this$props.appState;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "desk"
      }, widgets.items.map(function (widget) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(App_ui_containers_Widget_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: widget._id,
          record: widget,
          disabled: true,
          selected: widget._id == appState.selectedWidgetId
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(App_ui_containers_WeatherBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          record: widget,
          disabled: true
        }));
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component), _temp)) || _class);


/***/ }),

/***/ "./App/ui/pages/Settings.js":
/*!**********************************!*\
  !*** ./App/ui/pages/Settings.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "undefined?9283");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "undefined?24b3");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "undefined?36a1");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "undefined?03c7");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "undefined?20a8");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "undefined?74ba");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var App_ui_containers_Widget_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! App/ui/containers/Widget.js */ "./App/ui/containers/Widget.js");
/* harmony import */ var App_ui_containers_WeatherBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! App/ui/containers/WeatherBlock */ "./App/ui/containers/WeatherBlock.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Fab */ "undefined?8406");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Add */ "undefined?3b94");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Save */ "undefined?128e");
/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rscopes */ "undefined?05b7");
/* harmony import */ var rscopes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rscopes__WEBPACK_IMPORTED_MODULE_12__);







var _dec, _class, _temp;

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







var Settings = (_dec = Object(rscopes__WEBPACK_IMPORTED_MODULE_12__["scopeToProps"])("widgets", "appState"), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Settings, _React$Component);

  function Settings() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Settings);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Settings)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Settings, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$widgets = _this$props.widgets,
          widgets = _this$props$widgets === void 0 ? {
        items: []
      } : _this$props$widgets,
          $actions = _this$props.$actions,
          appState = _this$props.appState;

      _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(this.state);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "desk"
      }, widgets.items.map(function (widget) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(App_ui_containers_Widget_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: widget._id,
          record: widget,
          onSelect: function onSelect(e) {
            return $actions.selectWidget(widget._id);
          },
          selected: widget._id == appState.selectedWidgetId
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(App_ui_containers_WeatherBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
          record: widget
        }));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_9___default.a, {
        "aria-label": "edit",
        className: "newBtn button",
        onClick: function onClick(e) {
          return $actions.newWidget();
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_10___default.a, null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_9___default.a, {
        "aria-label": "Delete",
        className: "saveBtn button",
        onClick: function onClick(e) {
          return $actions.saveState();
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_11___default.a, null)));
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component), _temp)) || _class);


/***/ }),

/***/ "./App/ui/styles/index.scss":
/*!**********************************!*\
  !*** ./App/ui/styles/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/wpi-react-hmr-ssr/App/MapOf.App_api____js.gen.js":
/*!***********************************************************************!*\
  !*** ./node_modules/wpi-react-hmr-ssr/App/MapOf.App_api____js.gen.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var req,
    _exports = {},
    root;
req = __webpack_require__("./App/api sync recursive ^\\.\\/(([^\\\\\\/]+\\/)+)?[^\\\\\\/]+\\.js$");
req.keys().forEach(function (key) {
  var name = key.substr(2);
  _exports[name] = _exports[name] || req(key);
});
req = __webpack_require__("./node_modules/wpi-react-hmr-ssr/App/api sync recursive ^\\.\\/(([^\\\\\\/]+\\/)+)?[^\\\\\\/]+\\.js$");
req.keys().forEach(function (key) {
  var name = key.substr(2);
  _exports[name] = _exports[name] || req(key);
});
/* harmony default export */ __webpack_exports__["default"] = (_exports);

/***/ }),

/***/ "./node_modules/wpi-react-hmr-ssr/App/api sync recursive ^\\.\\/(([^\\\\\\/]+\\/)+)?[^\\\\\\/]+\\.js$":
/*!****************************************************************************************!*\
  !*** ./node_modules/wpi-react-hmr-ssr/App/api sync ^\.\/(([^\\\/]+\/)+)?[^\\\/]+\.js$ ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "./App/api/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/wpi-react-hmr-ssr/App/api sync recursive ^\\.\\/(([^\\\\\\/]+\\/)+)?[^\\\\\\/]+\\.js$";

/***/ }),

/***/ "./node_modules/wpi-react-hmr-ssr/App/api.js":
/*!***************************************************!*\
  !*** ./node_modules/wpi-react-hmr-ssr/App/api.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is */ "undefined?63a5");
/* harmony import */ var is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/**.js */ "./node_modules/wpi-react-hmr-ssr/App/MapOf.App_api____js.gen.js");
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



var debug = __webpack_require__(/*! App/console */ "./node_modules/wpi-react-hmr-ssr/App/console.js").default("server");

/* harmony default export */ __webpack_exports__["default"] = (function (server, http) {
  return Object.keys(_api_js__WEBPACK_IMPORTED_MODULE_1__["default"]).forEach(function (group) {
    try {
      _api_js__WEBPACK_IMPORTED_MODULE_1__["default"][group].default(server, http);
    } catch (e) {
      debug.error("Api fail loading service ", group, "\n", e);
    }
  });
});

/***/ }),

/***/ "./node_modules/wpi-react-hmr-ssr/App/console.js":
/*!*******************************************************!*\
  !*** ./node_modules/wpi-react-hmr-ssr/App/console.js ***!
  \*******************************************************/
/*! exports provided: console, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "console", function() { return d_console; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "undefined?4d9b");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "undefined?0db5");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);



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
var cfg = __webpack_require__(/*! App/.wpiConfig.json */ "./App/.wpiConfig.json"),
    debug = __webpack_require__(/*! debug-logger */ "undefined?63f7"),
    isFunction = __webpack_require__(/*! is */ "undefined?63a5").function,
    isBrowserSide = new Function("try {return this===window;}catch(e){ return false;}")(),
    debounce = __webpack_require__(/*! debounce */ "undefined?508e"),
    _console = !isBrowserSide && function _console(ns) {
  var nmFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
    return '';
  };

  var c = debug(ns),
      fn = function fn(ns2) {
    return new _console(ns + "::" + ns2);
  };

  for (var k in c) {
    if (c.hasOwnProperty(k) && !this[k] && isFunction(c[k])) fn[k] = c[k].bind(c, nmFn(ns));
  }

  fn.beep = function () {
    process.stdout.write('\x07'); // do a beep

    this.error.apply(this, arguments);
  };

  return fn;
} || function _console(ns) {
  var nmFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
    return '';
  };

  var c = console,
      fn = function fn(ns2) {
    return new _console(ns + "::" + ns2);
  };

  for (var k in c) {
    if (c.hasOwnProperty(k) && !this[k] && isFunction(c[k])) fn[k] = c[k].bind(console, nmFn(ns));
  }

  fn.beep = function () {
    this.error.apply(this, arguments);
  };

  return fn;
};

debug.inspectOptions = {
  colors: true
};
debug.debug.enable(cfg.project.name + '*');

console.watch = console.watch || function (oObj, sProp) {
  var sPrivateProp = "$_" + sProp + "_$"; // to minimize the name clash risk

  oObj[sPrivateProp] = oObj[sProp]; // overwrite with accessor

  Object.defineProperty(oObj, sProp, {
    get: function get() {
      return oObj[sPrivateProp];
    },
    set: function set(value) {
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
  var hookedWarn = console.warn,
      hookedError = console.error,
      recentWarn = [],
      recentErrors = [],
      warn = debounce(function () {
    console.groupCollapsed(" %d %cvendors warns happen%c (%s)", recentWarn.length, "color: orange; text-decoration: underline", "color: gray; font-style: italic;font-size:.8em", truncate(recentWarn.map(function (v) {
      return v.join(', ');
    }).join('\t'), 50));
    recentWarn.forEach(function (_ref) {
      var _console2;

      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
          argz = _ref2[0],
          trace = _ref2[1];

      (_console2 = console).groupCollapsed.apply(_console2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argz));

      hookedWarn.call(console, trace);
      console.groupEnd();
    });
    recentWarn = [];
    console.groupEnd();
  }, 2000),
      error = debounce(function () {
    console.groupCollapsed(" %d %cvendors errors happen%c (%s)", recentErrors.length, "color: red; text-decoration: underline", "color: gray; font-style: italic;font-size:.8em", truncate(recentErrors.map(function (v) {
      return v.join(', ');
    }).join('\t'), 50)); // recentErrors.forEach(argz => hookedWarn.apply(console, argz));

    recentErrors.forEach(function (_ref3) {
      var _console3;

      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),
          argz = _ref4[0],
          trace = _ref4[1];

      (_console3 = console).groupCollapsed.apply(_console3, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argz));

      hookedError.call(console, trace);
      console.groupEnd();
    });
    recentErrors = [];
    console.groupEnd();
  }, 2000);

  console.warn = function () {
    for (var _len = arguments.length, argz = new Array(_len), _key = 0; _key < _len; _key++) {
      argz[_key] = arguments[_key];
    }

    if (!argz[0] && argz[0].startWith(cfg.project.name)) return hookedWarn.apply(void 0, argz);
    recentWarn.push([argz, new Error().stack]);
    warn();
  };

  console.trace = function () {//if ( /^Caipi/.test(argz[0]) )
    //    return hookedWarn(...argz);
    //recentWarn.push([argz, (new Error()).stack]);
    //warn();
  };

  console.error = function () {
    for (var _len2 = arguments.length, argz = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      argz[_key2] = arguments[_key2];
    }

    if (argz[0].startWith(cfg.project.name)) return hookedWarn.apply(void 0, argz);
    recentErrors.push([argz, new Error().stack]);
    error();
  };
}();
var d_console = new _console(cfg.project.name);

/* harmony default export */ __webpack_exports__["default"] = (d_console);

/***/ }),

/***/ "./node_modules/wpi-react-hmr-ssr/App/index.server.js":
/*!************************************************************!*\
  !*** ./node_modules/wpi-react-hmr-ssr/App/index.server.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/App */ "./App/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/wpi-react-hmr-ssr/App/api.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "undefined?9439");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/*
 *
 * Copyright (C) 2019 Nathan Braun
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





var express = __webpack_require__(/*! express */ "undefined?22fe"),
    server = express(),
    http = __webpack_require__(/*! http */ "http").Server(server),
    argz = __webpack_require__(/*! minimist */ "undefined?2efa")(process.argv.slice(2)),
    wpiConf = __webpack_require__(/*! App/.wpiConfig */ "./App/.wpiConfig.json"),
    debug = __webpack_require__(/*! App/console */ "./node_modules/wpi-react-hmr-ssr/App/console.js").default("server");

process.title = wpiConf.project.name + '::server';
debug.warn("process.env.DEBUG : ", process.env.DEBUG);
server.use(express.json()); // to support JSON-encoded bodies

server.use(express.urlencoded()); // to support URL-encoded bodies

Object(_api__WEBPACK_IMPORTED_MODULE_2__["default"])(server, http);
var server_instance = http.listen(parseInt(argz.p || argz.port || 8000), function () {
  debug.info('Running on ', server_instance.address().port);
});

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi App/index.server ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! App/index.server */"./node_modules/wpi-react-hmr-ssr/App/index.server.js");


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "undefined?03c7":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "undefined?0422":
/*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/applyDecoratedDescriptor" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/applyDecoratedDescriptor");

/***/ }),

/***/ "undefined?05b7":
/*!**************************!*\
  !*** external "rscopes" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rscopes");

/***/ }),

/***/ "undefined?0beb":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "undefined?0db5":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "undefined?128e":
/*!******************************************!*\
  !*** external "@material-ui/icons/Save" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Save");

/***/ }),

/***/ "undefined?20a8":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "undefined?22fe":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "undefined?24b3":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "undefined?2778":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "undefined?2efa":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("minimist");

/***/ }),

/***/ "undefined?36a1":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "undefined?36e2":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "undefined?3832":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "undefined?3b94":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "undefined?492a":
/*!********************************!*\
  !*** external "react-rescope" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-rescope");

/***/ }),

/***/ "undefined?4d9b":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "undefined?508e":
/*!***************************!*\
  !*** external "debounce" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),

/***/ "undefined?52bc":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "undefined?53b9":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "undefined?56eb":
/*!*********************************************!*\
  !*** external "@babel/runtime/helpers/get" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/get");

/***/ }),

/***/ "undefined?588e":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "undefined?6a05":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "undefined?74ba":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "undefined?7ff1":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "undefined?8406":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "undefined?84ab":
/*!****************************!*\
  !*** external "react-rnd" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-rnd");

/***/ }),

/***/ "undefined?8ec2":
/*!*********************************!*\
  !*** external "rscopes/spells" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rscopes/spells");

/***/ }),

/***/ "undefined?91cd":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "undefined?9283":
/*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/objectDestructuringEmpty" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectDestructuringEmpty");

/***/ }),

/***/ "undefined?9439":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "undefined?a026":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),

/***/ "undefined?a433":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "undefined?bd76":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "undefined?beec":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "undefined?e108":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ })

/******/ });
//# sourceMappingURL=App.server.js.map