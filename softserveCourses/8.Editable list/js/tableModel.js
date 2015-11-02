'use strict';

function TableModel (personalData) {
    var personalData = personalData;

    this.toShortJSON = function () {
        var json = {};

        json.id = personalData.id;
        json.name = personalData.name;
        json.surname = personalData.surname;
        json.gender = personalData.gender;

        return json;
    };

    this.toFullJSON = function () {
        var json = {};

        json.id = personalData.id;
        json.name = personalData.name;
        json.surname = personalData.surname;
        json.gender = personalData.gender;
        json.age = personalData.age;
        json.mail = personalData.mail;
        json.skype = personalData.skype;

        return json;
    };

    this.set = function (inputs) {
        var keyForPersonalData; 

        helpers.forEach(inputs, function (input) {
            keyForPersonalData = input.name;
            personalData[keyForPersonalData] = input.value;
        });
    }

    return this;
}