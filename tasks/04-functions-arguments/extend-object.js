'use strict';

function extend() {
	var obj = {};
	for(var i = 0; i < arguments.length; i++){
		for(var key in arguments[i]){
			obj[key] = arguments[i][key];
		}
	}
	return obj;
}
