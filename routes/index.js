var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home page'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me'});
});
/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'My projects'});
});
/* GET Service page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'My services'});
});
/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact information'});
});
module.exports = router;
