function Counter(initialValue) {
	if (initialValue === undefined){
		initialValue = 1;
	}
	this.initialValue = initialValue;
}

Counter.prototype.inc = function(num){
	if (num === undefined) {
		num = 1;
	}
	this.initialValue += num;
}

Counter.prototype.dec = function(num){
	if (num === undefined) {
		num = 1;
	}
	this.initialValue -= num;
}

Counter.prototype.get = function(){
	return this.initialValue;
}

var counter = new Counter(0);