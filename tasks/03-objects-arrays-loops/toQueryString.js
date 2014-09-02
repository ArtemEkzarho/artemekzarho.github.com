function toQueryString(obj) {
	'use strict';

	var resultStr = '';
	for(var key in obj) {
		resultStr += key + '=' + obj[key] + '&';
	}
	resultStr = resultStr.substr(0, resultStr.length - 1);
	return resultStr;
}