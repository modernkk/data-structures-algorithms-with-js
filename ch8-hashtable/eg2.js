'use strict';

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuDate(arr) {
	for (var i = 0; i < arr.length; ++i) {
		var num = '';
		for (var j = 1; j <= 9; ++j) {
			num += Math.floor(Math.random() * 10);
		}
		num += getRandomInt(50, 100);
		arr[i] = num;
	}
}

var numStudents = 10;
var students = new Array(numStudents);
genStuDate(students);
console.log('Student data:\n');
for(var i = 0; i < students.length; ++i) {
	console.log(students[i] + ' -> ' +students[i].substr(0,8) + ' ' +
		students[i].substr(9));
}
console.log('\n\nData distribution:\n');
var hTable = new HashTable();
for (var j = 0; j < students.length; ++j) {
	hTable.put(students[j]);
}
hTable.showDistro();
