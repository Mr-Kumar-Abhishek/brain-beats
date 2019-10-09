

var fs = require("fs");
var http = require("http");
var https = require('https');
var debug = require('debug')('test');
var express = require('express');
var normalizePort = require( 'normalize-port' );
var app = express();


app.use(express.static('public'));

  app.get('/', async (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
  });

app.listen(8080, () => {
	console.log('HTTP Server running on port 8080');
});

app.listen(8443, () => {
	console.log('HTTPS Server running on port 8443');
});
