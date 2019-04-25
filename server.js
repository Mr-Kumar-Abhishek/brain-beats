// server.js
// where the node app starts

// init project
var http = require('http');
var debug = require('debug')('test');
var express = require('express');
var normalizePort = require( 'normalize-port' );
var app = express();


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3002');
app.set('port', port);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

