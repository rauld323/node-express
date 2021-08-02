var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello Express');
});

// Routes start with the structure 'app.METHOD(PATH, HANDLER)'

// Method could be GET, Post, PATCH, Delete in lowercase.

// The PATH is the path where you will sent. This could be / /posts /blogs /products .app

// The handler is called when the route getMatchedCSSRules.

module.exports = app;
