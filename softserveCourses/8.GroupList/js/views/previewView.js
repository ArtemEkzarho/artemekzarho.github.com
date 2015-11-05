'use strict';

function PreviewView ($place, model) {
	 var previewTpl = 
        '<p><b class="inputLabel">Name: </b><span><%=name%></span></p>'+
        '<p><b class="inputLabel">Surname: </b><span><%=surname%></span></p>'+
        '<p><b class="inputLabel">Gender: </b><span><%=gender%></span></p>'+
        '<p><b class="inputLabel">Age: </b><span><%=age%></span></p>'+
        '<p><b class="inputLabel">Mail: </b><span><%=mail%></span></p>'+
        '<p><b class="inputLabel">Skype: </b><span><%=skype%></span></p>'+
        '<p class="btns"><button class="edit">Edit</button><button class="save">Save</button></p>';
	
    $place.empty();
    $place.append(helpers.templater(previewTpl, model.getStudentData()));

    $('.edit').on('click', function () {
        mediator.publish('showEditView', model);
    });

    $('.save').on('click', function () {
        mediator.publish('rerenderStudentView', model);
    });

	return this;
}