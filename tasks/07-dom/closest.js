function closest(node, testFunc) {
	'use strict';

	//постоянно берем родителя пока тестовая функция не вернет тру
	while(node && !testFunc(node)) {
		node = node.parentNode;
	}	
	return node;
}