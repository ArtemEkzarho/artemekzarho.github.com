'use strict';

function EditView (parentNode, modelId, tableWrap) {
	var editableTpl = 
		'<p><b class="inputLabel">Name: </b><input type="text" name="name" value="<%=name%>"></p>'+
		'<p><b class="inputLabel">Surname: </b><input type="text" name="surname" value="<%=surname%>"></p>'+
		'<p><b class="inputLabel">Gender: </b><input type="text" name="gender" value="<%=gender%>"></p>'+
		'<p><b class="inputLabel">Age: </b><input type="text" name="age" value="<%=age%>"></p>'+
		'<p><b class="inputLabel">Mail: </b><input type="text" name="mail" value="<%=mail%>"></p>'+
		'<p><b class="inputLabel">Skype: </b><input type="text" name="skype" value="<%=skype%>"></p>'+
		'<button class="preview">Preview</button><button class="save">Save</button>',
		model = helpers.getModelById(modelId, students),
		previewBtn,
		saveBtn;

	helpers.render (editableTpl, model.toFullJSON(), parentNode);

	previewBtn = helpers.getEl('.preview');
	saveBtn = helpers.getEl('.save');
	previewBtn.addEventListener('click', goToPreview, false);
	saveBtn.addEventListener('click', saveChanges, false);


	function goToPreview () {
		var inputs = helpers.getAllEl('input'),
			preview;

		model.set(inputs);

		preview = new PreviewView(parentNode, modelId, tableWrap);
	}

	function saveChanges () {
		var inputs = helpers.getAllEl('input'),
			tableView;

		model.set(inputs);

		tableView = new TableView(tableWrap, students);
	}

	return this;
}