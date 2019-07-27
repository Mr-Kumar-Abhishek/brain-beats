

var fs = require("fs");
var http = require("http");
var https = require('https');
var debug = require('debug')('test');
var express = require('express');
var normalizePort = require( 'normalize-port' );
var app = express();

var privateKey = fs.readFileSync('/home/kumar/brain-beats-certs/live/brain-beats.tk/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/home/kumar/brain-beats-certs/live/brain-beats.tk/cert.pem', 'utf8');
var ca = fs.readFileSync('/home/kumar/brain-beats-certs/live/brain-beats.tk/chain.pem', 'utf8');


var credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};


app.use(express.static('public'));

  app.get('/', async (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
  });

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, () => {
	console.log('HTTP Server running on port 8080');
});

httpsServer.listen(8443, () => {
	console.log('HTTPS Server running on port 8443');
});
