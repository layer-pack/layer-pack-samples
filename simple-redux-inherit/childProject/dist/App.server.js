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
/******/ 	return __webpack_require__(__webpack_require__.s = "../wp4-react-redux-sass-hmr/App/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../shared/wpi-react-hmr-ssr/App/MapOf.App_reducers___js.gen.js":
/*!******************************************************************************************************!*\
  !*** G:/n8tz/wpi/webpack-inherit-sample/shared/wpi-react-hmr-ssr/App/MapOf.App_reducers___js.gen.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var req,
    _exports = {},
    root;
req = __webpack_require__("../parentProject/App/reducers sync recursive ^\\.\\/[^\\\\\\/]+\\.js$");
req.keys().forEach(function (key) {
  var name = key.substr(2);
  _exports[name] = _exports[name] || req(key);
});
req = __webpack_require__("../wp4-react-redux-sass-hmr/App/reducers sync recursive ^\\.\\/[^\\\\\\/]+\\.js$");
req.keys().forEach(function (key) {
  var name = key.substr(2);
  _exports[name] = _exports[name] || req(key);
});
/* harmony default export */ __webpack_exports__["default"] = (_exports);

/***/ }),

/***/ "../parentProject/App/App.js":
/*!***********************************!*\
  !*** ../parentProject/App/App.js ***!
  \***********************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "undefined?78cd");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var App_actions_updateAppState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! App/actions/updateAppState */ "../parentProject/App/actions/updateAppState.js");
/* harmony import */ var App_actions_updateWidget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! App/actions/updateWidget */ "../parentProject/App/actions/updateWidget.js");
/* harmony import */ var App_containers_WeatherWidget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! App/containers/WeatherWidget.js */ "../parentProject/App/containers/WeatherWidget.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/index.scss */ "./App/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_10__);






var _dec, _class;

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






var App = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(function (_ref) {
  var someData = _ref.someData,
      appState = _ref.appState;
  return {
    someData: someData,
    appState: appState
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _React$Component);

  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$someData = _this$props.someData,
          someData = _this$props$someData === void 0 ? {
        items: []
      } : _this$props$someData,
          appState = _this$props.appState,
          dispatch = _this$props.dispatch;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Minimal drafty redux sample"), someData.items.map(function (note) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(App_containers_WeatherWidget_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: note._id,
          record: note,
          onSelect: function onSelect(e) {
            return dispatch(Object(App_actions_updateAppState__WEBPACK_IMPORTED_MODULE_7__["selectPostIt"])(note._id));
          },
          selected: note._id == appState.selectedPostItId
        });
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "newBtn button",
        onClick: function onClick(e) {
          return dispatch(Object(App_actions_updateWidget__WEBPACK_IMPORTED_MODULE_8__["newPostIt"])());
        }
      }, "Add Post It"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "saveBtn button",
        onClick: function onClick(e) {
          return dispatch(Object(App_actions_updateAppState__WEBPACK_IMPORTED_MODULE_7__["saveState"])());
        }
      }, "Save state"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)) || _class);


/***/ }),

/***/ "../parentProject/App/actions/updateAppState.js":
/*!******************************************************!*\
  !*** ../parentProject/App/actions/updateAppState.js ***!
  \******************************************************/
/*! exports provided: SELECTED_WIDGET_CHANGED, SAVING_STATE, selectPostIt, saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_WIDGET_CHANGED", function() { return SELECTED_WIDGET_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVING_STATE", function() { return SAVING_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostIt", function() { return selectPostIt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superagent */ "undefined?a026");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _updateWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateWidget */ "../parentProject/App/actions/updateWidget.js");
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


