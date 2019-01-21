var express      = require("express"),
    path         = require("path"),
    App          = require('./dist/App.server'),
    fs           = require("fs"),
    server       = express(),
    currentState = null,
    http         = require('http').Server(server),
    argz         = require('minimist')(process.argv.slice(2));

server.use(express.json());       // to support JSON-encoded bodies
server.use(express.urlencoded()); // to support URL-encoded bodies

server.get(
	'/',
	function ( req, res, next ) {
		App.renderSSR(
			{
				url  : req.url,
				state: currentState
			},
			( err, html, nstate ) => {
				if ( nstate )
					currentState = nstate;
				!err ?
				res.send(200, html)
				     :
				res.send(500, err + '')
			}
		)
	}
);

server.post('/', function ( req, res, next ) {
	console.log("New state pushed")
	currentState = req.body;
	res.send(200, 'ok')
});

server.use(express.static('./dist'))

var server_instance = http.listen(parseInt(argz.p || argz.port || 8000), function () {
	console.warn('Running on ', server_instance.address().port)
});