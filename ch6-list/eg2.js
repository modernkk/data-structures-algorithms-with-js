'use strict';

var cities = new LList();
cities.insert('上海', 'head');
cities.insert('北京', '上海');
cities.insert('沈阳', '北京');
cities.insert('吉林', '沈阳');
cities.display();
cities.remove('沈阳');
console.log('删除沈阳');
cities.display();
