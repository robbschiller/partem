'use strict'

module.exports = function(app) {

	// Home Route
	var index = require('../app/controllers/index');
	app.get('/', index.render);

}