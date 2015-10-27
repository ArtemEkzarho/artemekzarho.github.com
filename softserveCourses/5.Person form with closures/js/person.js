'use strict';

function Person (obj) {
    var name = obj.name,
        lastName = obj.lastName,
        age = obj.age,
        gender = obj.gender,
        email = obj.email,
        skype = obj.skype;

    return function () {
        return {
            name: name,
            lastName: lastName,
            age: age,
            gender: gender,
            email: email,
            skype: skype,
            toArray: function () {
                return [name, lastName, age, gender, email, skype];
            },
            setData: function () {
                name = nameInput.value;
                lastName = lastnameInput.value;
                age = ageInput.value;
                gender = genderInput.value;
                email = emailInput.value;
                skype = skypeInput.value;
            },
            getData: function () {
                var textPlaces = document.querySelectorAll('.textCell p'),
                    keys = this.toArray();

                for (var i = 0; i < textPlaces.length; i++) {
                    textPlaces[i].innerHTML = keys[i];
                }
            }
        }
    }
}
