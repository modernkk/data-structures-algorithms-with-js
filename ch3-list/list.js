'use strict';

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
}

List.prototype = {
  constructor: List,
  clear: function() {
  	delete this.dataStore;
  	this.dataStore.length = 0;
  	this.listSize = this.pos = 0;
  },
  find: function(element) {
  	for (var i = 0; i < this.dataStore.length; i++) {
  		if (this.dataStore[i] === element) {
  			return i;
  		}
  	}
  	return -1;
  },
  toString: function() {
  	return this.dataStore;
  },
  insert: function(element, after) {
  	var insertPos = this.find(after);
  	if (insertPos > -1) {
  		this.dataStore.splice(insertPos + 1, 0, element);
  		++this.listSize;
  		return true;
  	}
  	return false;
  },
  append: function(element) {
  	this.dataStore[this.listSize++] = element;
  },
  remove: function(element) {
  	var foundAt = this.find(element);
  	if (foundAt > -1) {
  		this.dataStore.splice(foundAt, 1);
  		--this.listSize;
  		return true;
  	}
  	return false;
  },
  front: function() {
  	this.pos = 0;
  },
  end: function() {
  	this.pos = this.listSize - 1;
  },
  prev: function() {
  	--this.pos;
  },
  next: function() {
  	if (this.pos < this.listSize) {
  		++this.pos;
  	}
  },
  hasNext: function() {
  	return this.pos < this.listSize;
  },
  hasPrev: function() {
  	return this.pos >= 0;
  },
  length: function() {
  	return this.listSize;
  },
  currPos: function() {
  	return this.pos;
  },
  moveTo: function(position) {
  	this.pos = position;
  },
  getElement: function() {
  	return this.dataStore[this.pos];
  },
  contains: function(element) {
  	for (var i = 0; i < this.dataStore.length; i++) {
  		if (this.dataStore[i] === element) {
  			return true;
  		}
  	}
  	return false;
  }
}
