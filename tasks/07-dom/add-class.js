function addClass(node, classToAdd){
	'use strict';

	var arrOfClasses = [];

	if (node.className) {
		arrOfClasses = node.className.split(' ');
	};

	for(var i = 0; i < arrOfClasses.length; i += 1) {
		if(arrOfClasses[i] === classToAdd) {
			return;
			}
	};

	if (arrOfClasses.length === 0) {
		node.className += classToAdd;
	} else {
		node.className += ' ' + classToAdd;
	};
		return;
}
