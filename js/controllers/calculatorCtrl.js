'use strict';

function CalculatorCtrl () {
    var container = document.querySelector('body'),
        calculatorView = new CalculatorView(container, this);

    return this;
}