'use strict';

function summ() {
	var allArg = 0;
		for (var i = 0; i < arguments.length; i++) {
    	allArg += +arguments[i];
		}
		return allArg;
}
