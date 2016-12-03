/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";

//var xsjs  = require("sap-xsjs");
//var xsenv = require("sap-xsenv");
var faye = require("faye");
var port = process.env.PORT || 3000;
var server = require("http").createServer();
var express = require("express");
//var fayeClient = require("./fayeClient");
var auth = 'BWDEVELOPER:Pass4321';
var app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var WebSocket = require('ws');
var headers = {};
var options = {};
if (auth) {
	headers.Authorization = 'Basic ' + new Buffer(auth).toString('base64');
}
options.headers = headers;
var ws = new WebSocket('ws://54.174.36.55:8000/sap/bc/apc/sap/zrah_apc2', options);
ws.on('open', function(event) {
	console.log('open');
	ws.send('Hello, world!');
});
ws.on('message', function(event) {
	console.log('message', event);
});
ws.on('close', function(event) {
	console.log('close', event.code, event.reason);
	ws = null;
});

// var WebSocket = require('faye-websocket'),
//     // ws        = new WebSocket.Client('ws://echo.websocket.org/');
// 	ws = new WebSocket.Client('ws://54.152.35.96:8000/sap/bc/apc/sap/zrah_apc2');
// ws.on('open', function(event) {
//   console.log('open');
//   ws.send('Hello, world!');
// });

// ws.on('message', function(event) {
//   console.log('message', event.data);
// });

// ws.on('close', function(event) {
//   console.log('close', event.code, event.reason);
//   ws = null;
// });

//app.use("/client", fayeClient(server));

// console.log("before new client");

// var client = new faye.Client('https://hxehost:51007/ws');
// client.connect();

// var subscription = client.subscribe('/foo', function(message) {
// 	console.log("Event Received");
// 	console.log(message);
// }, function(error) {
//     console.log('There was a problem: ' + error.message);
// });

// subscription.then(function() {
// 	console.log('Server side Subscription is now active!');
// },function(error) {
//     console.log('There was a problem: ' + error.message);
// });

// var publication = client.publish('/foo', {text: "Hello World!"},function(error) {
//     console.log('There was a problem: ' + error.message);
// });

// publication.then(function() {
//     console.log('Message received by server!');
// }, function(error) {
//     console.log('There was a problem: ' + error.message);
// });

app.use(function(req, res) {

	res.send({
		msg: "hello from server side client"
	});
});

// var options = xsjs.extend({
// 	anonymous : true, // remove to authenticate calls
// 	redirectUrl : "/index.xsjs"
// });

// // configure HANA
// try {
// 	options = xsjs.extend(options, xsenv.getServices({ hana: {tag: "hana"} }));
// } catch (err) {
// 	console.log("[WARN]", err.message);
// }

// // configure UAA
// try {
// 	options = xsjs.extend(options, xsenv.getServices({ uaa: {tag: "xsuaa"} }));
// } catch (err) {
// 	console.log("[WARN]", err.message);
// }

// start server
// var xsjsApp = xsjs(options);
// app.use(xsjsApp);

server.on("request", app);
server.listen(port, function() {
	console.log("HTTP Server: " + server.address().port);
});