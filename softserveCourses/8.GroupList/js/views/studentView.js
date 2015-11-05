'use strict';

function StudentView ($wrap, student) {
    var tpl = '<td><%=name%></td>' +
        '<td><%=surname%></td>' +
        '<td><%=gender%></td>' +
        '<td class="actions"><button class="editBtn" id="person_<%=id%>">Edit</button></td>',
        finalRow;

    render(student.getStudentData());

    $wrap.find('.editBtn').on('click', function () {
        mediator.publish('showEditView', student);
    });

    mediator.subscribe('rerenderStudentView', function (data) {
        render(data.getStudentData());
        console.log($wrap);
    });

    function render (list) {
        finalRow = helpers.templater(tpl, list);

        $wrap.empty();
        $wrap.append(finalRow);
    }

    return this;
}