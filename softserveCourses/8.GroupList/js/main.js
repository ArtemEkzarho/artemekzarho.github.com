'use strict';

$(main);

var mediator = new Mediator

function main () {
    var students = [
        new Student ({
            id: 0,
            name: 'Artem',
            surname: 'Ekzarkho', 
            gender: 'boy'
        }),
        new Student ({
            id: 1,
            name: 'Yevheniia', 
            surname: 'Kryschyk',
            gender: 'girl'
        }),
        new Student ({
            id: 2,
            name: 'Yulyia',
            surname: 'Lur\'eva',
            gender: 'girl'
        }),
        new Student ({
            id: 3,
            name: 'Dmytro',
            surname: 'Shashkov',
            gender: 'boy'
        }),
        new Student ({
            id: 4,
            name: 'Marian',
            surname: 'Kotsylovs\'kyi',
            gender: 'boy'
        }),
        new Student ({
            id: 5,
            name: 'Oleksandr',
            surname: 'Poltorak', 
            gender: 'boy'
        }),
        new Student ({
            id: 6,
            name: 'Dmytryi',
            surname: 'Hun\'ko',
            gender: 'boy'
        }),
        new Student ({
            id: 7,
            name: 'Oleksandr',
            surname: 'Den\'ha',
            gender: 'boy'
        })
    ],

    $tablePlace = $('#students tbody'),
    $editableForm = $('#editableForm'),
    controller = new Controller($tablePlace, $editableForm, students);
}