'use strict';

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if (!femaleDancers.empty()) {
	console.log(femaleDancers.front().name + 'is waiting to dance.');
}
if (!maleDancers.empty()) {
	console.log(maleDancers.front().name + 'is waiting to dance.');
}

if (maleDancers.count() > 0) {
	console.log('There are ' + maleDancers.count() + ' male dancers waiting to dance.')
}

if (femaleDancers.count() > 0) {
	console.log('There are ' + femaleDancers.count() + ' female dancers waiting to dance.')
}