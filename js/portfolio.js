'use strict';
	
	var converter = new Markdown.Converter(),
		regJS = /\.js$/,
		regMD = /\.md$/,
		regHTML = /\.html$/,
		tasksFolders = [],
		tasksArr = [],
		taskNumber,
		taskNamesContainer = $('.task-names-container'),
		navigation = $('.navigation'),
		taskContent = $('.content');

	function getMainConfig() {
		return $.getJSON('config.json');
	}

	function getTasksConfigs() {
		return getMainConfig().then(function(tasksUri) {
			tasksFolders = tasksUri;
			return $.when.apply($, tasksUri.map(function(elem) {
				return $.getJSON('tasks/' + elem + '/config.json');
			}))
		});
	}

	getTasksConfigs().then(function(){
		tasksArr = [].map.call(arguments, function(elem){
			taskNamesContainer.append('<div class="task-name"><div>' + elem[0].title + '</div></div>');
			return elem[0];
		});
		taskNamesContainer.on('click', '.task-name', function() {
			showNav($(this));
		});
		navigation.on('click', '.navigation-item', function() {
			showContent($(this));
		});
	})

	function showNav(task, files) {
		taskNumber = task.index();
		var taskFiles = tasksArr[taskNumber].files;

		$('.active', taskNamesContainer).removeClass('active');
		task.addClass('active');
		navigation.empty();
		taskContent.empty();

		taskFiles.forEach(function(elem) {
			navigation.append('<div class="navigation-item"><div>' + elem + '</div></div>');
		});

		showContent($('.navigation-item', navigation).eq(0));
	}

	function showContent(nav) {
		var folderName = tasksFolders[taskNumber],
			path = 'tasks/' + folderName + '/',
			fileName = nav.text();
			console.log(fileName);

		taskContent.empty();
		$('.active', navigation).removeClass('active');
		nav.addClass('active');
			console.log(path + fileName);
		$.get(path + fileName, function(response) {
			if (regJS.test(fileName)) {
				console.log(1);
				taskContent.append('<pre><code></code></pre>');
				$('code', taskContent).text(response);
			} else if (regMD.test(fileName)) {
				var convertedResponse = converter.makeHtml(response);
				taskContent.append(convertedResponse);
			} else if (regHTML.test(fileName)) {
				var newHTML = document.createElement('div');
				newHTML.innerHTML = response;

				$('img, script, link', newHTML).each(function() {
					if($(this).attr('src')) {
						var src = path + $(this).attr('src');
						$(this).attr('src', src);
					} else if($(this).attr('href')) {
						var href = path + $(this).attr('href');
						$(this).attr('href', href);
					}
				});

				taskContent.append(newHTML);
			}
			$('pre code').each(function(i, e) {hljs.highlightBlock(e)});
		});
	}