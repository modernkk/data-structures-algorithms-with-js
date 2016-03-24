'use strict';

var pnumbers = new HashTable();
pnumbers.put2('modernkk0', '18500462217');
pnumbers.put2('modernkk1', '18400462257');
pnumbers.put2('modernkk2', '18300461257');

pnumbers.showDistro();
for (var i = 0; i < 3; i++) {
	var name = 'modernkk' + i;
	console.log(name + '\'s number is ' + pnumbers.get(name) + '\n');
}
