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

var wpInherit = require('webpack-inherit');
var fs        = require("fs");
var webpack   = require("webpack");
var path      = require("path");

var autoprefixer = require('autoprefixer');

module.exports = [
	{
		mode: "development",
		
		// The jsx App entry point
		entry    : {
			App: [
				'webpack/hot/dev-server',
				'App'
			]
		},
		devServer: {
			index             : '', //needed to enable root proxying
			contentBase       : wpInherit.getHeadRoot() + "/dist/",
			historyApiFallback: true,
			hot               : true,
			inline            : true,
			publicPath        : wpInherit.getHeadRoot() + "/dist/",
			
			host : 'localhost', // Defaults to `localhost`
			port : 9001, // Defaults to 8080
			proxy: {
				'/': {
					target: 'http://localhost:9501',
					secure: false
				}
			}
		},
		// The resulting build
		output   : {
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
				".scss",
				".css",
			],
			alias     : {},
		},
		
		// Global build plugin & option
		plugins: (
			[
				wpInherit.plugin(),
				new webpack.BannerPlugin(fs.readFileSync("./LICENCE.HEAD.MD").toString()),
				new webpack.NamedModulesPlugin(),
			]
		),
		
		
		// the requirable files and what manage theirs parsing
		module: {
			rules: [
				{
					test   : /\.jsx?$/,
					exclude: wpInherit.isFileExcluded(),
					use    : [
						require.resolve('react-hot-loader/webpack')
					]
				},
				{
					test   : /\.jsx?$/,
					exclude: wpInherit.isFileExcluded(),
					use    : [
						{
							loader : 'babel-loader',
							options: {
								cacheDirectory: true, //important for performance
								presets       : [
									'@babel/preset-env',
									'@babel/preset-react',
								].map(require.resolve),
								plugins       : [
									[require.resolve("@babel/plugin-proposal-decorators"), { "legacy": true }],
									[require.resolve('@babel/plugin-proposal-class-properties'), {
										"loose": true
									}],
									[require.resolve("@babel/plugin-transform-runtime"), {}],
									[require.resolve("react-hot-loader/babel"), {}],
								]
							}
						},
					]
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
								importer  : wpInherit.plugin().sassImporter,
								sourceMaps: true
							}
						}
					]
				},
				{
					test: /\.tpl$/,
					use : { loader: "dot-tpl-loader?append=true" }
				},
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
]