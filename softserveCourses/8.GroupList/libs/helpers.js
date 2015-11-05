'use strict';

var helpers = (function (){
	function templater (template, list) {
	    var completedRow = template,
	        key;

	    for (key in list) {
	        completedRow = completedRow.replace('<%=' + key + '%>', list[key]);
	    }

	    completedRow = completedRow.split('<%=').join('').split('%>').join('');

	    return completedRow;
	}

	return {
		templater: templater
	}

}());