var SELECTED_WIDGET_CHANGED = 'SELECTED_WIDGET_CHANGED';
var SAVING_STATE = 'SAVING_STATE';
function selectPostIt(wid) {
  return {
    type: SELECTED_WIDGET_CHANGED,
    wid: wid
  };
}
function saveState(then) {
  return function (dispatch, getState) {
    return superagent__WEBPACK_IMPORTED_MODULE_0___default.a.post('/', getState()).then(function (res) {
      console.log('Saved');
    }).catch(function (e) {
      console.log('Not Saved');
    });
  };
}

/***/ }),

/***/ "../parentProject/App/actions/updateWidget.js":
/*!****************************************************!*\
  !*** ../parentProject/App/actions/updateWidget.js ***!
  \****************************************************/
/*! exports provided: WIDGET_CHANGED, WIDGET_NEW, WIDGET_RM, METEO_SEARCHING, METEO_SEARCH_COMPLETE, newPostIt, updateWidget, rmPostIt, weatherSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDGET_CHANGED", function() { return WIDGET_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDGET_NEW", function() { return WIDGET_NEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDGET_RM", function() { return WIDGET_RM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METEO_SEARCHING", function() { return METEO_SEARCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METEO_SEARCH_COMPLETE", function() { return METEO_SEARCH_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newPostIt", function() { return newPostIt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWidget", function() { return updateWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rmPostIt", function() { return rmPostIt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherSearch", function() { return weatherSearch; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "undefined?e108");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "undefined?a026");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "undefined?beec");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);



var WIDGET_CHANGED = 'WIDGET_CHANGED';
var WIDGET_NEW = 'WIDGET_NEW';
var WIDGET_RM = 'WIDGET_RM';
var METEO_SEARCHING = 'METEO_SEARCHING';
var METEO_SEARCH_COMPLETE = 'METEO_SEARCH_COMPLETE'; // actions

function newPostIt() {
  return {
    type: WIDGET_NEW,
    record: {
      _id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      size: {
        width: 350,
        height: 200
      },
      position: {
        x: 100 + ~~(Math.random() * 600),
        y: 100 + ~~(Math.random() * 600)
      }
    }
  };
}
function updateWidget(record) {
  return {
    type: WIDGET_CHANGED,
    record: record
  };
}
function rmPostIt(wid) {
  return {
    type: WIDGET_RM,
    wid: wid
  };
}
function weatherSearch(record, location, then) {
  return function (dispatch, getState) {
    dispatch(updateWidget(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, record, {
      fetching: location
    })));
    return superagent__WEBPACK_IMPORTED_MODULE_1___default.a.get(getState().appState.src + location).then(function (res) {
      dispatch(updateWidget(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, record, {
        fetching: false,
        results: res.body,
        location: location
      })));
    }).catch(function (e) {
      dispatch(updateWidget(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, record, {
        fetching: false
      })));
    });
  };
}

/***/ }),

/***/ "../parentProject/App/components/WeatherInfos.js":
/*!*******************************************************!*\
  !*** ../parentProject/App/components/WeatherInfos.js ***!
  \*******************************************************/
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
  var weatherData = _ref.weatherData;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "MeteoInfos"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "location"
  }, weatherData.name, "\xA0 (\xA0", weatherData.weather[0] && weatherData.weather[0].description, "\xA0)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "picto"
  }, weatherData.weather[0] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + '.png'
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "infos"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dt"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dt"
  }, moment__WEBPACK_IMPORTED_MODULE_1___default()(weatherData.dt * 1000).format('MMMM Do YYYY, h:mm:ss a')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wind"
  }, weatherData.wind.speed, "mh")));
});

/***/ }),

/***/ "../parentProject/App/containers/WeatherWidget.js":
/*!********************************************************!*\
  !*** ../parentProject/App/containers/WeatherWidget.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeatherWidget; });
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
/* harmony import */ var react_inheritable_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-inheritable-contextmenu */ "undefined?88b5");
/* harmony import */ var react_inheritable_contextmenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_inheritable_contextmenu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rnd */ "undefined?84ab");
/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_rnd__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "undefined?78cd");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_WeatherInfos_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/WeatherInfos.js */ "../parentProject/App/components/WeatherInfos.js");
/* harmony import */ var App_actions_updateAppState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! App/actions/updateAppState */ "../parentProject/App/actions/updateAppState.js");
/* harmony import */ var App_actions_updateWidget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! App/actions/updateWidget */ "../parentProject/App/actions/updateWidget.js");







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







