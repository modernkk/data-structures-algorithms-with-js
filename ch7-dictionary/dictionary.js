'use strict';

function Dictionary() {
	this.dataStore = [];
}

Dictionary.prototype = {
	constructor: Dictionary,
	add: function(key, value) {
		this.dataStore[key] = value;
	},
	find: function(key) {
		return this.dataStore[key];
	},
	remove: function(key) {
		delete this.dataStore[key];
	},
	showAll: function() {
		var datakeys = Object.keys(this.dataStore).sort();
		for (var key in datakeys) {
			console.log(datakeys[key] + ' -> ' + this.dataStore[datakeys[key]]);
		}
	},
	count: function() {
		var n = 0;
		for(var key in Object.keys(this.dataStore)) {
			++n;
		}
		return n;
	},
	clear: function() {
		var datakeys = Object.keys(this.dataStore);
		for (var key in datakeys) {
			delete this.dataStore[datakeys[key]];
		}
	}
}
