/**
 * Deps
 */
var express = require('express'),
		config = require("./config");

module.exports = function(app) {

	app.use(express.static(config.root + '/public'));

	app.set('views', config.root + '/app/views');
	app.set('view engine', 'jade');

	var port = config.port;
	app.listen(port);
	console.log('Express started on port ' + port);

}