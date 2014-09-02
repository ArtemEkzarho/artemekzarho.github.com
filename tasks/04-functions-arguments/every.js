'use strict';

function every(arr, func) {
	for(var i = 0 ; i < arr.length + 1 ; i++){
		return func(arr[i], i, arr);
	}
}
