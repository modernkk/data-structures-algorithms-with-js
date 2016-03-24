'use strict';

function lcs(word1, word2) {
	var max = 0;
	var index = 0;
	var lcsarr = new Array(word1.length + 1);
	for (var i = 0; i <= word1.length; ++i) {
		lcsarr[i] = new Array(word2.length + 1);
		for (var j = 0; j <= word2.length; j++) {
			lcsarr[i][j] = 0;
		}
	}
	for (var m = 0; m <= word1.length; ++m) {
		for (var n = 0; n <= word2.length; ++n){
			if (m === 0 || n === 0) {
				lcsarr[m][n] = 0;
			} else {
				if (word1[m - 1] == word2[n - 1]) {
					lcsarr[m][n] = lcsarr[m - 1][n - 1] + 1;
				} else {
					lcsarr[m][n] = 0;
				}
			}
			if (max < lcsarr[m][n]) {
				max = lcsarr[m][n];
				index = m;
			}
		}
	}
	var str = '';
	if (max === 0) {
		return '';
	} else {
		for (var t = index - max; t <= max; ++t) {
			str += word2[t];
		}
		return str;
	}
}

console.log(lcs('abc', 'adc'));
