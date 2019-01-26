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
!function ( e ) {
	function t( t ) {
		for ( var r, s, a = t[0], c = t[1], p = t[2], l = 0, u = []; l < a.length; l++ ) s = a[l], o[s] && u.push(o[s][0]), o[s] = 0;
		for ( r in c ) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
		for ( d && d(t); u.length; ) u.shift()();
		return i.push.apply(i, p || []), n()
	}
	
	function n() {
		for ( var e, t = 0; t < i.length; t++ ) {
			for ( var n = i[t], r = !0, a = 1; a < n.length; a++ ) {
				var c = n[a];
				0 !== o[c] && (r = !1)
			}
			r && (i.splice(t--, 1), e = s(s.s = n[0]))
		}
		return e
	}
	
	var r = {}, o = { 0: 0 }, i = [];
	
	function s( t ) {
		if ( r[t] ) return r[t].exports;
		var n = r[t] = { i: t, l: !1, exports: {} };
		return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
	}
	
	s.m = e, s.c = r, s.d = function ( e, t, n ) {
		s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
	}, s.r = function ( e ) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
	}, s.t = function ( e, t ) {
		if ( 1 & t && (e = s(e)), 8 & t ) return e;
		if ( 4 & t && "object" == typeof e && e && e.__esModule ) return e;
		var n = Object.create(null);
		if ( s.r(n), Object.defineProperty(n, "default", {
			enumerable: !0,
			value     : e
		}), 2 & t && "string" != typeof e ) for ( var r in e ) s.d(n, r, function ( t ) {
			return e[t]
		}.bind(null, r));
		return n
	}, s.n = function ( e ) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return s.d(t, "a", t), t
	}, s.o = function ( e, t ) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, s.p = "/";
	var a = window.webpackJsonp = window.webpackJsonp || [], c = a.push.bind(a);
	a.push = t, a = a.slice();
	for ( var p = 0; p < a.length; p++ ) t(a[p]);
	var d = c;
	i.push(["../wp4-react-redux-sass-hmr/App/index.js", 1]), n()
}({
	  "../parentProject/App/actions/updateAppState.js"                                                                                                                                                                                 : function ( e, t, n ) {
		  "use strict";
		  n.d(t, "a", function () {
			  return i
		  }), n.d(t, "c", function () {
			  return s
		  }), n.d(t, "b", function () {
			  return a
		  });
		  var r = n("../parentProject/node_modules/superagent/lib/client.js"),
		      o = n.n(r),
		      i = (n("../parentProject/App/actions/updateWidget.js"), "SELECTED_WIDGET_CHANGED");
		
		  function s( e ) {
			  return { type: i, wid: e }
		  }
		
		  function a( e ) {
			  return function ( e, t ) {
				  return o.a.post("/", t()).then(function ( e ) {
					  console.log("Saved")
				  }).catch(function ( e ) {
					  console.log("Not Saved")
				  })
			  }
		  }
		
		  !function () {
			  var e = n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/index.js").default;
			  if ( e ) {
				  var r = void 0 !== t ? t : exports;
				  if ( "function" != typeof r ) {
					  for ( var o in r ) if ( Object.prototype.hasOwnProperty.call(r, o) ) {
						  var i = void 0;
						  try {
							  i = r[o]
						  } catch ( e ) {
							  continue
						  }
						  e.register(i, o, "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\actions\\updateAppState.js")
					  }
				  }
				  else e.register(r, "module.exports", "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\actions\\updateAppState.js")
			  }
		  }()
	  },
	  "../parentProject/App/actions/updateWidget.js"                                                                                                                                                                                   : function ( e, t, n ) {
		  "use strict";
		  n.d(t, "a", function () {
			  return p
		  }), n.d(t, "b", function () {
			  return d
		  }), n.d(t, "c", function () {
			  return l
		  }), n.d(t, "d", function () {
			  return u
		  }), n.d(t, "f", function () {
			  return h
		  }), n.d(t, "e", function () {
			  return f
		  }), n.d(t, "g", function () {
			  return m
		  });
		  var r = n("../wp4-react-redux-sass-hmr/node_modules/@babel/runtime/helpers/objectSpread.js"),
		      o = n.n(r),
		      i = n("../parentProject/node_modules/superagent/lib/client.js"),
		      s = n.n(i),
		      a = n("./node_modules/shortid/index.js"),
		      c = n.n(a),
		      p = "WIDGET_CHANGED",
		      d = "WIDGET_NEW",
		      l = "WIDGET_RM";
		
		  function u() {
			  return {
				  type  : d,
				  record: {
					  _id     : c.a.generate(),
					  size    : { width: 350, height: 200 },
					  position: { x: 100 + ~~(600 * Math.random()), y: 100 + ~~(600 * Math.random()) }
				  }
			  }
		  }
		
		  function h( e ) {
			  return { type: p, record: e }
		  }
		
		  function f( e ) {
			  return { type: l, wid: e }
		  }
		
		  function m( e, t, n ) {
			  return function ( n, r ) {
				  return n(h(o()({}, e, { fetching: t }))), s.a.get(r().appState.src + t).then(function ( r ) {
					  n(h(o()({}, e, { fetching: !1, results: r.body, location: t })))
				  }).catch(function ( t ) {
					  n(h(o()({}, e, { fetching: !1 })))
				  })
			  }
		  }
		
		  !function () {
			  var e = n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/index.js").default;
			  if ( e ) {
				  var r = void 0 !== t ? t : exports;
				  if ( "function" != typeof r ) {
					  for ( var o in r ) if ( Object.prototype.hasOwnProperty.call(r, o) ) {
						  var i = void 0;
						  try {
							  i = r[o]
						  } catch ( e ) {
							  continue
						  }
						  e.register(i, o, "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\actions\\updateWidget.js")
					  }
				  }
				  else e.register(r, "module.exports", "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\actions\\updateWidget.js")
			  }
		  }()
	  },
	  "../parentProject/App/reducers sync recursive ^\\.\\/[^\\\\\\/]+\\.js$"                                                                                                                                                          : function ( e, t, n ) {
		  var r = {
			  "./appState.js": "../parentProject/App/reducers/appState.js",
			  "./someData.js": "../parentProject/App/reducers/someData.js"
		  };
		
		  function o( e ) {
			  var t = i(e);
			  return n(t)
		  }
		
		  function i( e ) {
			  var t = r[e];
			  if ( !(t + 1) ) {
				  var n = new Error("Cannot find module '" + e + "'");
				  throw n.code = "MODULE_NOT_FOUND", n
			  }
			  return t
		  }
		
		  o.keys = function () {
			  return Object.keys(r)
		  }, o.resolve = i, e.exports = o, o.id = "../parentProject/App/reducers sync recursive ^\\.\\/[^\\\\\\/]+\\.js$"
	  },
	  "../parentProject/App/reducers/appState.js"                                                                                                                                                                                      : function ( e, t, n ) {
		  "use strict";
		  n.r(t), n.d(t, "appState", function () {
			  return s
		  });
		  var r = n("../wp4-react-redux-sass-hmr/node_modules/@babel/runtime/helpers/objectSpread.js"),
		      o = n.n(r),
		      i = n("../parentProject/App/actions/updateAppState.js");
		
		  function s() {
			  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			      t = arguments.length > 1 ? arguments[1] : void 0;
			  switch ( t.type ) {
				  case i.a:
					  return o()({}, e, { selectedPostItId: t.wid });
				  default:
					  return e
			  }
		  }
		
		  !function () {
			  var e = n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/index.js").default;
			  if ( e ) {
				  var r = void 0 !== t ? t : exports;
				  if ( "function" != typeof r ) {
					  for ( var o in r ) if ( Object.prototype.hasOwnProperty.call(r, o) ) {
						  var i = void 0;
						  try {
							  i = r[o]
						  } catch ( e ) {
							  continue
						  }
						  e.register(i, o, "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\reducers\\appState.js")
					  }
				  }
				  else e.register(r, "module.exports", "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\reducers\\appState.js")
			  }
		  }()
	  },
	  "../parentProject/App/reducers/someData.js"                                                                                                                                                                                      : function ( e, t, n ) {
		  "use strict";
		  n.r(t), n.d(t, "someData", function () {
			  return s
		  });
		  var r = n("../wp4-react-redux-sass-hmr/node_modules/@babel/runtime/helpers/toConsumableArray.js"),
		      o = n.n(r),
		      i = n("../parentProject/App/actions/updateWidget.js");
		
		  function s() {
			  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { right: !1 },
			      t = arguments.length > 1 ? arguments[1] : void 0;
			  switch ( t.type ) {
				  case i.a:
					  return {
						  items: e.items.map(function ( e ) {
							  return e._id === t.record._id ? t.record : e
						  })
					  };
				  case i.b:
					  return { items: [].concat(o()(e.items), [t.record]) };
				  case i.c:
					  return {
						  items: e.items.filter(function ( e ) {
							  return e._id !== t.wid
						  })
					  };
				  default:
					  return e
			  }
		  }
		
		  !function () {
			  var e = n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/index.js").default;
			  if ( e ) {
				  var r = void 0 !== t ? t : exports;
				  if ( "function" != typeof r ) {
					  for ( var o in r ) if ( Object.prototype.hasOwnProperty.call(r, o) ) {
						  var i = void 0;
						  try {
							  i = r[o]
						  } catch ( e ) {
							  continue
						  }
						  e.register(i, o, "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\reducers\\someData.js")
					  }
				  }
				  else e.register(r, "module.exports", "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\reducers\\someData.js")
			  }
		  }()
	  },
	  "../parentProject/node_modules/moment/locale sync recursive ^\\.\\/(fr|en|us)$"                                                                                                                                                  : function ( e, t, n ) {
		  var r = { "./fr": "../parentProject/node_modules/moment/locale/fr.js" };
		
		  function o( e ) {
			  var t = i(e);
			  return n(t)
		  }
		
		  function i( e ) {
			  var t = r[e];
			  if ( !(t + 1) ) {
				  var n = new Error("Cannot find module '" + e + "'");
				  throw n.code = "MODULE_NOT_FOUND", n
			  }
			  return t
		  }
		
		  o.keys = function () {
			  return Object.keys(r)
		  }, o.resolve = i, e.exports = o, o.id = "../parentProject/node_modules/moment/locale sync recursive ^\\.\\/(fr|en|us)$"
	  },
	  "../wp4-react-redux-sass-hmr/App/index.html.tpl"                                                                                                                                                                                 : function ( e, t ) {
		  var n;
		  e.exports = ((n = function ( e ) {
			  return '<!DOCTYPE html>\x3c!-- ~ Copyright (c)  2018 Wise Wild Web . ~ ~  MIT License ~ ~  Permission is hereby granted, free of charge, to any person obtaining a copy ~  of this software and associated documentation files (the "Software"), to deal ~  in the Software without restriction, including without limitation the rights ~  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell ~  copies of the Software, and to permit persons to whom the Software is ~  furnished to do so, subject to the following conditions: ~ ~  The above copyright notice and this permission notice shall be included in all ~  copies or substantial portions of the Software. ~ ~  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR ~  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, ~  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE ~  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER ~  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, ~  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE ~  SOFTWARE. ~ ~ @author : Nathanael Braun ~ @contact : caipilabs@gmail.com --\x3e<html lang="en"><head> <meta charset="UTF-8"> <title>Really basic drafty redux + react webpack-inherit example</title> <script>window.__STATE__  =' + (e.state || "{}") + ';<\/script></head><body><div id="app">' + (e.app || "") + '</div><script src="./App.vendors.js"><\/script><script src="./App.js"><\/script><script> App.renderTo(document.getElementById(\'app\'), window.__STATE__);<\/script></body></html>'
		  }).render = n, n)
	  },
	  "../wp4-react-redux-sass-hmr/App/index.js"                                                                                                                                                                                       : function ( e, t, n ) {
		  "use strict";
		  n.r(t);
		  n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/root.js");
		  var r,
		      o = n("../wp4-react-redux-sass-hmr/node_modules/@babel/runtime/helpers/classCallCheck.js"),
		      i = n.n(o),
		      s = n("../wp4-react-redux-sass-hmr/node_modules/@babel/runtime/helpers/createClass.js"),
		      a = n.n(s),
		      c = n("../wp4-react-redux-sass-hmr/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),
		      p = n.n(c),
		      d = n("../wp4-react-redux-sass-hmr/node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
		      l = n.n(d),
		      u = n("../wp4-react-redux-sass-hmr/node_modules/@babel/runtime/helpers/inherits.js"),
		      h = n.n(u),
		      f = n("../parentProject/node_modules/react/index.js"),
		      m = n.n(f),
		      O = n("../wp4-react-redux-sass-hmr/node_modules/react-redux/es/index.js"),
		      T = n("../parentProject/App/actions/updateAppState.js"),
		      E = n("../parentProject/App/actions/updateWidget.js"),
		      b = n("../wp4-react-redux-sass-hmr/node_modules/@babel/runtime/helpers/objectSpread.js"),
		      w = n.n(b),
		      A = n("../parentProject/node_modules/react-rnd/lib/index.js"),
		      I = n("../parentProject/node_modules/moment/moment.js"),
		      x = n.n(I),
		      g = function ( e ) {
			      var t = e.weatherData;
			      return m.a.createElement("div", { className: "MeteoInfos" }, m.a.createElement("div", { className: "location" }, t.name, "  ( ", t.weather[0] && t.weather[0].description, " )"), m.a.createElement("div", { className: "picto" }, t.weather[0] && m.a.createElement("img", { src: "http://openweathermap.org/img/w/" + t.weather[0].icon + ".png" })), m.a.createElement("div", { className: "infos" }, m.a.createElement("div", { className: "dt" }), m.a.createElement("div", { className: "dt" }, x()(1e3 * t.dt).format("MMMM Do YYYY, h:mm:ss a")), m.a.createElement("div", { className: "wind" }, t.wind.speed, "mh")))
		      };
		  !function () {
			  var e = n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/index.js").default;
			  if ( e ) {
				  var r = void 0 !== t ? t : exports;
				  if ( "function" != typeof r ) {
					  for ( var o in r ) if ( Object.prototype.hasOwnProperty.call(r, o) ) {
						  var i = void 0;
						  try {
							  i = r[o]
						  } catch ( e ) {
							  continue
						  }
						  e.register(i, o, "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\components\\WeatherInfos.js")
					  }
				  }
				  else e.register(r, "module.exports", "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\components\\WeatherInfos.js")
			  }
		  }();
		  var N = Object(O.b)()(r = function ( e ) {
			  function t() {
				  var e, n;
				  i()(this, t);
				  for ( var r = arguments.length, o = new Array(r), s = 0; s < r; s++ ) o[s] = arguments[s];
				  return (n = p()(this, (e = l()(t)).call.apply(e, [this].concat(o)))).state = {}, n.saveState = function ( e, t ) {
					  var r = n.props, o = r.dispatch, i = r.record;
					  o(Object(E.f)(w()({}, i, {
						  size    : n.state.size || i.size,
						  position: n.state.position || i.position
					  })))
				  }, n
			  }
			
			  return h()(t, e), a()(t, [{
				  key: "componentWillMount", value: function () {
					  var e = this.props, t = e.dispatch, n = e.record;
					  n.location && !n.results && t(Object(E.g)(n, n.location))
				  }
			  }, {
				  key: "render", value: function () {
					  var e = this,
					      t = this.props,
					      n = t.record,
					      r = (n = void 0 === n ? {} : n).position,
					      o = n.size,
					      i = t.record,
					      s = t.dispatch,
					      a = t.onSelect,
					      c = t.selected,
					      p = this.state;
					  return m.a.createElement(A.a, {
						  z           : c ? 2e3 : 1,
						  size        : p.size || o,
						  position    : p.position || r,
						  onDragStop  : this.saveState,
						  onResizeStop: this.saveState,
						  onDrag      : function ( t, n ) {
							  !c && a(i), e.setState({ position: { x: n.x, y: n.y } })
						  },
						  onResize    : function ( t, n, r, o, i ) {
							  e.setState({ position: i, size: { width: r.offsetWidth, height: r.offsetHeight } })
						  }
					  }, m.a.createElement("div", { className: "postit handle" }, !this.state.editing && m.a.createElement("div", { className: "text" }, (i.fetching
					                                                                                                                                      ? "Loading...."
					                                                                                                                                      : i.results && m.a.createElement(g, { weatherData: i.results })) || "Edit me !", m.a.createElement("button", {
						  onClick  : function ( t ) {
							  return e.setState({ editing: !0 })
						  },
						  className: "edit"
					  }, "🖋"), m.a.createElement("button", {
						  onClick     : function ( e ) {
							  return s(Object(E.e)(i._id))
						  }, className: "delete"
					  }, "🖾")) || m.a.createElement("div", { className: "editor" }, m.a.createElement("div", { className: "search" }, m.a.createElement("input", {
						  type       : "text",
						  onChange   : function ( t ) {
							  e.setState({ searching: t.target.value }), t.target.value.length > 2 && s(Object(E.g)(i, t.target.value))
						  },
						  value      : void 0 !== p.searching
						               ? p.searching
						               : i.location,
						  onMouseDown: function ( e ) {
							  return e.stopPropagation()
						  }
					  })), i.fetching
					       ? "Loading...."
					       : i.results && m.a.createElement(g, { weatherData: i.results }), m.a.createElement("button", {
						  disabled: i.fetching,
						  onClick : function ( t ) {
							  return e.setState({ editing: !1 })
						  }
					  }, "💾"))))
				  }
			  }]), t
		  }(m.a.Component)) || r;
		  !function () {
			  var e = n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/index.js").default;
			  if ( e ) {
				  var r = void 0 !== t ? t : exports;
				  if ( "function" != typeof r ) {
					  for ( var o in r ) if ( Object.prototype.hasOwnProperty.call(r, o) ) {
						  var i = void 0;
						  try {
							  i = r[o]
						  } catch ( e ) {
							  continue
						  }
						  e.register(i, o, "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\containers\\WeatherWidget.js")
					  }
				  }
				  else e.register(r, "module.exports", "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\containers\\WeatherWidget.js")
			  }
		  }();
		  n("./App/styles/index.scss");
		  var R, S = Object(O.b)(function ( e ) {
			  return { someData: e.someData, appState: e.appState }
		  })(R = function ( e ) {
			  function t() {
				  return i()(this, t), p()(this, l()(t).apply(this, arguments))
			  }
			
			  return h()(t, e), a()(t, [{
				  key: "render", value: function () {
					  var e = this.props,
					      t = e.someData,
					      n = void 0 === t ? { items: [] } : t,
					      r = e.appState,
					      o = e.dispatch;
					  return m.a.createElement(m.a.Fragment, null, m.a.createElement("h1", null, "Minimal drafty redux sample"), n.items.map(function ( e ) {
						  return m.a.createElement(N, {
							  key        : e._id, record: e, onSelect: function ( t ) {
								  return o(Object(T.c)(e._id))
							  }, selected: e._id == r.selectedPostItId
						  })
					  }), m.a.createElement("div", {
						  className: "newBtn button", onClick: function ( e ) {
							  return o(Object(E.d)())
						  }
					  }, "Add Post It"), m.a.createElement("div", {
						  className: "saveBtn button", onClick: function ( e ) {
							  return o(Object(T.b)())
						  }
					  }, "Save state"))
				  }
			  }]), t
		  }(m.a.Component)) || R;
		  !function () {
			  var e = n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/index.js").default;
			  if ( e ) {
				  var r = void 0 !== t ? t : exports;
				  if ( "function" != typeof r ) {
					  for ( var o in r ) if ( Object.prototype.hasOwnProperty.call(r, o) ) {
						  var i = void 0;
						  try {
							  i = r[o]
						  } catch ( e ) {
							  continue
						  }
						  e.register(i, o, "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\App.js")
					  }
				  }
				  else e.register(r, "module.exports", "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\parentProject\\App\\App.js")
			  }
		  }();
		  var v,
		      j = n("../parentProject/node_modules/react-dom/index.js"),
		      y = n.n(j),
		      P = n("../parentProject/node_modules/react-dom/server.browser.js"),
		      H = n("../wp4-react-redux-sass-hmr/node_modules/redux/es/redux.js"),
		      W = n("../wp4-react-redux-sass-hmr/node_modules/redux-devtools-extension/index.js"),
		      L = n("../wp4-react-redux-sass-hmr/node_modules/redux-thunk/es/index.js"),
		      D = {};
		  (v = n("../parentProject/App/reducers sync recursive ^\\.\\/[^\\\\\\/]+\\.js$")).keys().forEach(function ( e ) {
			  var t = e.substr(2);
			  D[t]  = D[t] || v(e)
		  }), (v = n("../wp4-react-redux-sass-hmr/App/reducers sync recursive ^\\.\\/[^\\\\\\/]+\\.js$")).keys().forEach(function ( e ) {
			  var t = e.substr(2);
			  D[t]  = D[t] || v(e)
		  });
		  var _ = D;
		  !function () {
			  var e = n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/index.js").default;
			  if ( e ) {
				  var r = void 0 !== t ? t : exports;
				  if ( "function" != typeof r ) {
					  for ( var o in r ) if ( Object.prototype.hasOwnProperty.call(r, o) ) {
						  var i = void 0;
						  try {
							  i = r[o]
						  } catch ( e ) {
							  continue
						  }
						  e.register(i, o, "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\wp4-react-redux-sass-hmr\\App\\MapOf.App_reducers___js.gen.js")
					  }
				  }
				  else e.register(r, "module.exports", "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\wp4-react-redux-sass-hmr\\App\\MapOf.App_reducers___js.gen.js")
			  }
		  }();
		  var C     = Object.keys(_).reduce(function ( e, t ) {
			  return Object.keys(_[t]).forEach(function ( n ) {
				  return e[n] = _[t][n]
			  }), e
		  }, {}), F = Object(H.combineReducers)(C);
		
		  function M( e ) {
			  return Object(H.createStore)(F, e, Object(W.composeWithDevTools)(Object(H.applyMiddleware)(L.a)))
		  }
		
		  !function () {
			  var e = n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/index.js").default;
			  if ( e ) {
				  var r = void 0 !== t ? t : exports;
				  if ( "function" != typeof r ) {
					  for ( var o in r ) if ( Object.prototype.hasOwnProperty.call(r, o) ) {
						  var i = void 0;
						  try {
							  i = r[o]
						  } catch ( e ) {
							  continue
						  }
						  e.register(i, o, "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\wp4-react-redux-sass-hmr\\App\\reducers.js")
					  }
				  }
				  else e.register(r, "module.exports", "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\wp4-react-redux-sass-hmr\\App\\reducers.js")
			  }
		  }(), function () {
			  var e = n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/index.js").default;
			  if ( e ) {
				  var r = void 0 !== t ? t : exports;
				  if ( "function" != typeof r ) {
					  for ( var o in r ) if ( Object.prototype.hasOwnProperty.call(r, o) ) {
						  var i = void 0;
						  try {
							  i = r[o]
						  } catch ( e ) {
							  continue
						  }
						  e.register(i, o, "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\wp4-react-redux-sass-hmr\\App\\configureStore.js")
					  }
				  }
				  else e.register(r, "module.exports", "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\wp4-react-redux-sass-hmr\\App\\configureStore.js")
			  }
		  }();
		  var k = {
			  someData: {
				  src  : "/api/hello",
				  items: [{
					  _id     : "rkUQHZrqM",
					  location: "paris",
					  size    : { width: 350, height: 200 },
					  position: { x: 321, y: 167 }
				  }, {
					  _id     : "r1bcuMrcM",
					  location: "rio",
					  size    : { width: 350, height: 200 },
					  position: { x: 260, y: 576 }
				  }]
			  },
			  appState: {
				  src             : "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
				  selectedPostItId: "rkUQHZrqM"
			  }
		  };
		  !function () {
			  var e = n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/index.js").default;
			  if ( e ) {
				  var r = void 0 !== t ? t : exports;
				  if ( "function" != typeof r ) {
					  for ( var o in r ) if ( Object.prototype.hasOwnProperty.call(r, o) ) {
						  var i = void 0;
						  try {
							  i = r[o]
						  } catch ( e ) {
							  continue
						  }
						  e.register(i, o, "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\childProject\\App\\initialState.js")
					  }
				  }
				  else e.register(r, "module.exports", "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\childProject\\App\\initialState.js")
			  }
		  }();
		  var G = n("../wp4-react-redux-sass-hmr/App/index.html.tpl"), U = {
			  renderTo     : function ( e ) {
				  function t( t ) {
					  return e.apply(this, arguments)
				  }
				
				  return t.toString = function () {
					  return e.toString()
				  }, t
			  }(function ( e ) {
				  var t = M(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), n = S;
				  y.a.render(m.a.createElement(O.a, { store: t }, m.a.createElement(n, null)), e)
			  }), renderSSR: function ( e, t ) {
				  var n, r, o = M(e.state || k), i = "";
				  try {
					  i = Object(P.renderToString)(m.a.createElement(O.a, { store: o }, m.a.createElement(S, null))), r = o.getState(), n = G.render({
						                                                                                                                                 app  : i,
						                                                                                                                                 state: JSON.stringify(r)
					                                                                                                                                 })
				  } catch ( e ) {
					  return t(e)
				  }
				  t(null, n)
			  }
		  };
		  "undefined" != typeof window && (window.App = U);
		  t.default = U;
		  !function () {
			  var e = n("../wp4-react-redux-sass-hmr/node_modules/react-hot-loader/index.js").default;
			  if ( e ) {
				  var r = void 0 !== t ? t : exports;
				  if ( "function" != typeof r ) {
					  for ( var o in r ) if ( Object.prototype.hasOwnProperty.call(r, o) ) {
						  var i = void 0;
						  try {
							  i = r[o]
						  } catch ( e ) {
							  continue
						  }
						  e.register(i, o, "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\wp4-react-redux-sass-hmr\\App\\index.js")
					  }
				  }
				  else e.register(r, "module.exports", "G:\\n8tz\\wpi\\webpack-inherit-sample\\simple-redux-inherit\\wp4-react-redux-sass-hmr\\App\\index.js")
			  }
		  }()
	  },
	  "../wp4-react-redux-sass-hmr/App/reducers sync recursive ^\\.\\/[^\\\\\\/]+\\.js$"                                                                                                                                               : function ( e, t ) {
		  function n( e ) {
			  var t = new Error("Cannot find module '" + e + "'");
			  throw t.code = "MODULE_NOT_FOUND", t
		  }
		
		  n.keys = function () {
			  return []
		  }, n.resolve = n, e.exports = n, n.id = "../wp4-react-redux-sass-hmr/App/reducers sync recursive ^\\.\\/[^\\\\\\/]+\\.js$"
	  },
	  "../wp4-react-redux-sass-hmr/node_modules/css-loader/index.js?!../wp4-react-redux-sass-hmr/node_modules/postcss-loader/src/index.js?!../wp4-react-redux-sass-hmr/node_modules/sass-loader/lib/loader.js?!./App/styles/index.scss": function ( e, t, n ) {
		  (e.exports = n("../wp4-react-redux-sass-hmr/node_modules/css-loader/lib/css-base.js")(!1)).push([e.i, "@charset \"UTF-8\";\n/*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : caipilabs@gmail.com\n */\n/*!\r\n * The MIT License (MIT)\r\n * Copyright (c) 2019. Wise Wild Web\r\n *\r\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\r\n *\r\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\r\n *\r\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n *\r\n *  @author : Nathanael Braun\r\n *  @contact : caipilabs@gmail.com\r\n */\n/*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : caipilabs@gmail.com\n */\n.newBtn {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  display: inline-block; }\n\n.saveBtn {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  display: inline-block; }\n\n#app {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.button {\n  background-color: #3bb3e0;\n  padding: 10px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  text-decoration: none;\n  color: #fff;\n  border: solid 1px #186f8f;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#2ca0ca), to(#3eb8e5));\n  background-image: -webkit-linear-gradient(top, #2ca0ca 0%, #3eb8e5 100%);\n  background-image: -o-linear-gradient(top, #2ca0ca 0%, #3eb8e5 100%);\n  background-image: linear-gradient(to bottom, #2ca0ca 0%, #3eb8e5 100%);\n  -webkit-box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;\n          box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;\n  border-radius: 5px; }\n  .button:active {\n    padding-bottom: 9px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 11px;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#3eb8e5), to(#2ca0ca));\n    background-image: -webkit-linear-gradient(top, #3eb8e5 0%, #2ca0ca 100%);\n    background-image: -o-linear-gradient(top, #3eb8e5 0%, #2ca0ca 100%);\n    background-image: linear-gradient(to bottom, #3eb8e5 0%, #2ca0ca 100%); }\n\n.postit {\n  line-height: 1;\n  text-align: center;\n  margin: -10px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0;\n  font-size: 22px;\n  display: inline-block;\n  border: 1px solid #E8E8E8;\n  border-radius: 10px;\n  background: white; }\n  .postit .text {\n    margin-top: 40px; }\n    .postit .text .edit {\n      position: absolute;\n      bottom: 5px;\n      left: 5px; }\n    .postit .text .delete {\n      position: absolute;\n      bottom: 5px;\n      right: 5px; }\n  .postit .editor {\n    position: absolute;\n    bottom: 30px;\n    right: 10px;\n    top: 30px;\n    left: 10px; }\n    .postit .editor textarea {\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 100%; }\n    .postit .editor button {\n      position: absolute;\n      bottom: -25px;\n      left: 0px;\n      width: 100%; }\n\n/*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : caipilabs@gmail.com\n */\n/*!\n * The MIT License (MIT)\n * Copyright (c) 2019. Wise Wild Web\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n *\n *  @author : Nathanael Braun\n *  @contact : caipilabs@gmail.com\n */\n.WeatherWidget {\n  line-height: 1;\n  text-align: center;\n  margin: -10px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0;\n  font-size: 22px;\n  display: inline-block;\n  border: 1px solid #E8E8E8;\n  border-radius: 10px;\n  background: white; }\n  .WeatherWidget .text {\n    margin-top: 40px; }\n    .WeatherWidget .text .edit {\n      position: absolute;\n      bottom: 5px;\n      left: 5px; }\n    .WeatherWidget .text .delete {\n      position: absolute;\n      bottom: 5px;\n      right: 5px; }\n  .WeatherWidget .editor {\n    position: absolute;\n    bottom: 30px;\n    right: 10px;\n    top: 30px;\n    left: 10px; }\n    .WeatherWidget .editor textarea {\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 100%; }\n    .WeatherWidget .editor button {\n      position: absolute;\n      bottom: -25px;\n      left: 0px;\n      width: 100%; }\n\n.postit {\n  border: 2px solid green;\n  padding: 5px; }\n\nh1:after {\n  content: '( overrided with webpack-inherit )';\n  font-size: 12px;\n  font-style: italic; }\n", ""])
	  },
	  "./App/styles/index.scss"                                                                                                                                                                                                        : function ( e, t, n ) {
		  var r = n("../wp4-react-redux-sass-hmr/node_modules/css-loader/index.js?!../wp4-react-redux-sass-hmr/node_modules/postcss-loader/src/index.js?!../wp4-react-redux-sass-hmr/node_modules/sass-loader/lib/loader.js?!./App/styles/index.scss");
		  "string" == typeof r && (r = [[e.i, r, ""]]);
		  var o = { hmr: !0, transform: void 0, insertInto: void 0 };
		  n("../wp4-react-redux-sass-hmr/node_modules/style-loader/lib/addStyles.js")(r, o);
		  r.locals && (e.exports = r.locals)
	  }
  });