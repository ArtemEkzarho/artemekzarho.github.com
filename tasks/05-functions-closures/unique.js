function getUnique(arr) {
	'use strict';
	var resultArr = [];

	nextInput:
	for(var i = 0; i < arr.length; i += 1){
		var tempStr = arr[i];
		for(var j = 0; j < resultArr.length; j += 1){
			if(resultArr[j] === tempStr) continue nextInput;
		}
	
		resultArr.push(tempStr);
	}
	return resultArr;
}