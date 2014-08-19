var guess = 3; // The main number that will make come true
var hypothesis = prompt('Введите число от 0 до 10:'); 

if (!isNaN(hypothesis)) {

	var userGuess = parseInt(hypothesis, 10);

	if (userGuess <= 10 && userGuess >= 0) {

		if (userGuess === guess) {
			console.log('Пользователь угадал число!');
		} else {
			console.log('Пользователь не угадал число.');
		}
	} else if (hypothesis === '') {
		console.log('Пользователь забыл ввести данные.');		
		// User press ok-key but not enter data
	} else if (hypothesis === null) {
		console.log('Пользователь отказался ввести данные.');	
		// User press cancel
	} else {
		console.log('Пользователь ввел число не из предложенного диапазона.'); 
	}

} else {
	console.log('Пользователь ввел неверные данные.');			
}