var WeatherWidget = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(WeatherWidget, _React$Component);

  function WeatherWidget() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, WeatherWidget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(WeatherWidget)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};

    _this.saveState = function (e, d) {
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          record = _this$props.record;
      dispatch(Object(App_actions_updateWidget__WEBPACK_IMPORTED_MODULE_12__["updateWidget"])(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, record, {
        size: _this.state.size || record.size,
        position: _this.state.position || record.position
      })));
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(WeatherWidget, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props2 = this.props,
          dispatch = _this$props2.dispatch,
          record = _this$props2.record;
      if (record.location && !record.results) dispatch(Object(App_actions_updateWidget__WEBPACK_IMPORTED_MODULE_12__["weatherSearch"])(record, record.location));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          _this$props3$record = _this$props3.record;
      _this$props3$record = _this$props3$record === void 0 ? {} : _this$props3$record;
      var position = _this$props3$record.position,
          size = _this$props3$record.size,
          record = _this$props3.record,
          dispatch = _this$props3.dispatch,
          onSelect = _this$props3.onSelect,
          selected = _this$props3.selected,
          state = this.state;
      react_inheritable_contextmenu__WEBPACK_IMPORTED_MODULE_6___default.a;
      debugger;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_rnd__WEBPACK_IMPORTED_MODULE_8__["Rnd"], {
        z: selected ? 2000 : 1,
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
        className: "postit handle"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_inheritable_contextmenu__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Menu root")), !this.state.editing && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "text"
      }, record.fetching && "Loading...." || record.results && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_WeatherInfos_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        weatherData: record.results
      }) || "Edit me !", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2.setState({
            editing: true
          });
        },
        className: "edit"
      }, "\uD83D\uDD8B"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return dispatch(Object(App_actions_updateWidget__WEBPACK_IMPORTED_MODULE_12__["rmPostIt"])(record._id));
        },
        className: "delete"
      }, "\uD83D\uDDBE")) || react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "editor"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "search"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        onChange: function onChange(e) {
          _this2.setState({
            searching: e.target.value
          });

          if (e.target.value.length > 2) dispatch(Object(App_actions_updateWidget__WEBPACK_IMPORTED_MODULE_12__["weatherSearch"])(record, e.target.value));
        },
        value: state.searching !== undefined ? state.searching : record.location,
        onMouseDown: function onMouseDown(e) {
          return e.stopPropagation();
        }
      })), record.fetching && "Loading...." || record.results && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_WeatherInfos_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        weatherData: record.results
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        disabled: record.fetching,
        onClick: function onClick(e) {
          return _this2.setState({
            editing: false
          });
        }
      }, "\uD83D\uDCBE"))));
    }
  }]);

  return WeatherWidget;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component), _temp)) || _class);

;

/***/ }),

/***/ "../parentProject/App/reducers sync recursive ^\\.\\/[^\\\\\\/]+\\.js$":
/*!*************************************************************!*\
  !*** ../parentProject/App/reducers sync ^\.\/[^\\\/]+\.js$ ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./appState.js": "../parentProject/App/reducers/appState.js",
	"./someData.js": "../parentProject/App/reducers/someData.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../parentProject/App/reducers sync recursive ^\\.\\/[^\\\\\\/]+\\.js$";

/***/ }),

/***/ "../parentProject/App/reducers/appState.js":
/*!*************************************************!*\
  !*** ../parentProject/App/reducers/appState.js ***!
  \*************************************************/
/*! exports provided: appState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appState", function() { return appState; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "undefined?e108");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_updateAppState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/updateAppState */ "../parentProject/App/actions/updateAppState.js");


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

