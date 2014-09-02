function createKeeper() {
	var storage = [];

	return {
		put: function(key, value){
			for(var i = 0; i < storage.length; i += 1){
				if (storage[i][0] === key) {
					storage[i][0] = value;
					return;
				}
			}
			storage.push([key, value]);
		},
		get: function (key){
			for(var i = 0; i < storage.length; i += 1){
				if (storage[i][0] === key) {
					return storage[i][1];
				}
			}
			return null;
		}
	}
}


function createCachable(func) {
	var keeper = createKeeper();
	return function(arg) {
		var value = keeper.get(arg);
		var result;

		if (value !== null) {
			return value
		} else {
			result = func(arg);
			keeper.put(arg, result)
			return result;
		}
	}
}