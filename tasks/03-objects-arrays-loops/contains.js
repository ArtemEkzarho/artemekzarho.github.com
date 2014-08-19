function contains(where, what) {
	//if "where" is not an array: nowhere to search in 
	if (!(where instanceof Array)) {
		return false;
	}

	//if "what" is not an array
	if (!(what instanceof Array)) {
		//if "what" is null or undefined or NaN - return false
		if ((what===null)||(what===undefined)||(isNan(what))) {
			return false;
		}
		//if "what" is a normal single variable
		for (var i=0;i<where.length;i++) {
			if (where[i]===what) {
				return true;
			}
		}
	}
	//"what" is an array
	else {
		//"what" is an empty set and is part of any other array
		if (what.length===0) {
			return true;
		}
		//"what" is not an empty set and "where" is an array
		var elementsFound = 0;
		for (var j=0;j<what.length;j++) {
			var elementFound = 0;
			for (var i=0;i<where.length;i++) {
				if (what[j]===where[i]) {
					elementFound=1;
				}
			}
			elementsFound += elementFound;
		}
		//all elements of "what" were found in "where"
		if (elementsFound===what.length) {
			return true;
		}
		else
		{
			return false;
		}
	}
}