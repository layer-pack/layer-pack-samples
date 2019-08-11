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

const path       = require('path'),
      packageCfg = JSON.parse(require('fs').readFileSync(__dirname + '/../package.json')),
      exec       = require('child_process').exec,
      kill       = require('fkill');

let appLib,
    projectDir = path.normalize(__dirname + "/../");

describe(packageCfg.name + "@" + packageCfg.version + " : ", () => {
	
	describe('Build', function () {
		it('it build correctly ', function ( done ) {
			this.timeout(Infinity);
			
			exec('npm run build',
			     {
				     cwd: projectDir,
			     },
			     function ( code, outLog ) {
				     code && console.warn('build fail : ' + code + '\n\n');
				     done(code);
			     }
			);
			
			
		});
		it('it import correctly ', function ( done ) {
			this.timeout(Infinity);
			appLib = require('../dist/myLib');
			if ( !appLib )
				return done(new Error("Can't require"));
			
			done()
		});
	});
	
	
	describe('Use', function () {
		
		it('should have all the ep', function ( done ) {
			if ( appLib.main !== "mainLibEp"
				|| appLib.secondary !== "secondaryLibEp"
				|| appLib.utils !== "utils"
				|| appLib.dir.stuff !== "stuffEp"
			)
				return done(new Error("Missing ep ! "));
			
			done()
		});
	});
	
});