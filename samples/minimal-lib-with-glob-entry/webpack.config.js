/*
 * The MIT License (MIT)
 * Copyright (c) 2019. Wise Wild Web
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *  @author : Nathanael Braun
 *  @contact : n8tz.js@gmail.com
 */

/**
 * @file webpack.config.js
 *
 * Demonstrates building a library bundle where all source files are
 * auto-discovered via the recursive glob pattern "App/(**\/*).js".
 *
 * The `externals: true` option tells layer-pack to mark all imports
 * outside the App/ directory as external, so only App/ code is bundled.
 * The output uses `libraryTarget: "commonjs-module"` to produce a
 * consumable CommonJS library.
 */
const lPack         = require('layer-pack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Load layer-pack config inline. The `externals: true` flag causes
 * layer-pack to generate webpack externals for all non-App/ imports,
 * keeping the library bundle lean.
 */
lPack.loadConfig(
	{
		"default": {
			"rootFolder": "App",
			externals   : true // directly use lpack to exclude code outside of ./App/**/*.*
		}
	}
)

/**
 * Returns a function to exclude node_modules from Babel transpilation.
 */
const isExcluded = lPack.isFileExcluded("default");

module.exports = [
	{
		mode: "development",

		/**
		 * Recursive glob entry: "App/(**\/*).js" discovers all .js files
		 * under App/ (including subdirectories like App/dir/stuff.js).
		 * layer-pack generates a virtual module that re-exports everything,
		 * producing a single library entry point.
		 */
		entry: {
			"myLib": ["App/(**/*).js"]
		},

		/**
		 * Output as a CommonJS module so the bundle can be required by
		 * other Node.js code or bundlers.
		 */
		output: {
			path         : __dirname + "/dist",
			filename     : "[name].js",
			publicPath   : "/",
			libraryTarget: "commonjs-module"
		},

		// add sourcemap in a dedicated file (.map)
		devtool: 'source-map',

		// required files resolving options
		resolve: {
			extensions: [
				".",
				".js",
				".jsx",
				".json",
				".scss",
				".css",
			],
			alias     : {},
		},

		// Global build plugin & option
		plugins: [
			lPack.plugin("default"),
		],


		// the requirable files and what manage theirs parsing
		module: {
			rules: [
				{
					test   : /\.jsx?$/,
					exclude: isExcluded,
					use    : [
						{
							loader : 'babel-loader',
							options: {
								cacheDirectory: true, //important for performance
								presets       : [
									['@babel/preset-env'],
								],
								plugins       : []
							}
						},
					]
				},
			],
		},
	},
]
