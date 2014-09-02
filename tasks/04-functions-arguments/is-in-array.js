'use strict';

function isInArray() {
	var setOfElements = [],
		setOfLastElement = [],
		currentElementsContains;

	setOfLastElement = arguments[arguments.length - 1];
	for (var i = 0; i < arguments.length - 1; i++){
		setOfElements.push(arguments[i]);
	}
	for (var i = 0; i < setOfElements.length; i++){
		currentElementsContains = false;
		for (j = 0; j < setOfLastElement.length; j ++){
			if (setOfLastElement[j] === setOfElements[i]){
				currentElementsContains = true;
			}
		}
		if (!currentElementsContains){
			return false;
		}
	}
	return true
}
