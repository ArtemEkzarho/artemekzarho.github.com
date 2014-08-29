	'use strict';

	var sideTabs = $('.side-tabs');
	var mainWrap = $('.main-wrap');
	var portfolio = $('.portfolio-main');
	var mainConfig;
	var responses;
	var divContent;
	var topTabs = $('.portfolio.content-wrap.task1').children().first();

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

	//подгружает все описания для нужного задания
	function getDescription(task) {
		return $.getJSON('/tasks/' + task + '/config.json').then(function (fls) {
			fls = fls.files;
			return $.when.apply($, fls.map(function (taskDesc) {
				console.log($.get('/tasks/' + task + '/'+ taskDesc));
				return $.get('/tasks/' + task + '/'+ taskDesc)
			}));
		})
	}


	getAllConfigs()
		.then(function (configs) {
			var title, 
				li,
				div;
			
			responses = arguments;
			//создаем левые табики, верхние и вообще все
			for (var i = 0; i < responses.length; i += 1) {
				title = responses[i][0].title;
				li = $('<li></li>').addClass('task' + (i + 1));
				li.appendTo(sideTabs).text(title);

				divContent = $('<div class = "portfolio content-wrap hide">\
									<ul class="top-tabs noselect">\
									</ul>\
								</div>').addClass('task' + (i + 1));

				mainWrap.append(divContent);
				topTabs = divContent.children();

				for (var j = 0; j < responses[i][0].files.length; j += 1){
					title = responses[i][0].files[j];
					li = $('<li></li>').addClass('file' + (j + 1));
					div = $('<div class = "content hide"><p></p></div>').addClass('file' + (j + 1));
					div.appendTo(divContent);
					li.appendTo(topTabs).text(title);
				}
			}
			
			sideTabs.children().first().addClass('select');		
			$('.content-wrap').first().removeClass('hide');
			$('.content').first().removeClass('hide');
			$('.top-tabs li').first().addClass('select');
		});

	function selectSideTab() {
		var target = $(this);
		var targetCls = target.context.className;
		var selectContent = $('.content-wrap.' + targetCls);

		if(target.hasClass('select')) return;

		sideTabs.children().removeClass('select');
		target.addClass('select');

		$('.content-wrap').addClass('hide');
		selectContent.removeClass('hide');

		selectContent.find('li').first().addClass('select');
		selectContent.find('.content').addClass('hide');
		selectContent.find('.content').first().removeClass('hide');
	}

	function selectTopTab() {
		var target = $(this);
		var targetCls = target.context.className;
		var selectFile = $('.content.' + targetCls);

		if(target.hasClass('select')) return;

		mainWrap.find('li').removeClass('select');
		target.addClass('select');

		$('.content').addClass('hide');
		selectFile.removeClass('hide');
	}

	sideTabs.on('click', 'li', selectSideTab);
	mainWrap.on('click', 'li', selectTopTab);