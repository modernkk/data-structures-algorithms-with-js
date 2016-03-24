'use strict';

var nums = setData();
insertionSort(nums);
disArr(nums);
var searchNum = 43;
var retVal = binSearch(nums, searchNum);
if (retVal >= 0) {
	console.log(searchNum + ' 在数组中的索引位置： ' + retVal);
} else {
	console.log(searchNum + ' 没有在数组中');
}

