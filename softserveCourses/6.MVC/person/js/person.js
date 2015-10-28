'use strict';

function Person (obj) {
    var data = obj;
      
    this.setData = function (inputs) { 
        var keys = this.getKeys();

        [].forEach.call(inputs, function (item, i, arr) {
            data[keys[i]] = item.value;
        });

    };

    this.getData = function (textPlaces) {
        var values = this.toArray();

        [].forEach.call(textPlaces, function (item, i, arr) {
            arr[i].innerHTML = values[i];
        });    
    };

    this.toArray = function () {
        var result = [],
            key;

        for (key in data) {
            result.push(data[key]);
        }
        
        return result;
    };

    this.getKeys = function () {
        var result = [],
            key;

        for (key in data) {
            result.push(key);
        }

        return result;
    }

    return this;
}
