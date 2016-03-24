'use strict';

var numElements = 10;
var myNum = new CArray(numElements);
// myNum.setData();
myNum.datastore = [6, 10, 0, 6, 5, 8, 7, 4, 2, 7];
console.log(myNum.toString());
console.log(new Date() * 1);
myNum.insertionSort();
console.log(new Date() * 1);
console.log(myNum.toString());