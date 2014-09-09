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



//установил постоянную ширину .btn-primary, что бы при смене надписи, ширина у кнопки старт/стоп не прыгала
//не исключено, что мои "часы" идут немного не верно, делал в лоб все. Видимо внутрений таймер интерпретатора не совсем точный
//Я решил не убирать нулевые разряды. Я считаю, что так нагляднее и красивее все вяглядит, чем постоянно изменяющаяся строка. Помониторил в инете и выяснилось, что большинство готовых таймеров разделяют мою точку зрения)
'use strict';

//############TOOLS#############
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

function Timer(node) {
	var self = this;
	this.timerId;
	this.flagForBtn = true;
	this.startBtn = node.querySelector('.btn-primary');
	this.lapBtn = node.querySelector('.btn-info');
	this.stopwatch = node.querySelector('.stopwatch-laps');
	this.resetBtn = node.querySelector('.btn-sm');
	this.timerArea = node.querySelector('.stopwatch-current');
	this.milliseconds = 0;
	this.seconds = 0;
	this.minutes = 0;
	this.hours = 0;
	this.outputMilliseconds;
	this.outputSeconds;
	this.outputMinutes;
	this.outputHours;
	this.activ = this;

	addEvent(this.startBtn, 'click', this.changeValue.bind(this));
	addEvent(this.lapBtn, 'click', this.makeCircle.bind(this));
	addEvent(this.stopwatch, 'click', this.delCircle.bind(this));
	addEvent(this.resetBtn, 'click', this.resetAll.bind(this));
	addEvent(document, 'keydown', function (event) {
		var event = event || window.event;
		if(event.keyCode === 83) {
			self.changeValue();
		}
	});
	addEvent(document, 'keydown', function (event) {
		var event = event || window.event;
		if(event.keyCode === 76) {
			self.makeCircle();
		}
	});
	addEvent(document, 'keydown', function (event) {
		var event = event || window.event;
		if(event.keyCode === 82) {
			self.resetAll();
		}
	});
}

Timer.prototype.startTimer = function (flag) {
	var self = this;

	if(!flag) {
		clearInterval(this.timerId);
		this.flagForBtn = true;
		return;
	} else {
		this.flagForBtn = false;
		
		this.timerId = setInterval(function() {
			self.milliseconds += 19;

			if (self.milliseconds > 999) {
				self.milliseconds = 0;
				self.seconds += 1;
			}

			if (self.seconds > 59) {
				self.seconds = 0;
				self.minutes += 1;
			}

			if (self.minutes > 59) {
				self.minutes = 0;
				self.hours += 1;
			}

			if (self.milliseconds < 10) {
				self.outputMilliseconds = '00' + self.milliseconds;
			} else if (self.milliseconds < 100) {
				self.outputMilliseconds = '0' + self.milliseconds;
			} else {
				self.outputMilliseconds = self.milliseconds;
			}

			if (self.seconds < 10) {
				self.outputSeconds = '0' + self.seconds;
			} else {
				self.outputSeconds = self.seconds;
			}

			if (self.minutes < 10) {
				self.outputMinutes = '0' + self.minutes;
			} else {
				self.outputMinutes = self.minutes;
			}
			
			if (self.hours < 10) {
				self.outputHours = '0' + self.hours;
			} else {
				self.outputHours = self.hours;
			}

			if (self.hours > 23) {
				self.milliseconds = 0;
				self.seconds = 0;
				self.minutes = 0;
				self.hours = 0;
			}

			self.timerArea.textContent = self.outputHours + ':' + self.outputMinutes + ':' + self.outputSeconds + ':' + self.outputMilliseconds;
		}, 19);
	}
}

Timer.prototype.changeValue = function () {
	if (this.flagForBtn) {
		this.startBtn.textContent = 'Stop';
		this.startTimer(true);
	} else {
		this.startBtn.textContent = 'Start';
		this.startTimer(false);
	}
}

Timer.prototype.makeCircle = function () {
	var divAlert = document.createElement('div');
	divAlert.textContent = this.timerArea.textContent;
	var cross = document.createElement('span');
	cross.textContent = '×';
	addClass(divAlert, 'alert alert-info');
	addClass(cross, 'label label-danger');

	this.stopwatch.appendChild(divAlert);
	divAlert.appendChild(cross);
}

Timer.prototype.delCircle = function (event) {
	var event = event || window.event;
	var target = event.target || event.srcElement;

	if(!hasClass(target, 'label-danger')) return;

	this.stopwatch.removeChild(target.parentNode);
}

Timer.prototype.resetAll = function() {
	this.startTimer(false);
	this.timerArea.textContent = '00:00:00:000';
	this.startBtn.textContent = 'Start';
	this.milliseconds = 0;
	this.seconds = 0;	
	this.minutes = 0;
	this.hours = 0;
	for(var i = 0; i < this.stopwatch.children.length; i += 1) {
		this.stopwatch.removeChild(this.stopwatch.children[i]);
		i -= 1;
	}
}

var node = document.querySelector('#first')
var timer = new Timer(node);

addEvent(document, 'mouseover', function (event) {
	var event = event || window.event;
	var target = event.target || event.srcElement;

	if (hasClass(target, 'col-xs-4')) {
		node = target.parentNode;
		timer.activ = node;
	}
});