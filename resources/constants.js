var express = require('express'),
    json = require('./json'),
    constants = {}
    ;

/*
 * This file will be used to define server constants
 */

constants.server = json.getConfig('config.json');

module.exports = constants;
