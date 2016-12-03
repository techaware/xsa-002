/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";
var express = require("express");
var faye = require("faye");
var app = express(); 
//var WebSocketServer = require("ws").Server;

module.exports = function(server){
	app.use(function(req, res){
    	res.send({ msg: "hello" });
	});
	
	var bayeux = new faye.NodeAdapter({mount: '/ws', timeout: 45});

	bayeux.attach(server);
	
	return app;
};
