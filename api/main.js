var express = require('express');
var api = express.Router();
var json = require('../resources/json');

api.get('/apps', function(req, res, next) {
  res.set('Content-Type', 'text/javascript');
  var data = json.readFile('data-apps.json');
  res.send(data);
});

module.exports = api;
