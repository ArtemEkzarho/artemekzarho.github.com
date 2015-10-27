'use strict';

document.addEventListener("DOMContentLoaded", initList);

var students = [
    new Student('Artem', 'Ekzarkho', 'boy'),
    new Student('Yevheniia', 'Kryschyk', 'girl'),
    new Student('Yulyia', 'Lur\'eva', 'girl'),
    new Student('Dmytro', 'Shashkov', 'boy'),
    new Student('Marian', 'Kotsylovs\'kyi', 'boy'),
    new Student('Oleksandr', 'Poltorak', 'boy'),
    new Student('Dmytryi', 'Hun\'ko', 'boy'),
    new Student('Oleksandr', 'Den\'ha', 'boy')
];

function initList () {
    var list = document.getElementById('students'),
        tr;

    for (var i = 0; i < students.length; i++) {        
        tr = document.createElement('TR');
        createTd(students[i].name, tr);
        createTd(students[i].surname, tr);
        createTd(students[i].gender, tr);

        list.appendChild(tr);    
    }
}

function createTd (str, parent) {
    var td = document.createElement('TD');
    td.innerHTML = str;

    parent.appendChild(td);
}

function Student (name, surname, gender) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;

    return this;
}
