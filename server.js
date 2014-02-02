'use strict'

/**
 * Deps
 */
var express = require('express');

/**
 * Require Express
 */
var app = express();
require('./config/express')(app);
require('./config/routes')(app);