function appState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_updateAppState__WEBPACK_IMPORTED_MODULE_1__["SELECTED_WIDGET_CHANGED"]:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        selectedPostItId: action.wid
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "../parentProject/App/reducers/someData.js":
/*!*************************************************!*\
  !*** ../parentProject/App/reducers/someData.js ***!
  \*************************************************/
/*! exports provided: someData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "someData", function() { return someData; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "undefined?4d9b");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_updateWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/updateWidget */ "../parentProject/App/actions/updateWidget.js");


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

function someData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    right: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_updateWidget__WEBPACK_IMPORTED_MODULE_1__["WIDGET_CHANGED"]:
      return {
        items: state.items.map(function (it) {
          return it._id === action.record._id ? action.record : it;
        })
      };

    case _actions_updateWidget__WEBPACK_IMPORTED_MODULE_1__["WIDGET_NEW"]:
      return {
        items: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.items), [action.record])
      };

    case _actions_updateWidget__WEBPACK_IMPORTED_MODULE_1__["WIDGET_RM"]:
      return {
        items: state.items.filter(function (it) {
          return it._id !== action.wid;
        })
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "../wp4-react-redux-sass-hmr/App/configureStore.js":
/*!*********************************************************!*\
  !*** ../wp4-react-redux-sass-hmr/App/configureStore.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "undefined?d325");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "undefined?5aa9");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "undefined?8808");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "../wp4-react-redux-sass-hmr/App/reducers.js");
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




function configureStore(preloadedState) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));

  if (false) {}

  return store;
}

/***/ }),

/***/ "../wp4-react-redux-sass-hmr/App/index.html.tpl":
/*!******************************************************!*\
  !*** ../wp4-react-redux-sass-hmr/App/index.html.tpl ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (function () {
  var fn = function anonymous(it
/*``*/) {
var out='<!DOCTYPE html><!-- ~ Copyright (c)  2018 Wise Wild Web . ~ ~  MIT License ~ ~  Permission is hereby granted, free of charge, to any person obtaining a copy ~  of this software and associated documentation files (the "Software"), to deal ~  in the Software without restriction, including without limitation the rights ~  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell ~  copies of the Software, and to permit persons to whom the Software is ~  furnished to do so, subject to the following conditions: ~ ~  The above copyright notice and this permission notice shall be included in all ~  copies or substantial portions of the Software. ~ ~  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR ~  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, ~  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE ~  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER ~  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, ~  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE ~  SOFTWARE. ~ ~ @author : Nathanael Braun ~ @contact : n8tz.js@gmail.com --><html lang="en"><head> <meta charset="UTF-8"> <title>Really basic drafty redux + react webpack-inherit example</title> <script>window.__STATE__  ='+(it.state || "{}")+';</script></head><body><div id="app">'+(it.app || '')+'</div><script src="./App.vendors.js"></script><script src="./App.js"></script><script> App.renderTo(document.getElementById(\'app\'), window.__STATE__);</script></body></html>';return out;
};
  fn.render = fn;
  return fn;
})();

/***/ }),

/***/ "../wp4-react-redux-sass-hmr/App/index.js":
/*!************************************************!*\
  !*** ../wp4-react-redux-sass-hmr/App/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ "undefined?328e");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var App_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! App/App */ "../parentProject/App/App.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "undefined?5e9a");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "undefined?588e");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "undefined?9439");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "undefined?78cd");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configureStore */ "../wp4-react-redux-sass-hmr/App/configureStore.js");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./initialState */ "./App/initialState.js");
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









var indexTpl = __webpack_require__(/*! ./index.html.tpl */ "../wp4-react-redux-sass-hmr/App/index.html.tpl");

