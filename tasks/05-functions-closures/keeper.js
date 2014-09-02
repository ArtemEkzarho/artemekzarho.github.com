function createKeeper() {
'use strict';
	

var obj = {
	put: function(key, value){
  		obj[key] = value;
    },

	get: function(key){
    	if(key === {}) {
	   		return null;     
	    } else {
	    	return obj[key];
	    }
	}
}
	return obj;
}