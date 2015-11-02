'use strict';

function FormController (modelId, tableWrap) {
    var parentNode = helpers.getEl('#editableForm'),
        editview = new EditView(parentNode, modelId, tableWrap);

    return this
}