var ctrl = {
  renderTo: function (_renderTo) {
    function renderTo(_x) {
      return _renderTo.apply(this, arguments);
    }

    renderTo.toString = function () {
      return _renderTo.toString();
    };

    return renderTo;
  }(function (node) {
    var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var store = Object(_configureStore__WEBPACK_IMPORTED_MODULE_6__["default"])(initialState),
        isDev = "development" !== 'production',
        HMRApp = isDev ? Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__["hot"])(App_App__WEBPACK_IMPORTED_MODULE_1__["default"]) : App_App__WEBPACK_IMPORTED_MODULE_1__["default"];
    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
      store: store
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HMRApp, null)), node);

    if (false) {}
  }),
  renderSSR: function renderSSR(_ref, cb) {
    var state = _ref.state;
    var store = Object(_configureStore__WEBPACK_IMPORTED_MODULE_6__["default"])(state || _initialState__WEBPACK_IMPORTED_MODULE_7__["default"]);
    var content = "",
        html,
        preloadedState;

    try {
      content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App_App__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
      preloadedState = store.getState();
      html = indexTpl.render({
        app: content,
        state: JSON.stringify(preloadedState)
      });
    } catch (e) {
      return cb(e);
    }

    cb(null, html);
  }
};
if (typeof window !== 'undefined') window.App = ctrl;
/* harmony default export */ __webpack_exports__["default"] = (ctrl);

/***/ }),

/***/ "../wp4-react-redux-sass-hmr/App/reducers sync recursive ^\\.\\/[^\\\\\\/]+\\.js$":
/*!************************************************************************!*\
  !*** ../wp4-react-redux-sass-hmr/App/reducers sync ^\.\/[^\\\/]+\.js$ ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../wp4-react-redux-sass-hmr/App/reducers sync recursive ^\\.\\/[^\\\\\\/]+\\.js$";

/***/ }),

/***/ "../wp4-react-redux-sass-hmr/App/reducers.js":
/*!***************************************************!*\
  !*** ../wp4-react-redux-sass-hmr/App/reducers.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "undefined?d325");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/*.js */ "../../shared/wpi-react-hmr-ssr/App/MapOf.App_reducers___js.gen.js");
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



var preCombine = function preCombine(items) {
  return items.reduce(function (h, reducer) {
    Object.keys(_reducers_js__WEBPACK_IMPORTED_MODULE_1__["default"][reducer]).forEach(function (act) {
      return h[act] = _reducers_js__WEBPACK_IMPORTED_MODULE_1__["default"][reducer][act];
    });
    return h;
  }, {});
},
    combined = preCombine(Object.keys(_reducers_js__WEBPACK_IMPORTED_MODULE_1__["default"])),
    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(combined);

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./App/initialState.js":
/*!*****************************!*\
  !*** ./App/initialState.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  someData: {
    // initial state
    src: "/api/hello",
    items: [{
      "_id": "rkUQHZrqM",
      "location": "paris",
      "size": {
        "width": 350,
        "height": 200
      },
      "position": {
        "x": 321,
        "y": 167
      }
    }, {
      "_id": "r1bcuMrcM",
      "location": "rio",
      "size": {
        "width": 350,
        "height": 200
      },
      "position": {
        "x": 260,
        "y": 576
      }
    }]
  },
  appState: {
    src: "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
    selectedPostItId: "rkUQHZrqM"
  }
});

/***/ }),

/***/ "./App/styles/index.scss":
/*!*******************************!*\
  !*** ./App/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "undefined?03c7":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "undefined?20a8":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "undefined?24b3":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "undefined?328e":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),

/***/ "undefined?36a1":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "undefined?4d9b":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "undefined?588e":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "undefined?5aa9":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "undefined?5e9a":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "undefined?74ba":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "undefined?78cd":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "undefined?84ab":
/*!****************************!*\
  !*** external "react-rnd" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-rnd");

/***/ }),

/***/ "undefined?8808":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "undefined?88b5":
/*!************************************************!*\
  !*** external "react-inheritable-contextmenu" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-inheritable-contextmenu");

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

/***/ "undefined?d325":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

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