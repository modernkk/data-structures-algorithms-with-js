'use strict';

function max(a, b) {
	return (a > b) ? a : b;
}

function knapsack(capacity, size, value, n) {
	if (n === 0 || capacity === 0) {
		return 0;
	}
	if (size[n - 1] > capacity) {
		return knapsack(capacity, size, value, n - 1);
	} else {
		return max(value[n - 1] +
				knapsack(capacity - size[n - 1], size, value, n - 1),
				knapsack(capacity, size, value, n - 1)
			);
	}
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
console.log(knapsack(capacity, size, value, n));

function dKnapsack(capacity, size, value, n) {
	var K = [];
	for (var i = 0; i <= capacity + 1; i++) {
		K[i] = [];
	}
	for (var j = 0; j <= n; j++) {
		for (var w = 0; w <= capacity; w++) {
			if (j === 0 || w === 0) {
				K[j][w] = 0;
			} else if (size[j - 1] <= w) {
				K[j][w] = max(value[j - 1] + K[j - 1][w - size[j - 1]],
						K[j - 1][w]
					);
			} else {
				K[j][w] = K[j - 1][w];
			}
			console.log(K[j][w] + ' ');
		}
	}
	return K[n][capacity];
}

console.log(dKnapsack(capacity, size, value, n));

function ksack(values, weights, capacity) {
	var load = 0;
	var i = 0;
	var w = 0;
	while (load < capacity && i < 4) {
		if (weights[i] <= (capacity - load)) {
			w += values[i];
			load += weights[i];
		} else {
			var r = (capacity - load) / weights[i];
			w += r * values[i];
			load += weights[i];
		}
		++i;
	}
	return w;
}

var items = ['A', 'B', 'C', 'D'];
var values = [50, 140, 60, 60];
var weights = [5, 20, 10, 12];
var capacity = 30;
console.log(ksack(values, weights, capacity));
