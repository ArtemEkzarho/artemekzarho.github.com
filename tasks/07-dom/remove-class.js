function removeClass(node, classToRemove) {
	'use strict';

	var arrOfClass = [];
	var resultArr = [];

	if (node.className) {
		arrOfClass = node.className.split(' ');
	};

	for(var i = 0; i < arrOfClass.length; i += 1) {
		if(arrOfClass[i] !== classToRemove) {
			resultArr.push(arrOfClass[i]);
		}
	}

	node.className = resultArr.join(' ');
}