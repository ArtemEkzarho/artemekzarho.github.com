
function createCachable(func) {
	'use strict';
	var rememberValue;
	var rememberResult;

	return function(num){
		if(rememberValue === num) {
			return rememberResult;
		}

		rememberValue = num;
		rememberResult = func(num);
  		return rememberResult;
  }
}
