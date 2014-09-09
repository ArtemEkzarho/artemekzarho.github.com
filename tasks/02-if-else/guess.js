'use strict';

var guessNumber = 4,
	userNumber = prompt('Введите число от 1 до 10',''),
	parseNumber = parseInt(userNumber, 10); 


if (userNumber !== null) {
	if (!isNaN(parseNumber) && !isNaN(+userNumber)) { 
		if((parseNumber <= 10) && (parseNumber >= 0)){
			if(parseNumber === guessNumber) {
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

