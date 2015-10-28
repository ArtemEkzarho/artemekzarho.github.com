'use strict'

var helpers = (function (){

    function getEl (selector) {
        return document.querySelector(selector);
    }

    return {
        getEl: getEl
    }
}());
