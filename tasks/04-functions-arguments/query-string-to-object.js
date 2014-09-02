'use strict';

function parse(queryString) {
	var newMas,
		obj = {},
		mas = queryString.split("&");

	if (mas == "") return {};

	for(var i = 0; i < mas.length; i++){
		newMas = mas[i].split("=");	
				obj[newMas[0]] = newMas[1];				
	}
	return obj;
}

