function createObject(keys, values) {
	//determine whether keys and values are arrays, simple variables, etc.  
	var typeKeys = typeof(keys);
	var typeValues = typeof(values);

	// if either keys or values variable is a function, return empty object due to wrong input 
	if ((typeKeys==='function')||(typeValues==='function')) {
		return {};
	}
	// if keys variable is null, NaN or undefined, return empty object due to wrong input 
	if ((typeKeys==='undefined')||(keys===null)||((typeKeys!=='object')&&(isNaN(keys)))) {
		return {};
	}

	//if keys is an object but is not an array at this point, return empty array due to wrong input
	if ((keys instanceof Object)&&(!(keys instanceof Array))) {
		return {};
	}

	// if values variable is null, NaN or undefined, newValues array is set to empty array 
	if ((typeValues==='undefined')||(values===null)||((typeValues!=='object')&&(isNaN(values)))) {
		values = [];
	}

	//if values is an object but is not an array at this point, values array is set to empty array
	if ((values instanceof Object)&&(!(values instanceof Array))) {
		values = [];
	}	

	//if either values or keys array is a variable, it will be converted into an array of length 1
	var acceptedTypes = ['number','string','boolean'];
	for (var i=0;i<3;i++) {
		if (typeKeys===acceptedTypes[i]) {
			keys = [keys];
		}
		if (typeValues===acceptedTypes[i]) {
			values = [values];
		}
	}
	
	//at this point we are sure that we have two arrays, keys and values 
	var lenKeys = keys.length;
	var lenValues = values.length;
	//if keys length is 0, we return empty object
	if ((lenKeys===0)) {
		return {};
	}
	// since keys length > 0, we can finally create an object
	var obj = {};
	//there are more keys than values, so we set the remaining values to undefined
	if (lenKeys > lenValues) {
		for (var i=0;i<lenValues;i++){
			obj[keys[i]]=values[i];
		} 
		for (var i=lenValues;i<lenKeys;i++){
			obj[keys[i]]=undefined;
		}		
	//the number of values is the same as key number or greater, so we ignore extra values
	} else {
		for (var i=0;i<lenKeys;i++){
			obj[keys[i]]=values[i];
		}
	}
	return obj;
}