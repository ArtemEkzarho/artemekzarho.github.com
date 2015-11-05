'use strict';

function EditView ($place, model) {
	var editableTpl = 
        '<p><b class="inputLabel">Name: </b><input type="text" name="name" value="<%=name%>"></p>'+
        '<p><b class="inputLabel">Surname: </b><input type="text" name="surname" value="<%=surname%>"></p>'+
        '<p><b class="inputLabel">Gender: </b><input type="text" name="gender" value="<%=gender%>"></p>'+
        '<p><b class="inputLabel">Age: </b><input type="text" name="age" value="<%=age%>"></p>'+
        '<p><b class="inputLabel">Mail: </b><input type="text" name="mail" value="<%=mail%>"></p>'+
        '<p><b class="inputLabel">Skype: </b><input type="text" name="skype" value="<%=skype%>"></p>'+
        '<p class="btns"><button class="preview">Preview</button><button class="save">Save</button></p>';

    $place.empty();
    $place.append(helpers.templater(editableTpl, model.getStudentData()));

    $('.preview').on('click', function () {
        var $inputs = $('input');

        model.setStudentData($inputs);
        mediator.publish('showPreviewView', model);
    });

    $('.save').on('click', function () {
        var $inputs = $('input');

        model.setStudentData($inputs);
        mediator.publish('rerenderStudentView', model);
    });

    return this;
}