'use strict';

function CArray(numElements) {
  this.datastore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;
  for (var i = 0; i < numElements; ++i) {
    this.datastore[i] = i;
  }
  this.shellsort = shellsort;
  this.shellsort1 = shellsort1;
  this.gaps = [5, 3, 1];
  this.mergeSort = mergeSort;
  this.mergeArrays = mergeArrays;
  this.qSort = qSort;
}

function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.datastore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
}

function clear() {
  for (var i = 0; i < this.datastore.length; ++i) {
    this.datastore[i] = 0;
  }
}

function insert(element) {
  this.datastore[this.pos++] = element;
}

function toString() {
  var retStr = '';
  for (var i = 0; i < this.datastore.length; ++i) {
    retStr += this.datastore[i] + ' ';
    if (i > 0 && i % 10 == 0) {
      retStr += '\n';
    }
  }
  return retStr;
}

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort() {
  var numElements = this.datastore.length;
  var temp;

  for (var outer = numElements; outer > 1; --outer) {
    for (var inner = 0; inner < outer - 1; ++inner) {
      if (this.datastore[inner] > this.datastore[inner + 1]) {
        swap(this.datastore, inner, inner + 1);
      }
    }
    // console.log(this.datastore.toString());
  }
}

function selectionSort() {
  var min;
  for (var outer = 0; outer < this.datastore.length - 1; ++outer) {
    min = outer;
    for (var inner = outer + 1; inner < this.datastore.length; ++inner) {
      if (this.datastore[inner] < this.datastore[min]) {
        min = inner;
      }
    }
    swap(this.datastore, outer, min);
    // console.log(this.datastore.toString());
  }
}

function insertionSort() {
  var temp, inner;
  for (var outer = 1; outer < this.datastore.length; ++outer) {
    temp = this.datastore[outer];
    inner = outer;
    while (inner > 0 && (this.datastore[inner - 1] > temp)) {
      this.datastore[inner] = this.datastore[inner - 1];
      --inner;
    }
    this.datastore[inner] = temp;
    // console.log(this.datastore.toString());
  }
}

function shellsort() {
  for (var g = 0; g < this.gaps.length; ++g) {
    for (var i = this.gaps[g]; i < this.datastore.length; ++i) {
      var temp = this.datastore[i];
      for (var j = i; j >= this.gaps[g] && this.datastore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
        this.datastore[j] = this.datastore[j - this.gaps[g]];
      }
      this.datastore[j] = temp;
    }
    // console.log(this.datastore.toString());
  }
}

function shellsort1() {
  var N = this.datastore.length;
  var h = 1;
  while (h < N / 3) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
  	for (var i = h; i < N; i++) {
  		for (var j = i; j >= h && this.datastore[j] < this.datastore[j - h]; j -= h) {
  			swap(this.datastore, j, j - h);
  		}
  	}
  	h = (h - 1) / 3;
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  var rightArr = new Array(stopRight - startRight + 1);
  var leftArr = new Array(stopLeft - startLeft + 1);
  var k = startRight;
  for (var i = 0; i < (rightArr.length - 1); ++i){
    rightArr[i] = arr[k];
    ++k;
  }
  k = startLeft;
  for (var j = 0; j < (leftArr.length - 1); ++j) {
    leftArr[j] = arr[k];
    ++k;
  }

  rightArr[rightArr.length - 1] = Infinity; //哨兵值
  leftArr[leftArr.length - 1] = Infinity;
  var m = 0;
  var n = 0;
  for (var t = startLeft; t < stopRight; ++t){
    if (leftArr[m] <= rightArr[n]) {
      arr[t] = leftArr[m];
      m++;
    } else {
      arr[t] = rightArr[n];
      n++
    }
  }
  console.log("left array - " + leftArr);
  console.log("right array - " + rightArr);
}

function mergeSort() {
  if (this.datastore.length < 2) {
    return;
  }
  var step = 1;
  var left, right;
  while (step < this.datastore.length) {
    left = 0;
    right = step;
    while (right + step <= this.datastore.length) {
      mergeArrays(this.datastore, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }
    if (right < this.datastore.length) {
      mergeArrays(this.datastore, left, left + step, right, this.datastore.length);
    }
    step *= 2;
  }
}

function qSort(arr) {
  if (arr.length === 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    console.log('基准值: ' + pivot + ' 当前元素: ' + arr[i]);
    if (arr[i] < pivot) {
      console.log('移动 ' + arr[i] + ' 到左边');
      left.push(arr[i]);
    } else {
      console.log('移动 ' + arr[i] + ' 到右边');
      right.push(arr[i]);
    }
  }
  return qSort(left).concat(pivot,qSort(right));
}
