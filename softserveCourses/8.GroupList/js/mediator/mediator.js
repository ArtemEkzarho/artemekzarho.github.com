'use strict';

function Mediator () {
    var channels = {};

    this.subscribe = function (channel, handler) {
        if (!channels[channel]) {
        	channels[channel] = [];
        }
        
        channels[channel].push({ context: this, callback: handler });
        
        return this;
    };

    this.publish = function (channel, data) {
    	var i,
    		subscription;

        if (!channels[channel]) {
        	return false;
        }
        
        for (i = 0; i < channels[channel].length; i++) {
            subscription = channels[channel][i];
            subscription.callback.call(subscription.context, data);
        }

        return this;
    };
}
