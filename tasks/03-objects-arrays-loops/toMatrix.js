function toMatrix(data, rowSize) {
	'use strict';
  	var resultArr = [];
  	for (var i = 0; i < data.length; i += rowSize) {
  		resultArr.push(data.slice(i,(i + rowSize)));
	}
	return resultArr;
}