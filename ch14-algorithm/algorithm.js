'use strict';

function recurFib(n) {
	if (n < 2) {
		return n;
	} else {
		return recurFib(n - 1) + recurFib(n - 2);
	}
}
console.log(recurFib(10));

function dynFib(n) {
	var val = [];
	for (var i = 0; i <= n; i++) {
		val[i] = 0;
	}
	if (n ===1 || n === 2) {
		return 1;
	} else {
		val[1] = 1;
		val[2] = 2;
		for (var j = 3; j <= n; j++) {
			val[j] = val[j - 1] + val[j - 2];
		}
		return val[n - 1];
	}
}

function iterFib(n) {
	var last = 1;
	var nextLast = 1;
	var result = 1;
	for (var i = 2; i < n; i++) {
		result = last + nextLast;
		nextLast = last;
		last = result;
	}
	return result;
}

var start = new Date() * 1;
console.log(recurFib(50));
var stop = new Date() * 1;
console.log('递归消耗时间：' + (stop - start) + 'ms');
start = new Date() * 1;
console.log(dynFib(50));
stop = new Date() * 1;
console.log('动态规划消耗时间：' + (stop - start) + 'ms');
start = new Date() * 1;
console.log(iterFib(50));
stop = new Date() * 1;
console.log('迭代消耗时间：' + (stop - start) + 'ms');
