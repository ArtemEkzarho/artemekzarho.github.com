'use strict';

function StudentView ($wrap, student) {
    var tpl = '<td><%=name%></td>' +
        '<td><%=surname%></td>' +
        '<td><%=gender%></td>' +
        '<td class="actions"><button class="editBtn" id="person_<%=id%>">Edit</button></td>',
        finalRow,
        model = student;

        

    render(model.getStudentData());

    $wrap.find('.editBtn').on('click', function () {
        mediator.publish('showEditView', model);
    });

    mediator.subscribe('rerenderStudentView', function (data) {
        if (data.getStudentData().id === model.getStudentData().id) {
            render(data.getStudentData());
        }
    });

    function render (list) {
        finalRow = helpers.templater(tpl, list);

        $wrap.empty();
        $wrap.append(finalRow);
    }

    return this;
}