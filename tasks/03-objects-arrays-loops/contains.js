function contains(where, what) {
	'use strict';
	var result = 0,
	//сортируем вызванные массивы
		sortWhere = where.sort(),
		sortWhat = what.sort()

	//проходимся по what массиву
	for(var i = 0; i < sortWhat.length; i += 1){
		//и по where
		for(var j = 0; j < sortWhere.length; j += 1){
			//и сравниваем есть ли во всем where массиве эелемнты похожие на элементы на what
			if(sortWhat[i] === sortWhere[j]) {
				//и если есть то записываем +1
				result += 1;
				//удаляем найденный элемент, что бы в следующей итерации его уже не сравнивать
				sortWhere.splice(j, 1); 
			}
			//если похожие элементы были, то прериываем итерацию и начинаем со следующего элемента
			if(sortWhat[i] === sortWhere[j]) break; 
		}
	}
		//и теперь сравниваем  количество равных эелементов с длинной what массива
	if(result === sortWhat.length) {
		return true;
	} else {
		return false;
	}
}