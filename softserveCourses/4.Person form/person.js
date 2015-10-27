'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var reviewBtn = getEl('reviewBtn'),
        editBtn = getEl('editBtn'),
        editForm = getEl('editForm'),
        reviewForm = getEl('reviewForm'),
        nameInput = getEl('nameInput'),
        lastnameInput = getEl('lastnameInput'),
        ageInput = getEl('ageInput'),
        genderInput = getEl('genderInput'),
        emailInput = getEl('emailInput'),
        skypeInput = getEl('skypeInput'),
        person = new Person({
            name: 'Artem',
            lastName: 'Ekzarkho',
            age: '18',
            gender: 'boy',
            email: 'artem.ekzarho@gmail.com',
            skype: 'x23-rd23'
        });

    nameInput.value = person.name;
    lastnameInput.value = person.lastName;
    ageInput.value = person.age;
    genderInput.value = person.gender;
    emailInput.value = person.email;
    skypeInput.value = person.skype;

    reviewBtn.addEventListener('click', goToReview, false);
    editBtn.addEventListener('click', goToEdit, false);

    function goToReview () {
        editForm.className = 'editForm hide';
        reviewForm.className = 'reviewForm';

        person.name = nameInput.value;
        person.lastName = lastnameInput.value;
        person.age = ageInput.value;
        person.gender = genderInput.value;
        person.email = emailInput.value;
        person.skype = skypeInput.value;

        getEl('nameValue').innerHTML = person.name;
        getEl('lastnameValue').innerHTML = person.lastName;
        getEl('ageValue').innerHTML = person.age;
        getEl('genderValue').innerHTML = person.gender;
        getEl('emailValue').innerHTML = person.email;
        getEl('skypeValue').innerHTML = person.skype;
    }

    function goToEdit () {
        editForm.className = 'editForm';
        reviewForm.className = 'reviewForm hide';
    }

});

function getEl (selector) {
    return document.getElementById(selector);
}

function Person (obj) {
    this.name = obj.name;
    this.lastName = obj.lastName;
    this.age = obj.age;
    this.gender = obj.gender;
    this.email = obj.email;
    this.skype = obj.skype;

    return this;
}
