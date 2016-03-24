'use strict';

function PQueue() {
  this.datastore = [];
}
PQueue.prototype = {
  constructor: PQueue,
  enqueue: function(element) {
    this.datastore.push(element);
  },
  dequeue: function() {
    var entry = 0;
    for (var i = 1; i < this.datastore.length; ++i) {
      if (this.datastore[i].code < this.datastore[entry].code) {
        entry = i;
      }
    }
    return this.datastore.splice(entry, 1);
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
      retStr += this.datastore[i].name + ' code:' +
              + this.datastore[i].code + '\n';
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
