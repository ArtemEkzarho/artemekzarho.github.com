function toMatrix(data, rowSize) {
	'use strict';
  	var resultArr = [];
  	//пробегаемся по целевому через каждые rowSize элементов
  	for (var i = 0; i < data.length; i += rowSize) {
  		//и отсекаем их и пушим в новый созданный массив
  		resultArr.push(data.slice(i,(i + rowSize)));
	}
	return resultArr;
}