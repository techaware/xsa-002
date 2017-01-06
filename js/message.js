"use strict";
// var stores = ["S001","S002","S003","S004","S005"];
// var products = ["P1","P2","P3","P4","P5"];

module.exports = function(bayeux){
	var all = [];
	var max = 33;
	function repeat() {
		// var store = stores[Math.floor(Math.random()*stores.length)];
		// var product = products[Math.floor(Math.random()*products.length)];
		
         var value = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
         var data = {
			id: (new Date() / 1000) + "-" + value + "-" + (Math.floor(Math.random() * (1000 - 1 + 1)) + 1),
			value:value
		};
		all.push(data);
	if (all.length > max) {
        all.shift();
      }
		bayeux.getClient().publish('/foo', JSON.stringify(all));
	}

	setInterval(repeat, 1000);	
};