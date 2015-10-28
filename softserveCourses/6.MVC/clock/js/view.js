'use strict';

function View(clockWrap) {
    this.addClock = function(state) {
        var date = new Date,
            hours = toDouble(date.getHours()),
            minutes = toDouble(date.getMinutes()),
            seconds = toDouble(date.getSeconds()),
            month = toDouble(date.getMonth() + 1),
            day = toDouble(date.getDate()),
            year = date.getFullYear(),
            resultStr;

            if (state === 'time') {
                clockWrap.className = 'time';
                resultStr = hours + ':' + minutes;
                clockWrap.innerHTML = resultStr;
            } else if (state === 'extendedTime') {
                resultStr = hours + ':' + minutes + ':' + seconds;
                clockWrap.className = 'extendedTime';
                clockWrap.innerHTML = resultStr;
            } else {
                resultStr = day + '/' + month + '/' + year;
                clockWrap.className = 'date';
                clockWrap.innerHTML = resultStr;
            }
    }

    function toDouble (number) {
        var str = String(number); 
        if (str.length === 1) {
            str = '0' + str;
        }

        return str;
    }

    return this;
}
