/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */

const wpInherit            = require('webpack-inherit'),
      fs                   = require("fs"),
      webpack              = require("webpack"),
      path                 = require("path"),
      HtmlWebpackPlugin    = require('html-webpack-plugin'),
      autoprefixer         = require('autoprefixer'),
      wpiCfg               = wpInherit.getConfig(),
      isExcluded           = wpInherit.isFileExcluded();
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
	{
		mode: wpiCfg.vars.production ? "production" : "development",
		
		// The jsx App entry point
		entry    : {
			[wpiCfg.vars.rootAlias]: [
				...(wpiCfg.vars.devServer && ['webpack/hot/dev-server'] || []),
				
				wpiCfg.vars.entryPoint ?
				wpiCfg.vars.entryPoint
				                       :
				wpiCfg.vars.rootAlias  // default to 'App'
			]
		},
		devServer: wpiCfg.vars.devServer && {
			//index             : '', //needed to enable root proxying
			contentBase       : wpInherit.getHeadRoot() + "/" + (wpiCfg.vars.targetDir || 'dist'),
			historyApiFallback: true,
			hot               : true,
			inline            : true,
			publicPath        : wpInherit.getHeadRoot() + "/" + (wpiCfg.vars.targetDir || 'dist'),
			
			host: 'localhost', // Defaults to `localhost`
			port: 8080, // Defaults to 8080
		} || undefined,
		
		// The resulting build
		output: {
			path      : wpInherit.getHeadRoot() + "/" + (wpiCfg.vars.targetDir || 'dist'),
			filename  : "[name].js",
			//publicPath: "/",
		},
		
		// add sourcemap in a dedicated file (.map)
		devtool: !wpiCfg.vars.production && 'source-map',
		
		// required files resolving options
		resolve: {
			extensions: [
				".",
				".js",
				".json",
				".scss",
				".css",
			],
			alias     : wpiCfg.vars.devServer && {
				'react-dom': '@hot-loader/react-dom'
			},
		},
		
		// Global build plugin & option
		plugins: (
			[
				wpInherit.plugin(),
				
				...(wpiCfg.vars.extractCss && [
					new MiniCssExtractPlugin({
						                         // Options similar to the same options in webpackOptions.output
						                         // both options are optional
						                         filename: '[name].css',
						                         //chunkFilename: '[id].css'
					                         })
				] || []),
				...(fs.existsSync("./LICENCE.HEAD.MD") && [
						new webpack.BannerPlugin(fs.readFileSync("./LICENCE.HEAD.MD").toString())
					] || []
				),
				new webpack.NamedModulesPlugin(),
				
				...((wpiCfg.vars.indexTpl || wpiCfg.vars.HtmlWebpackPlugin) && [
						new HtmlWebpackPlugin({
							                      template: wpiCfg.vars.indexTpl || (wpiCfg.vars.rootAlias + '/index.html.tpl'),
							                      ...wpiCfg.vars.HtmlWebpackPlugin
						                      })
					] || []
				),
			]
		),
		
		
		// the requirable files and what manage theirs parsing
		module: {
			rules: [
				...(wpiCfg.vars.devServer && [
					{
						test   : /\.jsx?$/,
						exclude: isExcluded,
						use    : [
							'react-hot-loader/webpack'
						]
					}
				] || []),
				{
					test   : /\.jsx?$/,
					exclude: wpiCfg.vars.babelInclude
					         ?
					         (
						         includeRE => ({ test: path => (isExcluded.test(path) && !includeRE.test(path)) })
					         )(new RegExp(wpiCfg.vars.babelInclude))
					         :
					         isExcluded,
					use    : [
						{
							loader : 'babel-loader',
							options: {
								cacheDirectory: true, //important for performance
								presets       : [
									['@babel/preset-env',
										{
											...(wpiCfg.vars.babelPreset || {})
										}],
									'@babel/preset-react'
								],
								plugins       : [
									["@babel/plugin-proposal-decorators", { "legacy": true }],
									['@babel/plugin-proposal-class-properties', {
										"loose": true
									}],
									["@babel/plugin-transform-runtime", {}],
									...(!wpiCfg.vars.devServer && [[require.resolve("react-hot-loader/babel"), {}]] || []),
								]
							}
						},
					]
				},
				{
					test: /\.(scss|css)$/,
					use : wpiCfg.vars.extractCss ?
					      [
						      {
							      loader : MiniCssExtractPlugin.loader,
							      options: {
								      // you can specify a publicPath here
								      // by default it uses publicPath in webpackOptions.output
								      publicPath: '../',
								      hmr       : !wpiCfg.vars.production,
							      },
						      },
						      { loader: 'css-loader', options: { importLoaders: 1 } },
						      {
							      loader : 'postcss-loader',
							      options: {
								      plugins: function () {
									      return [
										      autoprefixer({
											                   //overrideBrowserslist: [
											                   //    '>1%',
											                   //    'last 4 versions',
											                   //    'Firefox ESR',
											                   //    'not ie < 9', // React doesn't support IE8
											                   //                  // anyway
											                   //]
										                   }),
									      ];
								      }
							      }
						      },
						      {
							      loader : "sass-loader",
							      options: {
								      minimize  : true,
								      importer  : wpInherit.plugin().sassImporter(),
								      sourceMaps: true,
							      }
						      }
					      ]
					                             :
					      [
						      "style-loader",
						      { loader: 'css-loader', options: { importLoaders: 1 } },
						      {
							      loader : 'postcss-loader',
							      options: {
								      plugins: function () {
									      return [
										      autoprefixer({
											                   //overrideBrowserslist: [
											                   //    '>1%',
											                   //    'last 4 versions',
											                   //    'Firefox ESR',
											                   //    'not ie < 9', // React doesn't support IE8 anyway
											                   //]
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
				{
					test: /\.(png|jpg|gif|svg)(\?.*$|$)$/,
					use :
						'file-loader?limit=8192&name=assets/[hash].[ext]'
				}
				,
				{
					test: /\.woff2?(\?.*$|$)$/,
					use :
						"url-loader?prefix=font/&limit=5000&mimetype=application/font-woff&name=assets/[hash].[ext]"
				}
				,
				{
					test: /\.ttf(\?.*$|$)$/, use:
						"file-loader?name=assets/[hash].[ext]"
				}
				,
				{
					test: /\.eot(\?.*$|$)$/, use:
						"file-loader?name=assets/[hash].[ext]"
				}
				,
				{
					test: /\.html$/, use:
						"file-loader?name=[name].[ext]"
				}
				,
				{
					test: /\.tpl$/, loader:
						"dot-tpl-loader?append=true"
				}
				,
				
				{
					test: /\.otf(\?.*$|$)$/, use:
						"file-loader?name=assets/[hash].[ext]"
				}
				,
				{
					test  : /\.json?$/,
					loader:
						'strip-json-comments-loader'
				}
			],
		},
	},
]