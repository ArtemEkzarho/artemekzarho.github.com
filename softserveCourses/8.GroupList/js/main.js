'use strict';

$(main);

var mediator = new Mediator(),
    students = [{
            id: 0,
            name: 'Artem',
            surname: 'Ekzarkho', 
            gender: 'boy'
        },{
            id: 1,
            name: 'Yevheniia', 
            surname: 'Kryschyk',
            gender: 'girl'
        },{
            id: 2,
            name: 'Yulyia',
            surname: 'Lur\'eva',
            gender: 'girl'
        },{
            id: 3,
            name: 'Dmytro',
            surname: 'Shashkov',
            gender: 'boy'
        },{
            id: 4,
            name: 'Marian',
            surname: 'Kotsylovs\'kyi',
            gender: 'boy'
        },{
            id: 5,
            name: 'Oleksandr',
            surname: 'Poltorak', 
            gender: 'boy'
        },{
            id: 6,
            name: 'Dmytryi',
            surname: 'Hun\'ko',
            gender: 'boy'
        },{
            id: 7,
            name: 'Oleksandr',
            surname: 'Den\'ha',
            gender: 'boy'
        }];

function main () {
    var group = new Group(students),
        $tablePlace = $('#students tbody'),
        $editableForm = $('#editableForm'),
        controller = new Controller($tablePlace, $editableForm, group.getModels());
}