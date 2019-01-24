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
 *  @contact : caipilabs@gmail.com
 */

var fs      = require("fs");
var webpack = require("webpack");
var path    = require("path");

var wpInherit    = require('webpack-inherit');
var autoprefixer = require('autoprefixer');
var production   = process.argv.indexOf("--production") > -1
	|| process.argv.indexOf("-p") > -1;


module.exports = [
	{
		// The jsx App entry point
		entry: {
			App: 'App'
		},
		
		// The resulting build
		output: {
			path      : wpInherit.getHeadRoot() + "/dist/",
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
				".json",
			],
			alias     : {
			},
		},
		
		// Global build plugin & option
		plugins: (
			[
				wpInherit.plugin(),
				new webpack.BannerPlugin(fs.readFileSync("./LICENCE.HEAD.MD").toString()),
				
				new webpack.DefinePlugin({
					                         __PROD__: production
				                         }),
				production ? new webpack.optimize.UglifyJsPlugin(
					{
						compress: {
							screw_ie8   : true, // React doesn't support IE8
							warnings    : false,
							drop_console: true
						},
						mangle  : {
							screw_ie8: true
						},
						output  : {
							comments : false,
							screw_ie8: true
						}
					}) : p => false,
			
			]
		),
		
		// the requirable files and what manage theirs parsing
		module: {
			loaders: [
				{
					test   : /\.js$/,
					exclude: wpInherit.isFileExcluded(),
					loader : 'babel-loader',
					query  : {
						cacheDirectory: true, //important for performance
						presets       : [
							'babel-preset-react',
							'babel-preset-es2015',
							'babel-preset-stage-0'
						].map(require.resolve),
						plugins       : [
							"babel-plugin-add-module-exports",
							'babel-plugin-transform-decorators-legacy'
						].map(require.resolve)
					}
				},
				{
					test   : /\.json$/,
					loaders: [
						"json-loader",
					],
				},
				{
					test: /\.(scss|css)$/,
					use : [
						"style-loader",
						
						{ loader: 'css-loader', options: { importLoaders: 1 } },
						{
							loader : 'postcss-loader',
							options: {
								plugins: function () {
									return [
										autoprefixer({
											             browsers: [
												             '>1%',
												             'last 4 versions',
												             'Firefox ESR',
												             'not ie < 9', // React doesn't support IE8 anyway
											             ]
										             }),
									];
								}
							}
						},
						{
							loader : "sass-loader",
							options: {
								importer  : wpInherit.plugin().sassImporter(),
								sourceMaps: true
							}
						}
					]
				},
				{ test: /\.tpl$/, loader: "dot-tpl-loader?append=true" },
				{
					test: /\.(png|jpg|gif|svg)(\?.*$|$)$/,
					use : 'file-loader?limit=8192&name=assets/[hash].[ext]'
				},
				{
					test: /\.woff2?(\?.*$|$)$/,
					use : "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff&name=assets/[hash].[ext]"
				},
				{ test: /\.ttf(\?.*$|$)$/, use: "file-loader?name=assets/[hash].[ext]" },
				{ test: /\.eot(\?.*$|$)$/, use: "file-loader?name=assets/[hash].[ext]" },
			],
		},
	},
	{
		entry        : {
			App: 'App'
		},
		target       : 'node',
		output       : {
			path         : wpInherit.getHeadRoot() + "/dist/",
			filename     : "[name].server.js",
			publicPath   : "/",
			libraryTarget: "commonjs2"
		},
		devtool      : 'source-map',
		externals    : ["superagent"],
		resolveLoader: {
			modules: wpInherit.getConfig().allModulePath
		},
		
		resolve: {
			symlinks  : false,
			extensions: [
				".",
				".js",
				".json",
			],
			modules   : wpInherit.getConfig().allModulePath,
			alias     : {
				'inherits'  : 'inherits/inherits_browser.js',
				'superagent': 'superagent/lib/node',
				'emitter'   : 'component-emitter',
			},
		},
		
		module : {
			loaders: [
				{
					test   : /\.js$/,
					exclude: wpInherit.isFileExcluded(),
					loader : 'babel-loader',
					query  : {
						cacheDirectory: true, //important for performance
						presets       : [
							'babel-preset-react',
							'babel-preset-es2015',
							'babel-preset-stage-0'
						].map(require.resolve),
						plugins       : [
							"babel-plugin-add-module-exports",
							'babel-plugin-transform-decorators-legacy'
						].map(require.resolve)
					}
				},
				{
					test   : /\.json$/,
					loaders: [
						"json-loader",
					],
				},
				{ test: /\.tpl$/, loader: "dot-tpl-loader?append=true" },
				{
					test  : /\.(scss|css|less|woff2|ttf|eot)(\?.*$|$)$/,
					loader: 'null-loader'
				},
			],
		},
		plugins: (
			[
				wpInherit.plugin(),
				new webpack.BannerPlugin(fs.readFileSync("./LICENCE.HEAD.MD").toString()),
				
				new webpack.DefinePlugin(
					{
						__PROD__              : production,
						"typeof window"       : '"undefined"',
						'window'              : false,
						'window.document'     : false,
						'window.dispatchEvent': false
					}),
				production ? new webpack.optimize.UglifyJsPlugin(
					{
						compress: {
							screw_ie8   : true, // React doesn't support IE8
							warnings    : false,
							drop_console: true
						},
						mangle  : {
							screw_ie8: true
						},
						output  : {
							comments : false,
							screw_ie8: true
						}
					}) : p => false,
			
			]
		),
	}
]