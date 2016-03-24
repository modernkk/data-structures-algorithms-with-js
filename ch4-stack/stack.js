/*global console*/
'use strict';

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
	var popped = this.dataStore[--this.top];
	this.dataStore.splice(this.top,1);
  return popped;
}

function peek() {
  return this.dataStore[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  this.dataStore.splice(0,this.top);
  this.top = 0;
}


