	'use strict';

	var sideTabs = $('.side-tabs');
	var mainWrap = $('.main-wrap');
	var portfolio = $('.portfolio-main');
	var mainConfig;
	var responses;
	var divContent;
	var topTabs;
	var folder;

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
				div;
			
			responses = arguments;
			//создаем левые табики, верхние и вообще все
			for (var i = 0; i < responses.length; i += 1) {
				title = responses[i][0].title;
				li = $('<li></li>').addClass('task' + (i + 1));
				//пушу в sideTabs табики с названиями и добавляяю им классы
				li.appendTo(sideTabs).text(title);
				//создаю обертки и список для верхних табиков задания
				divContent = $('<div class = "portfolio content-wrap hide">\
									<ul class="top-tabs noselect">\
									</ul>\
								</div>').addClass('task' + (i + 1));
				//пушу их в mainWrap
				mainWrap.append(divContent);
				topTabs = divContent.children();
				//создаю верхние табики и контент для каждого
				for (var j = 0; j < responses[i][0].files.length; j += 1){
					title = responses[i][0].files[j];
					li = $('<li></li>').addClass('file' + (j + 1));
					div = $('<div class = "content hide"></div>').addClass('file' + (j + 1));
					//пушу это все в topTabs и в divContent
					div.appendTo(divContent);
					li.appendTo(topTabs).text(title);
				}
				//нахожу нужную папку с заданиями
				folder = mainConfig[0][i];
				//добавляет кажждое задание из папки с соответствующие див
				addDescription(folder, i);
			}
			
			//выбираю первый табик описания и соответствующий контент
			sideTabs.children().first().addClass('select');		
			$('.content-wrap').first().removeClass('hide');
			$('.content').first().removeClass('hide');
			$('.top-tabs li').first().addClass('select');
		});

	//подгружает все описания для нужного задания
	function getDescription(task) {
		return $.getJSON('/tasks/' + task + '/config.json').then(function (fls) {
			fls = fls.files;
			return $.when.apply($, fls.map(function (taskDesc) {
				return $.get('/tasks/' + task + '/'+ taskDesc)
			}))
		})
	}

	//добавляет описания на страницу
	function addDescription(folder, i) {
		getDescription(folder, i)
			.then(function (dsk) {
				for(var j = 0; j < arguments.length; j += 1) {
					var txt = arguments[j][0];
					$('<pre><code></code></pre>').appendTo($('.portfolio.content-wrap.task'+ (i + 1) + ' .content.file' + (j + 1))).children().text(txt);
					//подключаем библеотеку с подсветкой
					$('pre code').each(function(i, block) {
					    hljs.highlightBlock(block);
					});
				}
			})
	}


	//выбирает боковой табик
	function selectSideTab() {
		var target = $(this);
		var targetCls = target.context.className;
		//определяю какой из контенврап ему соответствует
		var selectContent = $('.content-wrap.' + targetCls);
		//если клик по уже активному - ничего не происходит
		if(target.hasClass('select')) return;

		//подсвечиваю выбраный боковой табик
		sideTabs.children().removeClass('select');
		target.addClass('select');

		//выбираю соответствующий контентврап
		$('.content-wrap').addClass('hide');
		selectContent.removeClass('hide');

		//у выбранного контентврапа подсвечиваю первый верхний табик и описание к нему
		selectContent.find('li').first().addClass('select');
		selectContent.find('.content').addClass('hide');
		selectContent.find('.content').first().removeClass('hide');
	}

	//выбирает верхний табик
	function selectTopTab() {
		var target = $(this);
		var targetCls = target.context.className;
		//определяю какой контент соответствует выбранному верхнему табику
		var selectFile = $('.content.' + targetCls);
		//то же самое, если клик на уже активном - ничего не происходит
		if(target.hasClass('select')) return;
		//подсвечиваю кликнутый табик
		mainWrap.find('li').removeClass('select');
		target.addClass('select');
		// и соответсвующий ему контент
		$('.content').addClass('hide');
		selectFile.removeClass('hide');
	}

	//навещиваю обработчики на боковые табики и на обертку для верхних
	sideTabs.on('click', 'li', selectSideTab);
	mainWrap.on('click', 'li', selectTopTab);