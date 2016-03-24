'use strict';

function Queue() {
  this.datastore = [];
}
Queue.prototype = {
  constructor: Queue,
  enqueue: function(element) {
    this.datastore.push(element);
  },
  dequeue: function() {
    return this.datastore.shift();
  },
  front: function() {
    return this.datastore[0];
  },
  back: function() {
    return this.datastore[this.datastore.length - 1];
  },
  toString: function() {
    var retStr = '';
    for (var i = 0; i < this.datastore.length; ++i) {
      retStr += this.datastore[i] + '\n';
    }
    return retStr;
  },
  empty: function() {
    if (this.datastore.length === 0) {
      return true;
    } else {
      return false;
    }
  },
  count: function() {
  	return this.datastore.length;
  }
};
