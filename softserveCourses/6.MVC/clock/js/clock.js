'use strict';

function Clock (clockWrap) {
    var interval,
        view = new View(clockWrap);

    startClock('time');

    clockWrap.addEventListener('click', changeTimeStatus, false);
    clockWrap.addEventListener('contextmenu', changeToDate, false);

    function startClock (state) {
        clearInterval(interval);
        clockWrap.className = state;
        view.addClock(state);
        interval = setInterval(function () {
            view.addClock(state);
        }, 1000);
    }
    
    function changeToDate (event) {
        event.preventDefault();
        startClock('date');
    }

    function changeTimeStatus () {
        clearInterval(interval);
        var clockCls = clockWrap.className;

        if(clockCls === 'date' || clockCls === 'extendedTime') {
            startClock('time');
        } else {
            startClock('extendedTime');
        }
    }

    return this;
}
