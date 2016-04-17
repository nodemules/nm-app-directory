var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const json = {
    appName : 'Node Mules Application Directory',
    title: 'Node Mules App Directory',
    page: 'index.html'
  }
  res.render('index', json);
});

module.exports = router;
