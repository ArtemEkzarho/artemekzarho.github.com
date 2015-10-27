'use strict';

document.addEventListener("DOMContentLoaded", main, false);

function main () {
    var reviewBtn = document.querySelector('#reviewBtn'),
        editBtn = document.querySelector('#editBtn'),
        editForm = document.querySelector('#editForm'),
        reviewForm = document.querySelector('#reviewForm'),

        nameInput = document.querySelector('#nameInput'),
        lastnameInput = document.querySelector('#lastnameInput'),
        ageInput = document.querySelector('#ageInput'),
        genderInput = document.querySelector('#genderInput'),
        emailInput = document.querySelector('#emailInput'),
        skypeInput = document.querySelector('#skypeInput'),

        person = new Person({
            name: 'Artem',
            lastName: 'Ekzarkho',
            age: '18',
            gender: 'boy',
            email: 'artem.ekzarho@gmail.com',
            skype: 'x23-rd23'
        }),

        inputs = document.querySelectorAll('.inputCell input'),
        personKeys = person().toArray();    

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = personKeys[i];
    }

    reviewBtn.addEventListener('click', goToReview, false);
    editBtn.addEventListener('click', goToEdit, false);

    function goToReview () {
        editForm.className = 'editForm hide';
        reviewForm.className = 'reviewForm';

        person().setData();
        person().getData();
    }    

    function goToEdit () {
        editForm.className = 'editForm';
        reviewForm.className = 'reviewForm hide';
    }
}
