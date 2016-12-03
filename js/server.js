/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";

var xsjs = require("sap-xsjs");
var xsenv = require("sap-xsenv");
var port = process.env.PORT || 3000;
var server = require("http").createServer();
var express = require("express");
var fayeServer = require("./fayeServer");
var WebSocket = require("faye-websocket");

//var ws = new WebSocket.Client('ws://www.example.com/');

var app = express();
app.use("/faye", fayeServer(server));

var options = xsjs.extend({
	anonymous: true, // remove to authenticate calls
	redirectUrl: "/index.xsjs"
});

//configure HANA
try {
	options = xsjs.extend(options, xsenv.getServices({
		hana: {
			tag: "hana"
		}
	}));
} catch (err) {
	console.error(err);
}

// start server
var xsjsApp = xsjs(options);
app.use(xsjsApp);

server.on("request", app);
server.listen(port, function() {
	console.log("HTTP Server: " + server.address().port);
});