var express = require('express'),
    json = require('./json'),
    constants = {}
    ;

/*
 * This file will be used to define server constants
 */

constants.server = json.readFile('config.json');

module.exports = constants;
