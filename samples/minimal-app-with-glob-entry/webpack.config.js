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
 * Demonstrates layer-pack's inline config mode (no .layers.json file).
 * lPack.loadConfig() accepts a config object directly, setting "App" as the
 * root folder so that imports like "App/..." resolve to ./App/.
 *
 * The glob entry pattern "App/entryPoints/index.*.js" tells layer-pack to
 * discover all matching files and bundle them as a single entry point named
 * "myApp". Each index.ep*.js file is auto-included without manual listing.
 */
const lPack         = require('layer-pack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Load layer-pack config inline (without a .layers.json file).
 * The "default" profile declares "App" as the rootFolder, which registers
 * the "App" namespace alias pointing to the local ./App directory.
 */
lPack.loadConfig(
	{
		"default": {
			"rootFolder": "App"
		}
	}
)

/**
 * Returns a function that tests whether a file path should be excluded
 * from Babel transpilation (e.g., node_modules). Used in module.rules.
 */
const isExcluded = lPack.isFileExcluded("default");

module.exports = [
	{
		mode: "development",

		/**
		 * Glob entry: "App/entryPoints/index.*.js" matches all files like
		 * index.ep1.js, index.ep2.js, etc. layer-pack generates a virtual
		 * module that imports all matched files into one entry point.
		 */
		entry: {
			"myApp": "App/entryPoints/index.*.js"
		},

		// The resulting build
		output: {
			path      : __dirname + "/dist",
			filename  : "[name].js",
			publicPath: "/",
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
			new HtmlWebpackPlugin({
				                      template: './App/index.html',
				                      inject  : false
			                      }),
			/**
			 * lPack.plugin("default") returns the layer-pack webpack plugin
			 * for the "default" profile. It hooks into webpack's resolver to
			 * handle namespace aliases, glob imports, and $super resolution.
			 */
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
