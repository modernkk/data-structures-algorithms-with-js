'use strict';

var q = new Queue();
q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jennifer');
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log('front of queue: ' + q.front());
console.log('back of queue: ' + q.back());
