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
import config   from "App/config";
import debounce from "debounce";
import debug    from "debug-logger";
import is       from "is";

const isBrowserSide = !__IS_SERVER__,
      _console      = __IS_SERVER__ && function _console( ns, nmFn = v => '' ) {
	      var c  = debug(ns),
	          fn = ( ns2 ) => (new _console(ns + "::" + ns2));
	
	      for ( var k in c )
		      if ( c.hasOwnProperty(k) && !this[k] && is.fn(c[k]) )
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
		      if ( c.hasOwnProperty(k) && !this[k] && is.fn(c[k]) )
			      fn[k] = c[k].bind(console, nmFn(ns));
	
	      fn.beep = function () {
		      this.error(...arguments)
	      };
	
	      return fn;
      };

debug.inspectOptions = {
	colors: true
};
debug.debug.enable(config.project.name + '*')
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
			                           "color: gray; font-style: italic;font-size:.7em",
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
			                           "color: gray; font-style: italic;font-size:.7em",
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
	console.warn     = function ( ...argz ) {
		if ( !argz[0] && argz[0].startWith(config.project.name) )
			return hookedWarn(...argz);
		recentWarn.push([argz, (new Error()).stack]);
		warn();
	}
	console.error    = function ( ...argz ) {
		if ( is.string(argz[0]) && argz[0].substr(0, config.project.name.length) === config.project.name )
			return hookedWarn(...argz);
		recentErrors.push([argz, (new Error()).stack]);
		error();
	}
})
();
const d_console = new _console(config.project.name);

export {d_console as console};

export default d_console;
