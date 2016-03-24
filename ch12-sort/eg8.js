'use strict';

var nums = new CArray(10000);
nums.setData();
var start = new Date() * 1;
nums.shellsort();
var stop = new Date() * 1;
var elapsed = stop - start;
console.log('硬编码间隔序列的希尔排序消耗时间为：' + elapsed + 'ms');
nums.clear();
nums.setData();
start = new Date() * 1;
nums.shellsort1();
stop = new Date() * 1;
elapsed = stop - start;
console.log('动态间隔序列的希尔排序消耗时间为：' + elapsed + 'ms');
