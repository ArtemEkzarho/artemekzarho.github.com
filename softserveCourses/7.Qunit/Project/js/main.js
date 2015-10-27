'use strict';

document.addEventListener("DOMContentLoaded", main, false);

function main () {
    console.log(toPalindrome(5));
} 

function toPalindrome (number) {
    var result = number;
    
    while (isPalindrom(result) === false) {
      result++;
    }

    return result;
}

function isPalindrom (number) {
    var numbers = String(number).split(''),
        halfLength = numbers.length / 2,
        centerIndex = halfLength.toFixed() - 1,
        countdown = centerIndex,
        result,
        i;

        // one digit isn't a palindrom
        if (numbers.length === 1) {
            result = false;
        } else {
        	// check the number of digits, odd or even
            if (numbers.length%2 === 0) {
                for (i = 0; i < numbers.length; i++) {
                    if (i > centerIndex) {
                    	//starting check from the middle of the number
                        if (numbers[i] === numbers[countdown]) {
                            result = true;
                        } else {
                            result = false;
                            break;
                        }
                        // counter for "left" numbers
                        countdown--;
                    }
                } 
            } else {
                for (i = 0; i < numbers.length; i++) {
                    if (i > centerIndex) {
                        countdown--;
                        if (numbers[i] === numbers[countdown]) {
                            result = true;
                        } else {
                            result = false;
                            break;
                        }
                    }
                }
            }            
        }
    return result;    
}