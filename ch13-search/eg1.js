'use strict';

var nums = setData();

var searchNum = 20;
if (seqSearch(nums, searchNum) > -1) {
	console.log(searchNum + ' 出现在数组中');
} else {
	console.log(searchNum + ' 没有出现在数组中');
}