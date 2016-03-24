'use strict';

function seqSearch(arr, data) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == data) {
			return i
		}
	}
	return -1;
}

// 自组织
function seqSearch2(arr, data) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == data) {
			if (i > 0) {
				swap(arr, i, i - 1);
			}
			return true;
		}
	}
	return false;
}

function swap(arr, index, index1) {
	var temp = arr[index];
	arr[index] = arr[index1];
	arr[index1] = temp;
}

function findMin(arr) {
	var min = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
		}
	}
	return min;
}

function findMax(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

function disArr(arr) {
	var str = '';
	for (var i = 0; i < arr.length; i++) {
		str += arr[i] + ' ';
		if (i % 10 === 9) {
			console.log(str);
			str = '';
		}
	}
}

function setData() {
	var nums = [];
	for (var i = 0; i < 100; i++) {
		nums[i] = Math.floor(Math.random() * 101);
	}
	return nums;
}

function binSearch(arr, data) {
	var upperBound = arr.length - 1;
	var lowerBound = 0;
	while (lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		if (arr[mid] < data) {
			lowerBound = mid + 1;
		} else if (arr[mid] > data) {
			upperBound = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

function insertionSort(arr) {
  var temp, inner;
  for (var outer = 1; outer < arr.length; ++outer) {
    temp = arr[outer];
    inner = outer;
    while (inner > 0 && (arr[inner - 1] > temp)) {
      arr[inner] = arr[inner - 1];
      --inner;
    }
    arr[inner] = temp;
    // console.log(arr.toString());
  }
}

function count(arr, data) {
	var count = 0;
	var position = binSearch(arr, data);
	if (position > -1) {
		++count;
		for (var i = position - 1; i > 0; --i) {
			if (arr[i] == data) {
				++count;
			} else {
				break;
			}
		}
		for (var j = position + 1; j < arr.length; j++) {
			if (arr[j] == data) {
				++count;
			} else {
				break;
			}
		}
	}
	return count;
}
