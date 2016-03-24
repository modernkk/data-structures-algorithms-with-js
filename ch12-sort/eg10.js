'use strict';

var a = [];
for (var i = 0; i < 10 ; i++) {
	a[i] = Math.floor(Math.random() * 100 + 1);
}
console.log(a.toString());
a = qSort(a);
console.log(a.toString());