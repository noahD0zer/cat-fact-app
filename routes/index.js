var express = require('express');
var router = express.Router();

//get
router.get('/', function(req, res, next) {
  res.render('index', {title: "Cat Fact"})
})

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

module.exports = router;
