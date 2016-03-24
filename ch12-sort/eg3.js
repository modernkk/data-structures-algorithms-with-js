'use strict';

var numElements = 10;
var myNum = new CArray(numElements);
// myNum.setData();
myNum.datastore = [72, 54, 59, 30, 31, 78, 2, 77, 82, 72];
console.log(myNum.toString());
console.log(new Date() * 1);
myNum.selectionSort();
console.log(new Date() * 1);
console.log(myNum.toString());