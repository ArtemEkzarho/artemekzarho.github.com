'use strict';

function TableView ($place, students) {
    var studentsViews = [];

    render();

    function render () {
        $(students).each(function (index, student) {
            var $tr, 
                studentView;

            $tr = $('<tr></tr>');
            $place.append($tr);

            studentView = new StudentView($tr, student);
            studentsViews.push(studentView);
        }); 
    }

    return this;
}