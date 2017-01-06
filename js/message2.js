"use strict";
var async = require("async");

//var stores = ["S001", "S002", "S003", "S004", "S005"];
var stores = ["S001"];
var products = ["P1", "P2", "P3", "P4", "P5"];
var qty = [0, 1];
module.exports = {

	repeat: function(bayeux) {
		var max = 5000;
		var min = 1000;
		var rand = 1000;
		async.forever(
			function(next) {
				for (var i = 0; i < stores.length; i++) {
					var store = stores[i];
					var product = products[Math.floor(Math.random() * products.length)];
//					var sold = qty[Math.floor(Math.random() * qty.length)];
					var sold = Math.floor(Math.random() * 50 + 20);					

					var data = {
						product: product,
						sold: sold
					};
					// all.push(data);
					// if (all.length > max) {
					// 	all.shift();
					// }
					var channel = '/store/' + store;
					bayeux.getClient().publish(channel, JSON.stringify(data));
				}

//				var rand = Math.floor(Math.random() * (max - min) + min);
				//Repeat after the delay
				setTimeout(function() {
					next();
				}, rand);
				//		setTimeout(this.repeat(bayeux), rand);
			},
			function(err) {
				console.error(err);
			}
		);

		//		var store = stores[Math.floor(Math.random() * stores.length)];

		// for (var i = 0; i < stores.length; i++) {
		// 	var store = stores[i];
		// 	var product = products[Math.floor(Math.random() * products.length)];
		// 	var sold = qty[Math.floor(Math.random() * qty.length)];

		// 	var data = {
		// 		product: product,
		// 		sold: sold
		// 	};
		// 	// all.push(data);
		// 	// if (all.length > max) {
		// 	// 	all.shift();
		// 	// }
		// 	var channel = '/store/' + store;
		// 	bayeux.getClient().publish(channel, JSON.stringify(data));
		// }

		// var rand = Math.floor(Math.random() * (max - min) + min);
		// setTimeout(this.repeat(bayeux), rand);
	}

};