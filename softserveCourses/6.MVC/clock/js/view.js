'use strict';

function View(clockWrap) {
    this.addClock = function(state) {
        var date = new Date,
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear();

           if (state === 'time') {
               clockWrap.className = 'time';
               clockWrap.innerHTML = hours + ':' + minutes;
           } else if (state === 'extendedTime') {
               clockWrap.className = 'extendedTime';
               clockWrap.innerHTML = hours + ':' + minutes + ':' + seconds;
           } else {
               clockWrap.className = 'date';
               clockWrap.innerHTML = day + '/' + month + '/' + year;
           }
    }

    return this;
}
