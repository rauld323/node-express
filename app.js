var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
	res.json({
		message: 'Hello json'
	});
});

app.use('/public', express.static(__dirname + '/public'));

module.exports = app;

// In this exercise we use the /json path.

// .JSON is the method that is used for a simple API call. Notice the format of the object.
