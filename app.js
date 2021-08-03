var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

module.exports = app;

// Using the method .USE will create a place where static assets can be placed.

// .STATIC is used a middleware where the absolutee path is placed.
