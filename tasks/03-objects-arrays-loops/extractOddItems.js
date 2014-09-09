function extractOddItems(arr) {
	'use strict';
	var resultArr = [];

	for(var i = 0; i < arr.length; i += 1) {
		if (i % 2 === 0) continue;
		resultArr.push(arr[i]);
	}
	return resultArr;
}