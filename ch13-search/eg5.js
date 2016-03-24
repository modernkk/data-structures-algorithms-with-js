'use strict';

var nums = setData();
insertionSort(nums);
disArr(nums);
var searchNum = 42;
var retVal = count(nums, searchNum);
console.log('找到了' + retVal + ' 次重复出现的' + searchNum);


