'use strict';

function HashTable() {
	this.table = new Array(137);
}

HashTable.prototype = {
	constructor: HashTable,
	put: function(data) {
		var pos = this.simpleHash(data);
		// var pos = this.betterHash(data);
		this.table[pos] = data;
	},
	put2: function(key, value) {
		var pos = this.betterHash(key);
		this.table[pos] = value;
	},
	put3: function(key, value) {
		var pos = this.simpleHash(key);
		var valArr = this.table[pos];
		this.table[pos][valArr.length] = value;
	},
	simpleHash: function(data) {
		var total = 0;
		for (var i = 0; i < data.length; ++i) {
			total += data.charCodeAt(i);
		}
		console.info('Hash value:' + data + ' -> ' + total);
		return total % this.table.length;
	},
	betterHash: function(string) {
		var H = 37;
		var total = 0;
		for (var i = 0; i < string.length; ++i) {
			total += H * total +string.charCodeAt(i);
		}
		total = total % this.table.length;
		return parseInt(total);
	},
	showDistro: function() {
		for (var i = 0; i < this.table.length; ++i) {
			if (this.table[i] !== undefined) {
				console.log(i + ': ' + this.table[i]);
			}
		}
	},
	showDistro2: function() {
		for (var i = 0; i < this.table.length; ++i) {
			if (this.table[i][0] != undefined) {
				console.log(i + ': ' + this.table[i]);
			}
		}
	},
	get: function(key) {
		var pos = this.betterHash(key);
		return this.table[pos];
	},
	buildChains: function() {
		for (var i = 0; i < this.table.length; ++i) {
			this.table[i] = [];
		}
	}
};
