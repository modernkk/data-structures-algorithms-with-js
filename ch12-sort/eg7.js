'use strict';

var nums = new CArray(100);
nums.setData();
console.log('希尔排序前：');
console.log(nums.toString());
nums.shellsort1();
console.log('希尔排序后：');
console.log(nums.toString());

