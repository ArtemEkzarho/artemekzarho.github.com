'use strict';

function PreviewView (parentNode, modelId, tableWrap) {
	var previewTpl = 
		'<p><b class="inputLabel">Name: </b><span><%=name%></span></p>'+
		'<p><b class="inputLabel">Surname: </b><span><%=surname%></span></p>'+
		'<p><b class="inputLabel">Gender: </b><span><%=gender%></span></p>'+
		'<p><b class="inputLabel">Age: </b><span><%=age%></span></p>'+
		'<p><b class="inputLabel">Mail: </b><span><%=mail%></span></p>'+
		'<p><b class="inputLabel">Skype: </b><span><%=skype%></span></p>'+
		'<button class="edit">Edit</button><button class="save">Save</button>',
		model = helpers.getModelById(modelId, students),
		editBtn,
		saveBtn;

	helpers.render(previewTpl, model.toFullJSON(), parentNode);

	editBtn = helpers.getEl('.edit');
	saveBtn = helpers.getEl('.save');
	editBtn.addEventListener('click', goToEdit, false);
	saveBtn.addEventListener('click', saveChanges, false);

	function goToEdit () {
		var editview = new EditView(parentNode, modelId, tableWrap);
	}

	function saveChanges () {
		var tableView = new TableView(tableWrap, students);
	}

	return this;	
}