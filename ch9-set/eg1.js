'use strict';

var names = new Set();
names.add('David');
names.add('Jennifer');
names.add('Cynthia');
names.add('Mike');
names.add('Raymond');
if (names.add('Mike')) {
	console.log('Mike added');
} else {
	console.log('Can\'t add Mike, must aleady be in set');
}
names.show();
var removed = 'Mike';
if (names.remove(removed)) {
	console.log(removed + ' removed');
} else {
	console.log(removed + ' not removed');
}
names.add('Clayton');
names.show();
removed = 'Asia';
if (names.remove('Mike')) {
	console.log(removed + ' removed');
} else {
	console.log(removed + ' not removed');
}
