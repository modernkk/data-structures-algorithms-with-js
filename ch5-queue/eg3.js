'use strict';

var queues = [];
for (var i = 0; i < 10; ++i) {
  queues[i] = new Queue();
}

var nums = [];
for (var j = 0; j < 10; ++j) {
  nums[j] = Math.floor(Math.floor(Math.random() * 101));
}
console.log('Before radix sort:');
dispArray(nums);

distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log('After radix sort:');
dispArray(nums);
