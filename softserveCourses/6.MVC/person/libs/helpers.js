'use strict'

var helpers = (function (){
    function getEl (selector) {
        return document.querySelector(selector);
    }

    function getAllEl (selector) {
        return document.querySelectorAll(selector);
    }

    return {
        getEl: getEl,
        getAllEl: getAllEl,
    }
}());
