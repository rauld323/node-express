var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;

// The sendFile method responds to a request by sending a File.

// __dirname is the Node global variable for the absolute path.

// /views/index.html is the file that we want to send
