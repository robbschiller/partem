'use strict'

module.exports = function(app) {

	/**
	 * Routes
	 */
	var index = require('../app/controllers/index');
	app.get('/', index.render);
};
