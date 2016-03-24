'use strict';

var nums = setData();
var minVal = findMin(nums);
disArr(nums);
console.log('最小值：' + minVal);
var maxVal = findMax(nums);
console.log('最大值：' + maxVal);
