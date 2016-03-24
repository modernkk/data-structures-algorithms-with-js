var numElements = 10000;
var myNum = new CArray(numElements);
myNum.setData();
// console.log(myNum.toString());
var start = new Date() * 1;
myNum.bubbleSort();
var stop = new Date() * 1;
var elapsed = stop - start;
// console.log(myNum.toString());
console.log('对' + numElements + ' 个元素执行冒泡排序消耗的时间为: ' + elapsed + '毫秒');

myNum.setData();
// console.log(myNum.toString());
start = new Date() * 1;
myNum.selectionSort();
stop = new Date() * 1;
elapsed = stop - start;
// console.log(myNum.toString());
console.log('对' + numElements + ' 个元素执行选择排序消耗的时间为: ' + elapsed + '毫秒');

myNum.setData();
// console.log(myNum.toString());
start = new Date() * 1;
myNum.insertionSort();
stop = new Date() * 1;
elapsed = stop - start;
// console.log(myNum.toString());
console.log('对' + numElements + ' 个元素执行插入排序消耗的时间为: ' + elapsed + '毫秒');