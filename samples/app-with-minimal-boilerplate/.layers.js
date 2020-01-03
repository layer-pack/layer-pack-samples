const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	"default": {
		"basedOn"   : "prod",
		"rootFolder": "App"
	},
	"prod"   : {
		"rootFolder": "App",
		"libsPath"  : "./packages",
		"vars"      : {
			"webpackPatch": {
				plugins: [new HtmlWebpackPlugin({
					                                template: (__dirname + '/App/index.html.tpl')
				                                })]
			}
		},
		"extend"    : [
			"lpack-minimal-react-boilerplate"
		]
	},
	"dev"    : {
		"rootFolder": "App",
		"libsPath"  : "./packages",
		"vars"      : {
			"webpackPatch": {
				"watchOptions": {
					"aggregateTimeout": 300,
					"poll"            : 1000
				},
				plugins       : [new HtmlWebpackPlugin({
					                                       template: (__dirname + '/App/index.html.tpl')
				                                       })]
			}
		},
		"extend"    : [
			"lpack-minimal-react-boilerplate"
		]
	}
};