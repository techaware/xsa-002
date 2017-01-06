/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";
var express = require("express");
var faye = require("faye");
var app = express();
var async = require("async");
var message = require("./message.js");

//var WebSocketServer = require("ws").Server;

module.exports = function(server) {
	// app.use(function(req, res) {
	// 	res.send({
	// 		msg: "hello"
	// 	});
	// });

	// faye.logger = function(msg) {
	// 	console.log(msg);
	// };

	var bayeux = new faye.NodeAdapter({
		mount: '/ws',
		timeout: 45
	});
	bayeux.attach(server);

	message(bayeux);
	
	// function repeat() {
	// 	bayeux.getClient().publish('/foo', {
	// 		text: 'Repeated Hi'
	// 	});
	// }

	// setInterval(repeat, 5000);

	// // create a server side client
	// var client = new faye.Client('https://hxehost:51007/ws', {
	// 	endpoints: {
	// 		websocket: 'wss://107.23.12.206:44300/sap/bc/apc/sap/zrah_apc2'
	// 	}
	// });

	// //This was missing from the documentation
	// client.connect();

	// var subscription = client.subscribe('/foo', function(message) {
	// 	console.log("Event Received");
	// 	console.log(message);
	// });

	// //This is optional
	// subscription.then(function() {
	// 	console.log('Subscription is now active!');
	// });

	return app;
};