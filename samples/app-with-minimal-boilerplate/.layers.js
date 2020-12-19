const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	"default": {
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
	"wwwProd": "default",
	"www"    : "default"
};