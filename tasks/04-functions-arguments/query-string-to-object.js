function parse(queryString) {
	var newMas;
	var obj = {};
	var mas = queryString.split("&");
	if (mas == "")
		return {}
	for(var i = 0;i<mas.length;i++){
		newMas = mas[i].split("=");	
				obj[newMas[0]] = newMas[1];				
	}
	return obj
}
parse('true=10&foo=bar');
//Не смог реализовать проверку на число в данной функции. Были варианты, но правильно подставить для newMas[0] и newMas[1] не удалось.
