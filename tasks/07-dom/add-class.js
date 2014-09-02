function addClass(node, classToAdd){
	'use strict';

	var arrOfClasses = [];

	if (node.className) {
		//сначала сплитим все содержимое атрибута class по пробелам
		arrOfClasses = node.className.split(' ');
	};

	//получаем массив массивов
	//пробегаемся по всем массивам в поисках совпадений, если они есть, то выходим из функции
	for(var i = 0; i < arrOfClasses.length; i += 1) {
		if(arrOfClasses[i] === classToAdd) {
			return;
			}
	};

	// если совпадений нет, то добавляем через пробел заданный класс
	if (arrOfClasses.length === 0) {
		node.className += classToAdd;
	} else {
		node.className += ' ' + classToAdd;
	};
		return;
}
