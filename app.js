// var express = require('express');
// var app = express();

// //app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/public'));

// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   response.send("hello");
// });

// module.exports = app;



var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

// Database
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/blog';

var blog = require('./routes/blog');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var user = {id: 1, username: "abmodi", password: "karlos", hash: "astumnj"};

passport.serializeUser(function(user, done) {
  done(null, user.hash);
});

passport.deserializeUser(function(hash, done) {
	if(hash === user.hash) {
		done(null, user);
	}
	else {
		done(null, null);
	}
});

passport.use(new LocalStrategy(
	function(username, password, done) {
 		if(username !== "abmodi")
 			return done(null, false, { message: 'Unknown user ' + username });
 		if(password !== "karlos")
 			return done(null, false, {message: "Invalid password"});
 		return done(null, user);
	}
));

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/favicon.ico'));
MongoClient.connect(url, function(err, db){

	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.json({ inflate: true }));
	app.use(cookieParser());
	app.use(session({ secret: 'bloodysecret' }));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(function(req, res, next){
		req.db = db;
		next();
	});

	app.use('/', blog);

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	});

	// error handlers

	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
	  app.use(function(err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('error', {
	      message: err.message,
	      error: err
	    });
	  });
	}

	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next) {
	  res.status(err.status || 500);
	  res.render('error', {
	    message: err.message,
	    error: {}
	  });
	});
});

module.exports = app;
