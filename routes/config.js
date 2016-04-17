var express = require('express');
var router = express.Router();
var constants = require('../resources/constants');

/* GET home page. */
router.get('/server', function(req, res, next) {
  res.set('Content-Type', 'text/javascript');
  res.end("var server = " + JSON.stringify(constants.server));
});

module.exports = router;
