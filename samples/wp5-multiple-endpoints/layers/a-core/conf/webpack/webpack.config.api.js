/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

const lPack                = require('layer-pack');
const fs                   = require("fs");
const webpack              = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const lpackCfg   = lPack.getConfig(),
      isExcluded = lPack.isFileExcluded();

module.exports = [
	{
		mode   : lpackCfg.vars.production ? "production" : "development",
		entry  : {
			App: [
				lpackCfg.vars.rootAlias + '/index.server'
			] // default to 'App'
		},
		target : 'async-node',
		output : {
			path         : lPack.getHeadRoot() + "/" + (lpackCfg.vars.targetDir || 'dist'),
			filename     : "[name].server.js",
			publicPath   : "/",
			libraryTarget: "commonjs2"
		},
		devtool: 'source-map',
		
		optimization: {
			minimizer: []
		},
		resolve     : {
			symlinks  : false,
			extensions: [
				".",
				".mjs",
				".api.js",
				".api.jsx",
				".js",
				".jsx",
				".json",
				".scss",
				".css", '.gql', '.graphql',
			],
		},
		
		module : {
			rules: [
				{
					test   : /\.m?js/,
					resolve: {
						fullySpecified: false
					}
				},
				{
					test   : /\.(j|t)sx?$/i,
					exclude: lpackCfg.vars.babelInclude
					         ?
					         (
						         includeRE => (path => (isExcluded.test(path) && !includeRE.test(path)))
					         )(new RegExp(lpackCfg.vars.babelInclude))
					         :
					         isExcluded
					,
					use:
						{
							loader : "babel-loader",
							options: {
								cacheDirectory: true,
								presets       : ["@babel/react"],
								plugins       : [
									["@babel/plugin-proposal-decorators", { "legacy": true }],
									["@babel/plugin-transform-runtime", {}],
									["@babel/plugin-proposal-optional-chaining", {}],
									["@babel/proposal-class-properties", { loose: true }],
									"@babel/proposal-object-rest-spread",
									"@babel/plugin-syntax-dynamic-import"
								]
							}
						}
				},
				{ test: /\.graphql?$/, use: 'graphql-tag/loader' },
				{
					test: /\.(png|jpg|gif|svg|woff2|ttf|eot)(\?.*$|$)$/,
					use : 'file-loader?limit=8192&name=assets/[hash].[ext]'
				},
				{
					test: /\.woff2?(\?.*$|$)$/,
					use : "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff&name=assets/[hash].[ext]"
				},
				{ test: /\.html$/, use: "file-loader?name=[name].[ext]" },
				{
					test: /\.(scss|css|less)(\?.*$|$)$/,
					use : 'null-loader'
				},
				
				{ test: /\.otf(\?.*$|$)$/, use: "file-loader?name=assets/[hash].[ext]" },
				{
					test: /\.json?$/,
					use : 'strip-json-comments-loader'
				}, { test: /\.flow$/, use: 'null-loader' }
			],
		},
		plugins:
			[
				lPack.plugin(),
				
				//new HardSourceWebpackWidget(),
				...(fs.existsSync("./LICENCE.HEAD.MD") && [
						new webpack.BannerPlugin(fs.readFileSync("./LICENCE.HEAD.MD").toString())
					] || []
				),
				
				// Add global variables
				new webpack.DefinePlugin({
					                         __IS_SERVER__: true,
				                         }),
				// Add source map support to the server-side bundle
				new webpack.BannerPlugin({
					                         banner   : `require("source-map-support").install();`,
					                         entryOnly: false,
					                         include  : ["App.js"],
					                         raw      : true
				                         }),
				...(lpackCfg.vars.production && [
					new BundleAnalyzerPlugin({
						                         analyzerMode  : 'static',
						                         reportFilename: './' + lpackCfg.vars.rootAlias + '.stats.html',
						                         openAnalyzer  : false,
						                         ...lpackCfg.vars.BundleAnalyzerPlugin
					                         })
				
				] || [])
			],
	}
]