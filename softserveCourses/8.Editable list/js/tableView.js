'use strict';

function TableView (parentNode, students) {
    var finalTpl = '',
        row = '<tr>' +
                '<td><%=name%></td>' +
                '<td><%=surname%></td>' +
                '<td><%=gender%></td>' +
                '<td class="actions"><button class="editBtn" id="person_<%=id%>">Edit</button></td>'+
            '</tr>';

    render();
    addHandlers();

    function render () {
        students.forEach(function (student){
            finalTpl += helpers.templater(row, student.toShortJSON());
        });

        parentNode.innerHTML = finalTpl;
    }

    function addHandlers () {
        var btns = helpers.getAllEl('.editBtn');

        helpers.forEach(btns, function (item) {
            item.addEventListener('click', edit, false);
        });
    }

    function edit (e) {
        var modelId = e.target.id.split('_')[1],
            formController = new FormController(modelId, parentNode);
    }

    return this;
}
