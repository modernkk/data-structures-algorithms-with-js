'use strict';

var numElements = 10;
var myNum = new CArray(numElements);
myNum.setData();
console.log(myNum.toString());
console.log(new Date() * 1);
myNum.bubbleSort();
console.log(new Date() * 1);
console.log(myNum.toString());
