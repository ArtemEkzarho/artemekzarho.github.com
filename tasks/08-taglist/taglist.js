'use strict';

//решил сделать отмену выделения т.к. самого раздражало, что если быстро работать с теглистом, кликать везде, то иногда можно случайно выделить что-то.

//Если тег такой уже был, то просто ничего не происходит, нельзя нажать ни энтер, ни кнопку мыши. Так было указано в задании.



if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== "function") {
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		}
		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			fNOP = function() {}, fBound = function() {
				return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
			};
		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP();
		return fBound;
	};
}

//tools
function addEvent(obj, event_name, handler) {
	var handler_wrapper = function(event) {
		event = event || window.event;
		if (!event.target && event.srcElement) {
			event.target = event.srcElement;
		}
		return handler.call(obj, event);
	};

	if (obj.addEventListener) {
		obj.addEventListener(event_name, handler_wrapper, false);
	} else if (obj.attachEvent) {
		obj.attachEvent('on' + event_name, handler_wrapper);
	}
	return handler_wrapper;
}

function addClass(node, classToAdd){
	var arrOfClasses = [];

	if (node.className) {
		arrOfClasses = node.className.split(' ');
	};

	for(var i = 0; i < arrOfClasses.length; i += 1) {
		if(arrOfClasses[i] === classToAdd) {
			return;
			}
	};

	if (arrOfClasses.length === 0) {
		node.className += classToAdd;
	} else {
		node.className += ' ' + classToAdd;
	};
		return;
};

function hasClass(node, classToCheck) {
	var arrOfClasses = [];
		
	if (node.className) {
		arrOfClasses = node.className.split(' ');
	};
		
	for(var i = 0; i < arrOfClasses.length; i += 1 ) {
		if(arrOfClasses[i] === classToCheck) {
			return true;
		}
	}
	return false;
};

function removeClass(node, classToRemove) {
	var arrOfClass = [];
	var resultArr = [];

	if (node.className) {
		arrOfClass = node.className.split(' ');
	};

	for(var i = 0; i < arrOfClass.length; i += 1) {
		if(arrOfClass[i] !== classToRemove) {
			resultArr.push(arrOfClass[i]);
		}
	}
	node.className = resultArr.join(' ');
};

//находит предыдущий узел
function prev(node){
 	var TEXT_NODE_TYPE = 3,
		COMMENT_NODE_TYPE = 8,
		prevNode = node.previousSibling ;

	while(prevNode && ((prevNode.nodeType === TEXT_NODE_TYPE) || (prevNode.nodeType === COMMENT_NODE_TYPE))) {
		prevNode = prevNode.previousSibling;
	}
	return prevNode;
}

//отменяет выделение элемента
function removeSelection(event) {
    var event = event || window.event;

    if (event.preventDefault) { 
    	event.preventDefault();
    } else {
        event.returnValue = false;
    }
}



