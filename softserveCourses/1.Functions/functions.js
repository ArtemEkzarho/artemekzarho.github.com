'use strict';

function getMax (first, second, third) {
    var maxNumber = first,
    	numbers = [first, second, third];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }

    return maxNumber;
}

function getMaxElemet (arr) {
    var maxElemet = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElemet) {
            maxElemet = arr[i];
        }
    }

    return maxElemet;
}

function getMinIndex (arr) {
    var minElement = arr[0],
        minIndex = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i];
            minIndex = i;
        }
    }

    return minIndex;
}

function copyArray (arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}

// false - decreasing, true - increasing
function sortWithDiraction (arr, direction) {
    if (direction) {
        return arr.sort(function(a, b) {
            return (a > b)? 1: -1;
        });
    } else {
        return arr.sort(function(a, b) {
            return (a < b)? 1: -1;
        });
    }
}
//fixed indents
