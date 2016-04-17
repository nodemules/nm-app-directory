var express = require('express');
var router = express.Router();
var constants = require('../resources/constants');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', constants.server);
});

module.exports = router;
