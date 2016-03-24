'use strict';

function Set() {
  this.dataStore = [];
}

Set.prototype = {
  constructor: Set,
  add: function(data) {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true;
    } else {
      return false;
    }
  },
  remove: function(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
      this.dataStore.splice(pos, 1);
      return true;
    } else {
      return false;
    }
  },
  show: function() {
  	var retStr = '';
  	for (var i = 0; i < this.dataStore.length; ++i) {
  		retStr += this.dataStore[i] + ' ';
  	}
		console.log(retStr);
		return this.dataStore;
  },
  contains: function(data) {
  	if (this.dataStore.indexOf(data) > -1) {
  		return true;
  	} else {
  		return false;
  	}
  },
  union: function(set) {
  	var tempSet = new Set();
  	for (var i = 0; i < this.dataStore.length; ++i) {
  		tempSet.add(this.dataStore[i]);
  	}
  	for (var j = 0; j < set.dataStore.length; ++j) {
  		if (!tempSet.contains(set.dataStore[j])) {
  			tempSet.dataStore.push(set.dataStore[j]);
  		}
  	}
  	return tempSet;
  },
  intersect: function(set) {
  	var tempSet = new Set();
  	for (var i = 0; i < this.dataStore.length; ++i) {
  		if (set.contains(this.dataStore[i])) {
  			tempSet.add(this.dataStore[i]);
  		}
  	}
  	return tempSet;
  },
  subset: function(set) {
  	if (this.size() > set.size()) {
  		return false;
  	} else {
  		for (var i = 0; i < this.dataStore.length; ++i) {
  			if (!set.contains(this.dataStore[i])){
  				return false
  			}
  		}
  	}
  	return true;
  },
  size: function() {
  	return this.dataStore.length;
  },
  difference: function(set) {
  	var tempSet = new Set();
  	for (var i = 0; i < this.dataStore.length; ++i) {
  		if (!set.contains(this.dataStore[i])) {
  			tempSet.add(this.dataStore[i]);
  		}
  	}
  	return tempSet;
  }
}
