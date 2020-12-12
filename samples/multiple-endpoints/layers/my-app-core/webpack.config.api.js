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

const lPack                = require('layer-pack'),
      fs                   = require("fs"),
      webpack              = require("webpack"),
      path                 = require("path"),
      BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
            path         : lPack.getHeadRoot() + "/" + ( lpackCfg.vars.targetDir || 'dist' ),
            filename     : "[name].server.js",
            publicPath   : "/",
            libraryTarget: "commonjs2"
        },
        devtool: 'source-map',
        
        resolve: {
            symlinks  : false,
            extensions: [
                ".",
                ".api.js",
                ".api.jsx",
                ".js",
                ".jsx",
                ".json",
                ".scss",
                ".css",
            ],
        },
        
        module : {
            rules: [
                {
                    test   : /\.jsx?$/,
                    exclude: lpackCfg.vars.babelInclude
                             ?
                             (
                                 includeRE => ( { test: path => ( isExcluded.test(path) && !includeRE.test(path) ) } )
                             )(new RegExp(lpackCfg.vars.babelInclude))
                             :
                             isExcluded,
                    use    : {
                        loader : 'babel-loader',
                        options: {
                            cacheDirectory: true, //important for performance
                            presets       : [
                                ['@babel/preset-env',
                                 {
                                     ...( lpackCfg.vars.babelPreset || {} )
                                 }], "@babel/react"],
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
                {
                    test: /\.(png|jpg|gif|svg|woff2|ttf|eot)(\?.*$|$)$/,
                    use : 'file-loader?limit=8192&name=assets/[hash].[ext]'
                },
                {
                    test: /\.woff2?(\?.*$|$)$/,
                    use : "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff&name=assets/[hash].[ext]"
                },
                { test: /\.html$/, use: "file-loader?name=[name].[ext]" },
                { test: /\.tpl$/, loader: "dot-tpl-loader?append=true" },
                {
                    test  : /\.(scss|css|less)(\?.*$|$)$/,
                    loader: 'null-loader'
                },
                
                { test: /\.otf(\?.*$|$)$/, use: "file-loader?name=assets/[hash].[ext]" },
                {
                    test  : /\.json?$/,
                    loader: 'strip-json-comments-loader'
                }
            ],
        },
        plugins:
            [
                lPack.plugin(),
                
                //new HardSourceWebpackPlugin(),
                ...( fs.existsSync("./LICENCE.HEAD.MD") && [
                        new webpack.BannerPlugin(fs.readFileSync("./LICENCE.HEAD.MD").toString())
                    ] || []
                ),
                
                ...( lpackCfg.vars.production && [
                    new BundleAnalyzerPlugin({
                                                 analyzerMode  : 'static',
                                                 reportFilename: './' + lpackCfg.vars.rootAlias + '.stats.html',
                                                 openAnalyzer  : false,
                                                 ...lpackCfg.vars.BundleAnalyzerPlugin
                                             })
                
                ] || [new webpack.NamedModulesPlugin()] )
            ],
    }
]