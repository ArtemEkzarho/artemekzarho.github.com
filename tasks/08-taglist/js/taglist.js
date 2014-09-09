(function() {

'use strict';

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

//search previous node
function prev(node){
 	var TEXT_NODE_TYPE = 3,
		COMMENT_NODE_TYPE = 8,
		prevNode = node.previousSibling ;

	while(prevNode && ((prevNode.nodeType === TEXT_NODE_TYPE) || (prevNode.nodeType === COMMENT_NODE_TYPE))) {
		prevNode = prevNode.previousSibling;
	}
	return prevNode;
}

//deselects element
function removeSelection(event) {
    var event = event || window.event;

    if (event.preventDefault) { 
    	event.preventDefault();
    } else {
        event.returnValue = false;
    }
}



function Taglist(node, arr) {
	//create and add all nodes
	//and add classes them
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

	//add tegs, which have been added to the argument when calling new Taglist
	for (var i = 0; i < arr.length; i += 1) {
		this.li = document.createElement('li');
		this.span = document.createElement('span');
		this.span.textContent = 'x';
		this.span.style.display = 'none';
		this.li.textContent = arr[i];
		this.ul.appendChild(this.li);
		this.ul.appendChild(this.span);
	}
	
	//put in handlers
	addEvent(this.p, 'click', this.startEditing.bind(this));
	addEvent(this.button, 'click', this.addNewTag.bind(this));
	addEvent(this.ul, 'click', this.deleteTag.bind(this));
	addEvent(this.textForm, 'keydown', function (event) {
		var event = event || window.event;
		if(event.keyCode === 13) {
			self.addNewTag();
		}
	});

	//remove selection from tegs and title
	addEvent(this.ul, 'selectstart', removeSelection);
	addEvent(this.ul, 'mousedown', removeSelection);
	addEvent(this.p, 'selectstart', removeSelection);
	addEvent(this.p, 'mousedown', removeSelection);

} 

//change state of Taflist
Taglist.prototype.startEditing = function() {
	var slf = this;
	this.spans = this.taglistHeader.querySelectorAll('.taglist-header ul span');
	this.lis = this.taglistHeader.querySelectorAll('.taglist-header ul li');

	function spanShowHide(str) {
		for(var i = 0; i < slf.spans.length; i += 1) {
			slf.spans[i].style.display = str;
		}
	}

	//At first, did like this:
	if (hasClass(this.taglistForm, 'no-edit')) {
		this.p.textContent = 'Завершить редактировавание';
		addClass(this.taglistForm, 'edit');
		removeClass(this.taglistForm, 'no-edit');
		spanShowHide('');
		//After that, I decided to do something with test class. But with classes got a lot of code and css. 

		//When Taglist deploying, cursor focuses on input field
		this.textForm.focus();

	} else if (hasClass(this.taglistForm, 'edit')) {
		this.p.textContent = 'Редактировать теги';
		addClass(this.taglistForm, 'no-edit');
		removeClass(this.taglistForm, 'edit');
		spanShowHide('none');
	}
}

//add new tags
Taglist.prototype.addNewTag = function(str) {
	this.lis = this.taglistHeader.querySelectorAll('.taglist-header ul li');

	//at first flag = true. If entered value match with lis.textContent, then change flag and break the cycle
	for (var i = 0; i < this.lis.length; i += 1) {
		if(this.textForm.value === this.lis[i].textContent) {
			this.flag = false;
			break;
		} else {
			this.flag = true;
		}
	}

	//check the value of flag and input field
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
	
//delegate all spans
Taglist.prototype.deleteTag = function(event) {
	var event = event || window.event,
		target = event.target || event.srcElement;

	if(target.tagName !== 'SPAN' ) return;

	//delete neighboring elem and span
	target.parentNode.removeChild(prev(target));
	target.parentNode.removeChild(target);
}

window.Taglist = Taglist;

}());