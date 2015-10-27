'use strict';

document.addEventListener("DOMContentLoaded", function(){
    var date = new Date(),
        clock = document.getElementById('clock'),
        secondsWrap = document.getElementById('secondsWrap'),
        dateWrap = document.getElementById('dateWrap'),
        clockWrap = document.getElementById('clockWrap');

    document.getElementById('month').innerHTML = date.getMonth() + 1;
    document.getElementById('day').innerHTML = date.getDate();
    document.getElementById('year').innerHTML = date.getFullYear();
    document.getElementById('hours').innerHTML = date.getHours();
    document.getElementById('minutes').innerHTML = date.getMinutes();
    document.getElementById('seconds').innerHTML = date.getSeconds();

    function changeTimeStatus () {
        var seconds = secondsWrap.className,
            clock = clockWrap.className;

        if (clock === 'show') {
            if (seconds === 'hide') {
                secondsWrap.className = 'show';
            } else {
                secondsWrap.className = 'hide';
            }
        } else {
            dateWrap.className = 'hide';
            secondsWrap.className = 'hide';
            clockWrap.className = 'show';
        }
    } 

    function changeToDate (event) {
        event.preventDefault();

        dateWrap.className = 'show';
        clockWrap.className = 'hide';
    }

    clock.addEventListener('click', changeTimeStatus, false);
    clock.addEventListener('contextmenu', changeToDate, false);

}, false);

