(function() {
	"use strict";
	function toFixedString(num, length) {
		var res = num.toString();
		if (res.length < length) {
			res = new Array(length - res.length + 1).join('0') + res;
		}
		return res;
	}

	function Timer(node) {
		this.container = node;
		this.row = document.createElement('div');
		this.row.className = 'row';
		this.row.innerHTML = '<div class="col-xs-4"> <h2 class="stopwatch-current">000</h2> <div class="stopwatch-laps"> </div> </div> <div class="col-xs-4 stopwatch-controls"> <div class="btn-group btn-group-lg"> <button class="btn btn-primary">Start</button> <button class="btn btn-info">Lap</button> </div> <button class="btn btn-danger btn-sm">Reset</button> </div>';
		this.row.addEventListener('mouseover', this.setActiveTimer.bind(this), false);
		this.container.appendChild(this.row);
		this.currentTime = this.row.querySelector('.stopwatch-current');
		this.btnPrimary = this.row.querySelector('.btn-primary');
		this.btnInfo = this.row.querySelector('.btn-info');
		this.btnDanger = this.row.querySelector('.btn-danger');
		this.laps = this.row.querySelector('.stopwatch-laps');
		this.lastTimeValue = new Date().getTime();
		this.elapsedTime = 0;
		this.interval;
		this.btnPrimary.addEventListener('click', this.startStopwatch.bind(this), false);
		this.btnInfo.addEventListener('click', this.addLap.bind(this), false);
		this.btnDanger.addEventListener('click', this.resetTimer.bind(this), false)
	}
	Timer.prototype.setActiveTimer = function() {
		activeTimer = this;
	}
	Timer.prototype.startStopwatch = function() {
		var self = this;
		if(self.btnPrimary.innerHTML === 'Start') {
			self.lastTimeValue = new Date().getTime();
			self.interval = setInterval(function() {
				var thisTimeValue = new Date().getTime();
				self.elapsedTime += thisTimeValue - self.lastTimeValue;
				self.lastTimeValue = thisTimeValue;
				self.output();
			}, 16);
			self.btnPrimary.innerHTML = 'Stop';
		} else {
			clearInterval(self.interval);
			self.btnPrimary.innerHTML = 'Start';
		}
	}
	Timer.prototype.output = function() {
		var stopwatchOutput = '';
		var msec = this.elapsedTime % 1000;
		var sec = Math.floor(this.elapsedTime / 1000) % 60;
		var minutes = Math.floor(sec / 60) % 60;
		var hours = Math.floor(sec / 60) % 24;
		if(hours) {
			stopwatchOutput += toFixedString(hours, 2) + ':';
		}
		if(minutes) {
			stopwatchOutput += toFixedString(minutes, 2) + ':';
		}
		if(sec) {
			stopwatchOutput += toFixedString(sec, 2) + ':';
		}
		stopwatchOutput += toFixedString(msec, 3);
		this.currentTime.innerHTML = stopwatchOutput;
	}
	Timer.prototype.addLap = function() {
		var lap = document.createElement('div');
		lap.className = 'alert alert-info';
		lap.innerHTML = this.currentTime.innerHTML + '<span class="label label-danger">×</span>';
		lap.querySelector('.label-danger').addEventListener('click', function() {
			lap.parentNode.removeChild(lap);
		}, false);
		var lastLap = this.laps.firstChild;
		if(lastLap) {
			this.laps.insertBefore(lap, lastLap);
		} else {
			this.laps.appendChild(lap);
		}
	}
	Timer.prototype.resetTimer = function() {
		this.elapsedTime = 0;
		this.currentTime.innerHTML = '000';
		this.laps.innerHTML = '';
	}
	
	document.documentElement.addEventListener('keydown', function(event) {
		var S_KEY = 83;
		var L_KEY = 76;
		var R_KEY = 82;
		if(event.keyCode === 83) {
			activeTimer.startStopwatch();
		} else if(event.keyCode === 76) {
			activeTimer.addLap();
		} else if(event.keyCode === 82) {
			activeTimer.resetTimer();
		}
	}, false);
	
	window.Timer = Timer;
}());