var next = (function () {
	'use strict';

 	var TEXT_NODE_TYPE = 3;
	var COMMENT_NODE_TYPE = 8;

	return function (node) {
		var nextNode = node;
		  
		while(nextNode.nextSibling && ((nextNode.nodeType === TEXT_NODE_TYPE) || (nextNode.nodeType === COMMENT_NODE_TYPE))) {
			nextNode = nextNode.nextSibling;
		}
		return nextNode.nextSibling;
	}
}());