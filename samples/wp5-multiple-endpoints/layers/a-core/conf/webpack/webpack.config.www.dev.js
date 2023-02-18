/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
const lPack                = require('layer-pack');
const webpack              = require("webpack");
const path                 = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer         = require('autoprefixer');

const lpackCfg      = lPack.getConfig(),
      isExcluded    = lPack.isFileExcluded(),
      devServerPort = process.env.DEV_SERVER_PORT || 8080,
      proxyTo       = process.env.API_PORT || 9701;

module.exports = [
	{
		mode: "development",
		
		// The jsx App entry point
		entry    : {
			[lpackCfg.vars.rootAlias]: [
				'webpack/hot/dev-server',
				lpackCfg.vars.entryPoint ?
				lpackCfg.vars.entryPoint
				                         :
				lpackCfg.vars.rootAlias + "/index.client" // default to 'App'
			]
		},
		devServer: {
			hot : true,
			host: '127.0.0.1', // Defaults to `localhost`
			port: devServerPort, // Defaults to 8080
			//contentBase       : './dist/wwwDev',
			allowedHosts      : 'all',
			historyApiFallback: {
				disableDotRule: true,
			},
			proxy             : [
				{
					context         : ['/**', '!/ws/**'],
					disableHostCheck: true,
					target          : 'http://127.0.0.1:' + proxyTo,
					//ws              : true,
					secure: false,                         // proxy websockets,
					
					onError: ( err, req, res ) => {
						console.log('wait api... ', req.headers && req.headers.referer);
						if ( !res.redirect )
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
		},
		
		// The resulting build
		output: {
			path      : lPack.getHeadRoot() + "/" + (lpackCfg.vars.targetDir || 'dist'),
			filename  : "[name].js",
			publicPath: "/",
		},
		
		cache       : {
			type                 : "filesystem",
			allowCollectingMemory: true,
			//cacheDirectory       : lPack.getHeadRoot() + "/dist/cache",
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					default: false,
					vendors: {
						// sync + async chunks
						chunks  : 'all',
						filename: lpackCfg.vars.rootAlias + ".vendors.js",
						test    : ( f ) => {
							return f.resource && isExcluded(f.resource)
						},
					},
				}
			}
		},
		
		// add sourcemap in a dedicated file (.map)
		devtool: 'source-map',
		
		// required files resolving options
		resolve: {
			cache     : false,
			extensions: [
				".",
				".js",
				".jsx",
				".json",
				".scss",
				".css",
			],
			alias     : {
				'react-dom': '@hot-loader/react-dom'
			},
		},
		
		// Global build plugin & option
		plugins: (
			[
				lPack.plugin(),
				
				// Add global variables
				new webpack.DefinePlugin({
					                         __IS_SERVER__: false,
				                         }),
				new webpack.ContextReplacementPlugin(/moment[\/\\](lang|locale)$/, /^\.\/(fr|en|us)$/),
			
			]
		),
		
		
		// the requirable files and what manage theirs parsing
		module: {
			rules: [
				
				{ test: /\.jsx?$/, loader: 'source-map-loader', exclude: /react-hot-loader/ },
				//{
				//	test   : /\.jsx?$/,
				//	exclude: isExcluded,
				//	use    : [
				//		'react-hot-loader/webpack'
				//	]
				//},
				{
					test   : /\.jsx?$/,
					exclude: isExcluded,
					use    : [
						'react-hot-loader/webpack',
						{
							loader : 'babel-loader',
							options: {
								cacheDirectory: true, //important for performance
								presets       : [
									['@babel/preset-env',
										{
											...(lpackCfg.vars.babelPreset || {})
										}],
									'@babel/preset-react'
								],
								plugins       : [
									["@babel/plugin-proposal-decorators", { "legacy": true }],
									['@babel/plugin-proposal-class-properties', {
										"loose": true
									}],
									["@babel/plugin-transform-runtime", {}],
									"react-hot-loader/babel"
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
								postcssOptions: {
									plugins: [
										[
											autoprefixer({
												             overrideBrowserslist: [
													             '>1%',
													             'last 4 versions',
													             'Firefox ESR',
													             'not ie < 9', // React doesn't support IE8 anyway
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
									sourceMaps: true
								},
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
					test: /\.otf(\?.*$|$)$/, use:
						"file-loader?name=assets/[hash].[ext]"
				}
				,
				{
					test: /\.json?$/,
					use :
						'strip-json-comments-loader'
				}
			],
		},
	},
]
