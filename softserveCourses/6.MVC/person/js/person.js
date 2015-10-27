'use strict';

function Person (obj) {
    //i think that this variable is not needed, because 
    //it and its keys are not used singly in next code
    var data = obj;

    this.toArray = function () {
        var result = [],
            key;

        for (key in data) {
            result.push(data[key]);
        }
        
        return result;
    };
      
    this.setData = function (inputs) {
        var i = 0,
            key;

        for (var key in data) {
            data[key] = inputs[i].value;
            i++;
        }    
    };

    this.getData = function (textPlaces) {
        var keys = this.toArray();

        Array.prototype.forEach.call(textPlaces, function (item, i, arr) {
            arr[i].innerHTML = keys[i];
        });    
    };

    return this;
}
