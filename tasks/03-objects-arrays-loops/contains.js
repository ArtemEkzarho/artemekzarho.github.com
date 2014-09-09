function contains(where, what) {
	'use strict';
	var result = 0,
	//sort caused arrays
		sortWhere = where.sort(),
		sortWhat = what.sort()

	
	for(var i = 0; i < sortWhat.length; i += 1){
		for(var j = 0; j < sortWhere.length; j += 1){
			if(sortWhat[i] === sortWhere[j]) {
				result += 1;
				sortWhere.splice(j, 1); 
			}
			if(sortWhat[i] === sortWhere[j]) break; 
		}
	}
	if(result === sortWhat.length) {
		return true;
	} else {
		return false;
	}
}