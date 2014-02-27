/**
 * Deps
 */
var express = require('express'),
		config = require("./config");

module.exports = function(app) {

	// Express Compress
	app.use(express.compress({
		filter: function(req, res) {
			return (/json|test|javascript|css/).test(res.getHeader('Content-Type'));
		},
		level: 9
	}));

	// Express Static Dir
	app.use(express.static(config.root + '/public'));

	// Set View path and Layout Engine
	app.set('views', config.root + '/app/views');
	app.set('view engine', 'jade');

	var port = config.port;
	app.listen(port);
	console.log('Express started on port ' + port);

}