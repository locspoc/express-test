var express = require('express');
var app = express();

// Specify route
app.get('/', function (req, res) {
	res.send('Hello World!');
});

// Start server and listen on port 3000
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
