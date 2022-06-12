var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('../views/webpages/home.ejs', { title: 'Home page'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('../views/webpages/about.ejs', { title: 'About me'});
});
/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('../views/webpages/project.ejs', { title: 'My projects'});
});
/* GET Service page. */
router.get('/service', function(req, res, next) {
  res.render('../views/webpages/service.ejs', { title: 'My services'});
});
/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('../views/webpages/contact.ejs', { title: 'Contact information'});
});
module.exports = router;
