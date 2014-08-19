function partQuery(value) {
	partString = '';
	if ((typeof(value) !== 'object') && (typeof(value) !== 'function')) {
		partString = value.toString();
		if (value === null) {
			partString = "null";
		}
		if (value === undefined) {
			partString = "undefined";
		}
		return partString;
	}
}

function toQueryString(obj) {
	// if obj type is not object, return empty string
	if ((typeof(obj) !== 'object')) {
		return '';
	}

	var query = '';
	var keyString = '';
	var valueString = '';
	for (var key in obj) {
		//turn the property into a string
		//if the key is an object, omit it
		if (typeof(key) === 'object') {
			keyString = '';
		} else {
			//otherwise,transform key into a string using partQuery function
			keyString = partQuery(key);
		}

		//if the value is an object, omit it
		var value = obj[key];
		if (typeof(value) === 'object') {
			valueString = '';
		} else {
			//otherwise,transform value into a string using partQuery function
			valueString = partQuery(value);
		}

		query = query + keyString + '=' + valueString + "&";
	}
	query = query.substring(0, query.length - 1);

	return query;
}