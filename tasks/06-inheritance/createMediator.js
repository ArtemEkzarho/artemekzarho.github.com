'use strict';

function createMediator(){
	var eventBase = {};

	return {
		subscribe: function(eventName, handler){
			if (eventBase.hasOwnProperty(eventName)){
				eventBase[eventName].push(handler);
			} else {
				eventBase[eventName] = [handler];
			}
		},

		publish: function(eventName, data){
			if (eventBase.hasOwnProperty(eventName)) {
				for (var i = 0; i < eventBase[eventName].length; i += 1) {
					eventBase[eventName][i].call(window, data);
				}
			}
		},

		unsubscribe: function(eventName, handler){
			if (eventBase.hasOwnProperty(eventName)){
				if ( handler === undefined) {
					delete eventBase[eventName][handler];
				} else {
					eventBase[eventName] = [];
				}
			}

		}
	}
}