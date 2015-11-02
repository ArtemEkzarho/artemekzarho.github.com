'use strict'

var helpers = (function (){
    function getEl (selector) {
        return document.querySelector(selector);
    }

    function getAllEl (selector) {
        return document.querySelectorAll(selector);
    }

    function templater (template, list) {
        var completedRow = template,
            key;

        for (key in list) {
            completedRow = completedRow.replace('<%=' + key + '%>', list[key]);
        }

        return completedRow;
    }

    function forEach (collection, func) {
        [].forEach.call(collection, func);
    }

    function getModelById (id, students) {
        var id = +id,
            studentJSON,
            result;

        helpers.forEach(students, function (student) {
            studentJSON = student.toFullJSON();
            if(studentJSON.id === id) {
                result = student;
            }
        });

        return result;
    }

    function render (tpl, model, node) {
        node.innerHTML = helpers.templater(tpl, model);
    }

    return {
        getEl: getEl,
        getAllEl: getAllEl,
        templater: templater,
        forEach: forEach,
        getModelById: getModelById,
        render: render
    }
}());
