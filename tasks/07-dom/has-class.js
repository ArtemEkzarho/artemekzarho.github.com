function hasClass(node, classToCheck) {
	'use strict';

	var arrOfClasses = [];
	
	if (node.className) {
		arrOfClasses = node.className.split(' ');
	};
	
	for(var i = 0; i < arrOfClasses.length; i += 1 ) {
		if(arrOfClasses[i] === classToCheck) {
			return true;
		}
	}

	return false;
}