	'use strict';

	var sideTabs = $('.side-tabs');
	var portfolio = $('.portfolio-main');
	var mainConfig;
	var responses;
	var divContent;
	var topTabs;

	function getMainConfig() {
    	return $.getJSON('/config.json')
	}
	//подгружает все названия табиков
	function getAllConfigs() {
	    return getMainConfig().then(function (tasks) {
	    	mainConfig = arguments;
	        return $.when.apply($, tasks.map(function (taskUri) {
	            return $.getJSON('/tasks/' + taskUri + '/config.json')
	        }))
	    })
	}

	getAllConfigs()
		.then(function (configs) {
			var title, 
				li,
				primaryDiv;
			
			responses = arguments;
			//создаем левые табики
			for (var i = 0; i < responses.length; i += 1) {
				title = responses[i][0].title;
				li = $('<li></li>');
				li.appendTo(sideTabs).text(title);
			}
			
			sideTabs.children().first().addClass('select');			
			$(primaryDiv).removeClass('hide');
		});
