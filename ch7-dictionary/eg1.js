'use strict';

var pbook = new Dictionary();
pbook.add('Mike', '123');
pbook.add('David', '456');
pbook.add('Cynthia', '789');
console.log('David\'s extension: ' + pbook.find('David'));
pbook.remove('David');
pbook.showAll();
console.log('count: ' + pbook.count());
pbook.clear();
console.log('count: ' + pbook.count());

