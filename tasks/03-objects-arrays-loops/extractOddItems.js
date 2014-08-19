function extractOddItems(arr) {
	//if arr is not an array-like object or array, we return empty array
	//array-like object and array have length property; we should exclude functions which also have length 
	//but are not array-like objects
	if ((!('length' in arr))||(typeof arr === 'function')) {
		return {};
	}
	//if arr length is null or undefined, we return empty array
	if ((arr.length===undefined)||(arr.length===0)) {
		return {};
	}

	//collect elements with odd indexes
	var oddItems = [];
	for (var i=0;i<arr.length;i++) {
		if (i%2===1) {
			oddItems.push(arr[i]);
		}
	}
	return oddItems;	
}