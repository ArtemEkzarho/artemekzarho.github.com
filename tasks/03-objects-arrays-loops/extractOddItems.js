function extractOddItems(arr) {
	'use strict';
	var resultArr = [];

	for(var i = 0; i < arr.length; i += 1) {
		//если четный, то следующая итерация
		if (i % 2 === 0) continue;
		resultArr.push(arr[i]);
	}
	return resultArr;
}