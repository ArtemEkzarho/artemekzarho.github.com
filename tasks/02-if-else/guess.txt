'use strict';

var guessNumber = 4,
	userNumber = prompt('Введите число от 1 до 10',''),
	parseNumber = parseInt(userNumber, 10); 


if (userNumber !== null) {
//проверяем нажали ли пользователь "отмена"
	if (!isNaN(parseNumber) && !isNaN(+userNumber)) { 
	//проверяем являеются ли введенные данные числом
		if((parseNumber <= 10) && (parseNumber >= 0)){
		//проверяем попадают ли загаданные числа в заданый диапазон
			if(parseNumber === guessNumber) {
			//проверяем совпадает ли введенное число с загаданным?
				console.log('Паца, ты красава! Угадал!') 
			} else {
				console.log('Не, не угадал =(')
			}
		} else {
			console.log('Не правильно. Введите число в заданном диапазоне.')
		}
	} else {
		console.log('Кажется ты ввел не число, а что-то другое.')
	}
} else {
	console.log('Братка, не хочет играть в угадайку.')
}

