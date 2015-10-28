'use strict';

function View () {
    var list = helpers.getEl('#students tbody'),
        finalTemplate= '',
        students = [
            new Person('Artem', 'Ekzarkho', 'boy'),
            new Person('Yevheniia', 'Kryschyk', 'girl'),
            new Person('Yulyia', 'Lur\'eva', 'girl'),
            new Person('Dmytro', 'Shashkov', 'boy'),
            new Person('Marian', 'Kotsylovs\'kyi', 'boy'),
            new Person('Oleksandr', 'Poltorak', 'boy'),
            new Person('Dmytryi', 'Hun\'ko', 'boy'),
            new Person('Oleksandr', 'Den\'ha', 'boy')
        ],
        row = '<tr>' +
                '<td><%=name%></td>' +
                '<td><%=surname%></td>' +
                '<td><%=gender%></td>' +
            '</tr>';

    render();

    function render () {
        students.forEach(function (student){
            finalTemplate += templater(row, student);
        });

        list.innerHTML = finalTemplate;
    }

    function templater (template, list) {
        var completedRow = template,
            key;

        for (key in list) {
            completedRow = completedRow.replace('<%=' + key + '%>', list[key]);
        }

        return completedRow;
    }

    return this;
}
