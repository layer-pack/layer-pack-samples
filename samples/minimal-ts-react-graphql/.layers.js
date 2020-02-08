const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	"default": {
		"libsPath"  : "./packages",
		"rootFolder": "App",
		"extend"    : [
			"lpack-react-ts-apollo"
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
			}
		},
		"extend"    : [
			"lpack-react-ts-apollo"
		]
	},
	"api"    : {
		"rootFolder": "App",
		"libsPath"  : "./packages",
		
		"extend"    : [
			"lpack-react-ts-apollo"
		]
	},
	"www"    : {
		"rootFolder": "App",
		"libsPath"  : "./packages",
		
		"extend"    : [
			"lpack-react-ts-apollo"
		]
	}
};