function Taglist(node, arr) {
	//создаем все узлы, добавляем их на стр и добавляем им классы
	var self = this;
	this.flag = true;
	this.taglistMain = document.createElement('div');
	this.taglistHeader = document.createElement('div');
	this.taglistForm = document.createElement('div');
	this.p = document.createElement('p');
	this.p.textContent = 'Редактировать теги';
	this.ul = document.createElement('ul');
	addClass(this.taglistForm, 'no-edit');
	this.textForm = document.createElement('input');
	this.textForm.type = 'text';
	this.button = document.createElement('input');
	this.button.type = 'button';
	this.button.value = 'Добавить';
	addClass(this.taglistMain, 'taglist-main');
	addClass(this.taglistHeader, 'taglist-header');
	addClass(this.taglistForm, 'taglist-form');
	addClass(this.textForm, 'text');
	addClass(this.button, 'button');
	this.taglistMain.appendChild(this.taglistHeader);
	this.taglistMain.appendChild(this.taglistForm);
	this.taglistHeader.appendChild(this.p);
	this.taglistHeader.appendChild(this.ul);
	this.taglistForm.appendChild(this.textForm);
	this.taglistForm.appendChild(this.button);
	node.appendChild(this.taglistMain);

	//добавляем теги, которые были указаны аргументом при вызове new Taglist
	for (var i = 0; i < arr.length; i += 1) {
		this.li = document.createElement('li');
		this.span = document.createElement('span');
		this.span.textContent = 'x';
		this.span.style.display = 'none';
		this.li.textContent = arr[i];
		this.ul.appendChild(this.li);
		this.ul.appendChild(this.span);
	}
	
	//навешиваем обработчики на кнопки и узлы
	addEvent(this.p, 'click', this.startEditing.bind(this));
	addEvent(this.button, 'click', this.addNewTag.bind(this));
	addEvent(this.ul, 'click', this.deleteTag.bind(this));
	addEvent(this.textForm, 'keydown', function (event) {
		var event = event || window.event;
		if(event.keyCode === 13) {
			self.addNewTag();
		}
	});

	//отменяем выделение с тегов и заголовка
	addEvent(this.ul, 'selectstart', removeSelection);
	addEvent(this.ul, 'mousedown', removeSelection);
	addEvent(this.p, 'selectstart', removeSelection);
	addEvent(this.p, 'mousedown', removeSelection);

} 

//меняет состояния теглиста
Taglist.prototype.startEditing = function() {
	var slf = this;
	this.spans = this.taglistHeader.querySelectorAll('.taglist-header ul span');
	this.lis = this.taglistHeader.querySelectorAll('.taglist-header ul li');

	function spanShowHide(str) {
		for(var i = 0; i < slf.spans.length; i += 1) {
			slf.spans[i].style.display = str;
		}
	}

	//сначала сделал так, орентируюясь на тексконтент. Пототм решил сделать с проверкой классов, но с классами получилось больше кода и еще цсс дописывать, по этому оставил так.
	if (hasClass(this.taglistForm, 'no-edit')) {
		this.p.textContent = 'Завершить редактировавание';
		addClass(this.taglistForm, 'edit');
		removeClass(this.taglistForm, 'no-edit');
		spanShowHide('');

		//при разворачивании теглиста, сразу фокусируемся на поле ввода, что бы можно было вводить теги сразу с клавиатуры
		this.textForm.focus();

	} else if (hasClass(this.taglistForm, 'edit')) {
		this.p.textContent = 'Редактировать теги';
		addClass(this.taglistForm, 'no-edit');
		removeClass(this.taglistForm, 'edit');
		spanShowHide('none');
	}
}

//пушим новые теги
Taglist.prototype.addNewTag = function(str) {
	this.lis = this.taglistHeader.querySelectorAll('.taglist-header ul li');

	//вначале флаг тру, если введенное значение совпадает с текстовым контентом какой-то из лише, уже добавленных, то ставим флаг фалсе, и останавливаем цикл
	for (var i = 0; i < this.lis.length; i += 1) {
		if(this.textForm.value === this.lis[i].textContent) {
			this.flag = false;
			break;
		} else {
			this.flag = true;
		}
	}

	//проверяем значение флага и пустое ли поле ввода, что бы не добавлялись "пустые" теги
	if ((this.textForm.value === '') || (this.flag === false) || (this.textForm.value === ' ') ) return;

	this.li = document.createElement('li');
	this.span = document.createElement('span');
	this.span.textContent = 'x';
	this.span.style.display = '';
	this.li.textContent = this.textForm.value;
	this.ul.appendChild(this.li);
	this.ul.appendChild(this.span);
	this.textForm.value = '';
}
	
//делегирование на все спаны	
Taglist.prototype.deleteTag = function(event) {
	var event = event || window.event,
		target = event.target || event.srcElement;

	if(target.tagName !== 'SPAN' ) return;

	//удаляем соседний элемент и сам спан
	target.parentNode.removeChild(prev(target));
	target.parentNode.removeChild(target);
}

var taglist = new Taglist(document.querySelector('.for-taglist'), ['I', 'love', 'scarlettJohansson']);
