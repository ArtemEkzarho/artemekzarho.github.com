'use strict';

function CalculatorView (container) {
    var template = templates.calculator,
        numbers, dellBtn, clearBtn, clearCurrentFiledBtn, plusMinusBtn, dotBtn,
        enterField, actionBtns, calculateBtn,
        calculator = new Calculator(),
        currentOperand = 0,
        //states
        actionBtnPressed = false,
        equalBtnPressed = false;
        
    render();
    
    numbers = helpers.getAllEl('.number');
    enterField = helpers.getEl('.input-row input');
    dellBtn = helpers.getEl('.dell-btn');
    clearBtn = helpers.getEl('.clear-btn');
    clearCurrentFiledBtn = helpers.getEl('.clear-current-field-btn');
    plusMinusBtn = helpers.getEl('.plus-minus-btn');
    dotBtn = helpers.getEl('.dot-btn');
    actionBtns = helpers.getAllEl('.action-btn');
    calculateBtn = helpers.getEl('.calculate-btn');

    updateEntryField();

    //add events
    numbers.forEach(function (elem) {
        elem.addEventListener('click', numberPress, false);
    });

    actionBtns.forEach(function (elem) {
        elem.addEventListener('click', actionPress, false);
    });

    dellBtn.addEventListener('click', delPress, false);
    clearBtn.addEventListener('click', clearAllPress, false);
    clearCurrentFiledBtn.addEventListener('click', clearFieldPress, false);
    plusMinusBtn.addEventListener('click', plusMinusPress, false);
    dotBtn.addEventListener('click', dotPress, false);
    calculateBtn.addEventListener('click', calculatePress, false);
    

    function render () {
        container.innerHTML = template;
    }

    function updateEntryField(vl) {
        vl = vl || currentOperand;

        enterField.value = calculator.getOperandValue(vl);
    }

    //numbers handler
    function numberPress () {
        calculator.addOperandValue(currentOperand, this.innerHTML);
        updateEntryField();
        
        actionBtnPressed = false;
        equalBtnPressed = false;
    }
    //dell btn
    function delPress () {
        calculator.sliceOperandValue(currentOperand);
        updateEntryField();
    }
    //clear all btn
    function clearAllPress () {
        calculator.clearAllFields();
        updateEntryField();
        currentOperand = 0;
    }
    //clear current operand btn
    function clearFieldPress () {
        calculator.clearCurrentField(currentOperand);
        updateEntryField();
    }
    //set the polarity)
    function plusMinusPress () {
        calculator.setPolarity(currentOperand);
        updateEntryField();
    }
    //dot btn 
    function dotPress () {
        calculator.addDot(currentOperand);
        updateEntryField();
    }
    //action btns + - / *
    function actionPress () {
        if (actionBtnPressed || equalBtnPressed) {
            calculator.setOperator(this.innerHTML);
            return;
        }

        actionBtnPressed = true;
        equalBtnPressed = true;

        calculator.calculate();
        updateEntryField(2);
        calculator.setOperator(this.innerHTML);
        currentOperand = 1;
    }

    function calculatePress () {
        if (actionBtnPressed) {
            return;
        } 

        equalBtnPressed = true;

        calculator.calculate();
        updateEntryField(2);
    }

    return this;
}