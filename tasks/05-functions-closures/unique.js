function getUnique(arr) {
	'use strict';
	var resultArr = [];

	//перебираем и сравниваем все значения в массиве
	nextInput:
	for(var i = 0; i < arr.length; i += 1){
		var tempStr = arr[i];
		for(var j = 0; j < resultArr.length; j += 1){
			if(resultArr[j] === tempStr) continue nextInput;
		}
		//и пушим в результирующий, если не найдено совпадений
		resultArr.push(tempStr);
	}
	return resultArr;
}