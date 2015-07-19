var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {"url" : "about"});
});

router.get('/resume', function(req, res, next) {
	res.render('resume', {url: "resume"});
});

router.get('/portfolio', function(req, res, next){
	res.render('portfolio', {url: "portfolio"});
});

router.get('/contact', function(req, res, next){
	res.render('contact', {url: "contact"});
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/login', function(req, res){
  res.render('login');
});

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

module.exports = router;
