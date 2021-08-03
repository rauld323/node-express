var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello Express');
});

app.get('/json', (req, res) => {
	if (process.env.MESSAGE_STYLE === 'uppercase') {
		res.json({ message: 'HELLO JSON' });
	}
	res.json({ message: 'Hello json' });
});

module.exports = app;

// The chapter dealt with .env file that is created to hold private data that the client should not have access to .Within the .env file, one most use capital letters that will used for the variable.

// In order for the variable to called  you must use the process.env. + variable name whereever you going to use it.
