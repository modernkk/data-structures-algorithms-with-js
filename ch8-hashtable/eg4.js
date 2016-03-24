'use strict';

var someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
var hTable = new HashTable();
hTable.buildChains();
for (var i = 0; i < someNames.length; ++i) {
	hTable.put3(someNames[i],someNames[i]);
}
hTable.showDistro2();
