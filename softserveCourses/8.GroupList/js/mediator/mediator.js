'use strict';

function Mediator () {
    var channels = {};

    this.subscribe = function (channel, handler) {
        channels[channel] = handler;
    };

    this.publish = function (channel, data) {
        if (channel in channels) {
            channels[channel](data);
        }
    };
}