function isInArray() {
	var setOfElements = [];
	var setOfLastElement = [];
	var currentElementsContains;
	setOfLastElement = arguments[arguments.length-1];
	for(var i = 0;i<arguments.length-1;i++){
		setOfElements.push(arguments[i]);
	}
	for(var i = 0;i < setOfElements.length;i++){
		currentElementsContains = false;
		for(j = 0;j<setOfLastElement.length;j++){
			if(setOfLastElement[j] === setOfElements[i]){
				currentElementsContains = true;
			}
		}
		if (!currentElementsContains){
			return false;
		}
	}
	return true
}

isInArray(1, 4, [1,2,2,2])
