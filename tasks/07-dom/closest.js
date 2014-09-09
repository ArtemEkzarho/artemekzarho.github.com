function closest(node, testFunc) {
	'use strict';
	
	while(node && !testFunc(node)) {
		node = node.parentNode;
	}	
	return node;
}