function createSummator(initialValue) {
	if(initialValue === undefined){
		initialValue = 0;
	}

	return {
		inc: function(num){
			if(num === undefined){
				num = 1;
			}
			initialValue += num;
		},

		dec: function(num){
			if(num === undefined){
				num = 1;
			}
			initialValue -= num;
		},

		get: function(){
			return initialValue;
		}
	}
}