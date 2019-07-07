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

var cfg           = require('App/.wpiConfig.json')
	,
	debug         = require('debug-logger')
	,
	isFunction    = require('is').function
	,
	isBrowserSide = (new Function("try {return this===window;}catch(e){ return false;}"))(),
	debounce      = require('debounce'),
	_console      = !isBrowserSide && function _console( ns, nmFn = v => '' ) {
		var c  = debug(ns),
		    fn = ( ns2 ) => (new _console(ns + "::" + ns2));
		
		for ( var k in c )
			if ( c.hasOwnProperty(k) && !this[k] && isFunction(c[k]) )
				fn[k] = c[k].bind(c, nmFn(ns));
		
		fn.beep = function () {
			process.stdout.write('\x07');// do a beep
			this.error(...arguments)
		};
		
		return fn;
	} || function _console( ns, nmFn = v => '' ) {
		var c  = console,
		    fn = ( ns2 ) => (new _console(ns + "::" + ns2));
		
		for ( var k in c )
			if ( c.hasOwnProperty(k) && !this[k] && isFunction(c[k]) )
				fn[k] = c[k].bind(console, nmFn(ns));
		
		fn.beep = function () {
			this.error(...arguments)
		};
		
		return fn;
	};

debug.inspectOptions = {
	colors: true
};
debug.debug.enable(cfg.project.name + '*')
console.watch = console.watch || function ( oObj, sProp ) {
	let sPrivateProp   = "$_" + sProp + "_$"; // to minimize the name clash risk
	oObj[sPrivateProp] = oObj[sProp];
	
	// overwrite with accessor
	Object.defineProperty(oObj, sProp, {
		get: function () {
			return oObj[sPrivateProp];
		},
		
		set: function ( value ) {
			console.log("setting " + sProp + " to " + value);
			debugger; // sets breakpoint
			oObj[sPrivateProp] = value;
		}
	});
}
// well group the react/vendors warns as they abuse of it each minors versions
isBrowserSide &&
!window.consoleHookDone && (function () {
	window.consoleHookDone = true;
	
	function truncate( string, ln ) {
		if ( string.length > ln )
			return string.substring(0, ln) + '...';
		else
			return string;
	};
	let hookedWarn   = console.warn,
	    hookedError  = console.error,
	    recentWarn   = [],
	    recentErrors = [],
	    warn         = debounce(
		    function () {
			    console.groupCollapsed(" %d %cvendors warns happen%c (%s)", recentWarn.length,
			                           "color: orange; text-decoration: underline",
			                           "color: gray; font-style: italic;font-size:.8em",
			                           truncate(recentWarn.map(v => v.join(', ')).join('\t'), 50));
			    recentWarn.forEach(( [argz, trace] ) => {
				    console.groupCollapsed(...argz);
				    hookedWarn.call(console, trace);
				    console.groupEnd();
			    });
			    recentWarn = [];
			    console.groupEnd();
		    },
		    2000
	    ),
	    error        = debounce(
		    function () {
			    console.groupCollapsed(" %d %cvendors errors happen%c (%s)", recentErrors.length,
			                           "color: red; text-decoration: underline",
			                           "color: gray; font-style: italic;font-size:.8em",
			                           truncate(recentErrors.map(v => v.join(', ')).join('\t'), 50));
			    // recentErrors.forEach(argz => hookedWarn.apply(console, argz));
			    recentErrors.forEach(( [argz, trace] ) => {
				    console.groupCollapsed(...argz);
				    hookedError.call(console, trace);
				    console.groupEnd();
			    });
			    recentErrors = [];
			    console.groupEnd();
		    },
		    2000
	    );
	
	console.warn  = function ( ...argz ) {
		if ( !argz[0] && argz[0].startWith(cfg.project.name) )
			return hookedWarn(...argz);
		recentWarn.push([argz, (new Error()).stack]);
		warn();
	}
	console.trace = function ( ...argz ) {
		//if ( /^Caipi/.test(argz[0]) )
		//    return hookedWarn(...argz);
		//recentWarn.push([argz, (new Error()).stack]);
		//warn();
	}
	console.error = function ( ...argz ) {
		if ( argz[0].startWith(cfg.project.name) )
			return hookedWarn(...argz);
		recentErrors.push([argz, (new Error()).stack]);
		error();
	}
})
();
const d_console = new _console(cfg.project.name);

export {d_console as console};

export default d_console;
