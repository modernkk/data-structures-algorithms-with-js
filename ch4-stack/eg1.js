/*global console*/
'use strict';

var s = new Stack();
s.push('David');
s.push('Raymond');
s.push('Bryan');
console.log('length: ' + s.length());
console.log(s.dataStore);
console.log(s.peek());
var popped = s.pop();
console.log('The popped element is: ' + popped);
console.log(s.dataStore);
console.log(s.peek());
s.push('Cynthia');
console.log(s.dataStore);
console.log(s.peek());
s.clear();
console.log(s.dataStore);
console.log('length: ' + s.length());
console.log(s.peek());
s.push('Clayton');
console.log(s.peek());
console.log(s.dataStore);

