function createKeeper() {
	var storage = [];

	//естественно, когда уже все разложили по полочкам, все стало гораздо проще
	//я почему-то думал, что нужно записывать ключи и значения прямо в возвращающийся объект, где геты и путы
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
