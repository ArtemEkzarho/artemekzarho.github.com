'use strict';

function TableController () {
    var parentNode = helpers.getEl('#students tbody'),
        tableView = new TableView(parentNode, students);

    return this;
};