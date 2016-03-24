'use strict';

var names = new List();
names.append('Clayton');
names.append('Raymond');
names.append('Cynthia');
names.append('Jennifer');
names.append('Bryan');
names.append('Danny');
console.log(names.toString() + '');
names.front();
console.log(names.getElement());

names.next();
console.log(names.getElement());

names.next()
names.next();
names.prev();
console.log(names.getElement());

var retStr = '';
for (names.front(); names.hasNext(); names.next()) {
	retStr += names.getElement() + ' ';
}
console.log(retStr);
retStr = '';
for (names.end(); names.hasPrev(); names.prev()) {
	retStr += names.getElement() + ' ';
}
console.log(retStr);

