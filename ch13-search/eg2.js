'use strict';

var nums = setData();
disArr(nums);

var searchNum = 20;
var position = seqSearch(nums, searchNum);
if (position > -1) {
	console.log(searchNum + ' 在数组中的索引位置是 ' + position);
} else {
	console.log(searchNum + ' 没有出现在数组中');
}