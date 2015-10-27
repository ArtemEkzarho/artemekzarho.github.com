'use strict';

function View () {
    var person = new Person({
            name: 'Artem',
            lastName: 'Ekzarkho',
            age: '18',
            gender: 'boy',
            email: 'artem.ekzarho@gmail.com',
            skype: 'x23-rd23'
        }),
        personKeys = person.toArray(),
        editForm = getEL('#editForm'),
        reviewForm = getEL('#reviewForm'),
        reviewBtn = getEL('#reviewBtn'),
        editBtn = getEL('#editBtn'),
        inputs = getAllEl('.inputCell input');

    render();

    reviewBtn.addEventListener('click', goToReview, false);
    editBtn.addEventListener('click', goToEdit, false);

    function render () {
        Array.prototype.forEach.call(inputs, function (item, i, arr) {
            arr[i].value = personKeys[i];
        });
    } 

    function goToReview () {
        var inputs = getAllEl('.inputCell input'),
            textPlaces = getAllEl('.textCell p');

        editForm.className = 'editForm hide';
        reviewForm.className = 'reviewForm';

        person.setData(inputs);
        person.getData(textPlaces);
    }    

    function goToEdit () {
        editForm.className = 'editForm';
        reviewForm.className = 'reviewForm hide';
    }

    return this;
}