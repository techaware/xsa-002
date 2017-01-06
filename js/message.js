"use strict";
var stores = ["S001","S002","S003","S004","S005"];
var products = ["P1","P2","P3","P4","P5"];

module.exports = function(bayeux){
	function repeat() {
		var store = stores[Math.floor(Math.random()*stores.length)];
		var product = products[Math.floor(Math.random()*products.length)];
		bayeux.getClient().publish('/foo', {
			store: store,
			product:product
		});
	}

	setInterval(repeat, 5000);	
};