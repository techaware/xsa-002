"use strict";
var express = require("express");
var faye = require("faye");
var app = express();

module.exports = function(server){
	app.use(function(req, res) {
		res.send({
			msg: "hello from server side client"
		});
	});
	
 	// create a server side client
	// var client = new faye.Client('https://hxehost:51007/ws', {
	// 	endpoints: {
	// 		websocket: 'ws://echo.websocket.org/'
	// 	}
	// });

	// var client = new faye.Client('https://hxehost:51007/ws');
	
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