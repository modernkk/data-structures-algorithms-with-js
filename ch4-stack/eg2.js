'use strict';

function mulBase(num, base) {
	var s = new Stack();
	do {
		s.push(num % base);
		num = Math.floor(num /= base);
	} while (num > 0);
	var converted = '';
	while (s.length() > 0) {
		converted += s.pop();
	}
	return converted;
}

var num = 32;
var base = 2;
var newnum = mulBase(num, base);
console.log(num +' converted to base ' + base + ' is ' + newnum);
var num = 125;
var base = 8;
var newnum = mulBase(num, base);
console.log(num +' converted to base ' + base + ' is ' + newnum);