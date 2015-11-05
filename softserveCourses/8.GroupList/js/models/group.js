'use strict'; 

function Group (collection) {
	var models = [];

	init();

	function init () {
		var model;

		$(collection).each(function (index, el) {
			model = new Student(el);
			models.push(model);
		});
	}

	this.getModels = function () {
		return models;
	}
}

