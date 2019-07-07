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
const wpInherit         = require('webpack-inherit');
const HtmlWebpackPlugin = require('html-webpack-plugin');

wpInherit.loadConfig(
	{
		"default": {
			"rootFolder": "App"
		}
	}
)

const isExcluded = wpInherit.isFileExcluded("default");

module.exports = [
	{
		mode: "development",
		
		// The jsx App entry point
		entry: {
			"myApp": ["App/entryPoints/index.*.js"]
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
				                      template: 'App/index.html',
				                      inject  : false
			                      }),
			wpInherit.plugin("default"),
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