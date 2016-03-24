'use strict';

var nums = new CArray(10);
nums.setData();
console.log('希尔排序前：');
console.log(nums.toString());
console.log('希尔排序中：');
nums.shellsort();
console.log('希尔排序后：');
console.log(nums.toString());
