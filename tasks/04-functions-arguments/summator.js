function summ() {
	var allArg = 0;
		for (var i=0; i<arguments.length; i++) {
    	allArg+=+arguments[i];
		}
		return allArg
}
summ(2,3,4,5)