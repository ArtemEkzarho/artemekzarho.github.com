
function createCachable(func) {
	'use strict';
	var rememberValue;
	var rememberResult;

	return function(num){
		//проверяем был ли этот аргумент в прошлый раз
		if(rememberValue === num) {
			//если был то выводим прошлый результат
			return rememberResult;
		}

		//если не был, то..
		rememberValue = num;
		rememberResult = func(num);
  		return rememberResult;
  }
}
