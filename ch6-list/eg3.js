'use strict';

var cities = new DLList();
cities.insert('北京', 'head');
cities.insert('上海', '北京');
cities.insert('广州', '上海');
cities.insert('深圳', '广州');
cities.insert('杭州', '深圳');
cities.display();
console.log('');
cities.remove('深圳');
cities.display();
console.log('');
cities.remove('杭州');
cities.display();
console.log('');
cities.dispReverse();
