/*
 * Copyright (c) 2020.  Ernst & Young
 *  @author : Nathanael.Braun@fr.ey.com
 */
const TerserJSPlugin          = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const lPack                   = require('layer-pack');
const fs                      = require("fs");
const webpack                 = require("webpack");
const path                    = require("path");
const waitOn                  = require("wait-on");
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const BundleAnalyzerPlugin    = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const autoprefixer            = require('autoprefixer');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BabelEnginePlugin       = require('babel-engine-plugin');

const lpackCfg      = lPack.getConfig(),
      isExcluded    = lPack.isFileExcluded(),
      devServerPort = process.env.DEV_SERVER_PORT || 8080,
      proxyTo       = process.env.API_PORT || 9701;

module.exports = [
	{
		mode        : lpackCfg.vars.production ? "production" : "development",
		target      : "web",
		// The jsx App entry point
		entry       : {
			[lpackCfg.vars.rootAlias]: [
				...(lpackCfg.vars.devServer && ['webpack/hot/dev-server'] || []),
				
				lpackCfg.vars.entryPoint ?
				lpackCfg.vars.entryPoint
				                         :
				lpackCfg.vars.rootAlias + "/index.client" // default to 'App'
			]
		},
		devServer   : lpackCfg.vars.devServer && {
			//index             : '', //needed to enable root proxying
			//contentBase       : lPack.getHeadRoot() + "/" + (lpackCfg.vars.targetDir || 'dist'),
			hot               : true,
			//inline            : true,
			//publicPath        : lPack.getHeadRoot() + "/" + (lpackCfg.vars.targetDir || 'dist'),
			//disableHostCheck  : true,
			host              : '127.0.0.1', // Defaults to `localhost`
			port              : devServerPort, // Defaults to 8080
			historyApiFallback: {
				disableDotRule: true,
			},
			proxy             : [
				{
					context         : ['/**', '!/ws/**'],
					disableHostCheck: true,
					target          : 'http://127.0.0.1:' + proxyTo,
					ws              : true,
					secure          : false,                         // proxy websockets,
					
					onError: ( err, req, res ) => {
						console.log('wait api... ', req.headers && req.headers.referer);
						if ( res.redirect )
							setTimeout(
								tm => res.redirect(req.headers.referer),
								3000
							)
						else {
							console.log('wait socket api... ', req.originUrl);
							//setTimeout(
							//	tm => {
							//		res.socket.destroy();
							//	}, 1000)
						}
					}
				},
				//{
				//	context         : ['/**', '!/sockjs-node/**'],
				//	target          : 'http://127.0.0.1:9090/wait',
				//	disableHostCheck: true,
				//	ws              : true,
				//	secure          : false                         // proxy websockets
				//}
			]
		} || undefined,
		watchOptions: {
			aggregateTimeout: 500,
			poll            : 2000
		},
		// The resulting build
		output      : {
			path      : lPack.getHeadRoot() + "/" + (lpackCfg.vars.targetDir || 'dist'),
			filename  : "[name].js",
			publicPath: "/",
		},
		optimization: {
			minimizer  : lpackCfg.vars.production && [
				new TerserJSPlugin(lpackCfg.vars.terserOptions || {}),
				new OptimizeCSSAssetsPlugin({
					                            //assetNameRegExp          : /\.optimize\.css$/g,
					                            cssProcessor             : require('cssnano'),
					                            cssProcessorPluginOptions: {
						                            preset: ['default', { discardComments: { removeAll: true } }],
					                            },
					                            canPrint                 : true
				                            })] || [],
			splitChunks: {
				cacheGroups: {
					default: false,
					vendors: {
						// sync + async chunks
						chunks  : 'all',
						filename: lpackCfg.vars.rootAlias + ".vendors.js",
						test    : ( f ) => {
							return f.resource && lPack.isFileExcluded().test(f.resource)
						},
					},
				}
			}
		},
		
		// add sourcemap in a dedicated file (.map)
		devtool: !lpackCfg.vars.production && 'source-map',
		
		// required files resolving options
		resolve: {
			mainFields: ['browser', 'main', 'module'],
			extensions: [
				".",
				".js",
				".jsx",
				".ts",
				".tsx",
				".json",
				".scss",
				".css", '.gql', '.graphql',
			],
			alias     : lpackCfg.vars.devServer && {
				'react-dom': '@hot-loader/react-dom'
			} || undefined,
		},
		
		// Global build widget & option
		plugins: (
			[
				lPack.plugin(),
				...(lpackCfg.vars.extractCss && [
					new MiniCssExtractPlugin({
						                         // Options similar to the same options in webpackOptions.output
						                         // both options are optional
						                         filename: '[name].css',
						                         //chunkFilename: '[id].css'
					                         })
				] || []),
				new webpack.ContextReplacementPlugin(/moment[\/\\](lang|locale)$/, /^\.\/(fr|en|us)$/),
				
				//new BabelEnginePlugin({
				//	                      presets: ['env']
				//                      }),
				//new HardSourceWebpackWidget(),
				...(fs.existsSync("./LICENCE.HEAD.MD") && [
						new webpack.BannerPlugin(fs.readFileSync("./LICENCE.HEAD.MD").toString())
					] || []
				),
				
				...((lpackCfg.vars.indexTpl || lpackCfg.vars.HtmlWebpackPlugin) && [
						new HtmlWebpackPlugin({
							                      template: lpackCfg.vars.indexTpl || (lpackCfg.vars.rootAlias + '/index.html'),
							                      ...lpackCfg.vars.HtmlWebpackPlugin
						                      })
					] || []
				),
				
				// Add global variables
				new webpack.DefinePlugin({
					                         __IS_SERVER__: false,
				                         }),
				...(lpackCfg.vars.production && [
					new webpack.DefinePlugin({
						                         'process.env': {
							                         'NODE_ENV': JSON.stringify('production')
						                         }
					                         }),
					new BundleAnalyzerPlugin({
						                         analyzerMode  : 'static',
						                         reportFilename: './' + lpackCfg.vars.rootAlias + '.stats.html',
						                         openAnalyzer  : false,
						                         ...lpackCfg.vars.BundleAnalyzerPlugin
					                         })
				
				] || [])
			]
		),
		
		
		// the requirable files and what manage theirs parsing
		module: {
			rules: [
				...(lpackCfg.vars.devServer && [
					//{
					//test: /\.(j|t)sx?$/i, use: 'source-map-loader', exclude: /react-hot-loader/
					//},
					{
						test   : /\.(j|t)sx?$/i,
						exclude: isExcluded,
						use    : [
							'react-hot-loader/webpack'
						]
					}
				] || []),
				{
					test   : /\.(j|t)sx?$/i,
					exclude: lpackCfg.vars.babelInclude
					         ?
					         (
						         includeRE => ({ test: path => (isExcluded.test(path) && !includeRE.test(path)) })
					         )(new RegExp(lpackCfg.vars.babelInclude))
					         :
					         isExcluded,
					use    : [
						{
							loader : 'babel-loader',
							options: {
								cacheDirectory: false,
								presets       : [
									//[
									//	'@babel/preset-env',
									//	{
									//		//"modules": false,
									//		//"targets": {
									//		//	"browsers": "> 0.25%, not dead, safari >= 6, ios >= 6, chrome >=
									// 52, ie >= 11" //}, }],
									"@babel/react"
								],
								plugins       : [
									
									["@babel/plugin-proposal-decorators", { "legacy": true }],
									["@babel/plugin-transform-runtime", {}],
									["@babel/plugin-proposal-optional-chaining", {}],
									["@babel/proposal-class-properties", { loose: true }],
									"@babel/proposal-object-rest-spread",
									"@babel/plugin-proposal-optional-catch-binding",
									"@babel/plugin-syntax-dynamic-import",
									"react-hot-loader/babel",
								]
							}
						},
					]
				},
				{
					test: /\.(scss)$/,
					use : lpackCfg.vars.extractCss ?
					      [
						      {
							      loader : MiniCssExtractPlugin.loader,
							      options: {
								      // you can specify a publicPath here
								      // by default it uses publicPath in webpackOptions.output
								      //publicPath: '/',
								      //hmr: !lpackCfg.vars.production,
							      },
						      },
						      { loader: 'css-loader', options: { importLoaders: 1 } },
						      {
							      loader : 'postcss-loader',
							      options: {
								      postcssOptions: {
									      plugins: [[
										      autoprefixer({
											                   overrideBrowserslist: [
												                   '>1%',
												                   'last 4 versions',
												                   'Firefox ESR',
												                   'not ie < 9', // React doesn't support IE8
											                                     // anyway
											                   ]
										                   }),
									      ]]
								      }
							      }
						      },
						      {
							      loader : "sass-loader",
							      options: {
								      sassOptions: {
									      minimize: true,
									      importer: lPack.plugin().sassImporter(),
								      }
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
								      postcssOptions: {
									      plugins: [[
										      autoprefixer({
											                   overrideBrowserslist: [
												                   '>1%',
												                   'last 4 versions',
												                   'Firefox ESR',
												                   'not ie < 9', // React doesn't support IE8
											                                     // anyway
											                   ]
										                   }),
									      ]]
								      }
							      }
						      },
						      {
							      loader : "sass-loader",
							      options: {
								      sassOptions: {
									      importer  : lPack.plugin().sassImporter(),
									      sourceMaps: true,
								      }
							      }
						      }
					      ]
				},
				{
					test: /\.(css)$/,
					use : lpackCfg.vars.extractCss ?
					      [
						      {
							      loader : MiniCssExtractPlugin.loader,
							      options: {
								      // you can specify a publicPath here
								      // by default it uses publicPath in webpackOptions.output
								      //publicPath: '/',
								      //hmr: !lpackCfg.vars.production,
							      },
						      },
						      { loader: 'css-loader', options: { importLoaders: 1 } },
					      ]
					                               :
					      [
						      "style-loader",
						      { loader: 'css-loader', options: { importLoaders: 1 } },
					      ]
				},
				{ test: /\.graphql?$/, use: 'graphql-tag/loader' },
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
					test: /\.otf(\?.*$|$)$/, use:
						"file-loader?name=assets/[hash].[ext]"
				}
				,
				{
					test  : /\.json?$/,
					loader:
						'strip-json-comments-loader'
				},
				{ test: /\.flow$/, use: 'null-loader' }
			],
		},
	},
]