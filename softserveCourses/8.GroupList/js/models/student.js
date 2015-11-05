'use strict';

function Student (studentData) {
    var studentData = studentData;

    this.getStudentData = function () {
        return studentData;
    }

    this.setStudentData = function ($inputs) {
        var keyForStudentData;

        $inputs.each(function (index, input) {
            keyForStudentData = input.name;
            studentData[keyForStudentData] = input.value;
        });
    }

    return this;
}