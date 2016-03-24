'use strict';

function prArray(arr) {
	var retStr = arr[0].toString() + ' ';
	for (var i = 1; i < arr.length; ++i) {
		retStr += arr[i].toString() + ' ';
		if (i % 10 === 0) {
			console.log(retStr + '\n');
			retStr = '';
		}
	}
	console.log(retStr + '\n');
}

function genArray(length) {
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr[i] = Math.floor(Math.random() * 101);
	}
	return arr;
}

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for (var i = 0; i < grades.length; i++) {
	var g = grades[i];
	var grade = gradedistro.find(g);
	if (grade === null) {
		gradedistro.insert(g);
	} else {
		gradedistro.update(g);
	}
}
gradedistro.inOrder(gradedistro.root);
var num = 40;
var aGrade = gradedistro.find(num);
if (aGrade === null) {
	console.log('No occurrences of ' + num);
} else {
	console.log('occurrences of ' + num + ':' + aGrade.count);
}

num = 48;
aGrade = gradedistro.find(num);
if (aGrade === null) {
	console.log('No occurrences of ' + num);
} else {
	console.log('occurrences of ' + num + ':' + aGrade.count);
}

num = 100;
aGrade = gradedistro.find(num);
if (aGrade === null) {
	console.log('No occurrences of ' + num);
} else {
	console.log('occurrences of ' + num + ':' + aGrade.count);
}
