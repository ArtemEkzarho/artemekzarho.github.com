'use strict';

function CalculatorView (container, ctrl) {
    var template = templates.calculator,
        numbers, dellBtn, clearBtn, clearCurrentFiledBtn, plusMinusBtn, dotBtn,
        enterField, actionBtns, calculateBtn,
        calculator = new Calculator(),
        currentOperand = 0,
        //states
        actionBtnPressed = false,
        equalBtnPressed = false,
        endCalculation = false;
        
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
    
    //keyboard events
    document.onkeydown = function(event) {
        event = event || window.event;

        switch (event.keyCode) {
            case 27: clearAllPress();
                break;
            case 8: delPress();
                break;
            case 111:
            case 191: actionPress(event, '/');
                break;  
            case 107:
            case 187: actionPress(event, '+');
                break;
            case 106:
            case 56: actionPress(event, '*');
                break; 
            case 109:
            case 189: actionPress(event, '-');
                break;
            case 49:
            case 97: numberPress(event, '1');
                break;
            case 50:
            case 98: numberPress(event, '2');
                break;  
            case 51:
            case 99: numberPress(event,'3');
                break;
            case 52:  
            case 100: numberPress(event, '4');
                break;
            case 53:                  
            case 101: numberPress(event, '5');
                break;
            case 54:  
            case 102: numberPress(event, '6');
                break;
            case 55:  
            case 103: numberPress(event, '7');
                break;
            case 56:  
            case 104: numberPress(event, '8');
                break;
            case 57:  
            case 105: numberPress(event, '9');
                break; 
            case 48: 
            case 96: numberPress(event, '0');
                break;
            case 187:  
            case 13: calculatePress();
                break;   
            case 190:  
            case 110: dotPress();
                break; 
	    };
    };

    function render () {
        container.innerHTML = template;
    }

    function updateEntryField(vl) {
        vl = vl || currentOperand;

        enterField.value = calculator.getOperandValue(vl);
    }

    //numbers handler
    function numberPress (event, number) {
        number = number || this.innerHTML

        if (endCalculation) {
            calculator.clearAllFields();
            currentOperand = 0;

            endCalculation = false;
        }

        calculator.addOperandValue(currentOperand, number);
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
        if (endCalculation) {
            return;
        }

        calculator.setPolarity(currentOperand);
        updateEntryField();
    }
    //dot btn 
    function dotPress () {
        if (endCalculation) {
            calculator.clearAllFields();
            currentOperand = 0;

            endCalculation = false;
        }

        calculator.addDot(currentOperand);
        updateEntryField();
    }
    //action btns + - / *
    function actionPress (event, action) {
        action = action || this.innerHTML;

        endCalculation = false;

        if (actionBtnPressed || equalBtnPressed) {
            calculator.setOperator(action);
            return;
        }

        actionBtnPressed = true;
        equalBtnPressed = true;

        calculator.calculate();
        updateEntryField(2);
        calculator.setOperator(action);
        currentOperand = 1;
    }

    function calculatePress () {
        if (actionBtnPressed) {
            return;
        } 

        equalBtnPressed = true;
        endCalculation = true;

        calculator.calculate();
        updateEntryField(2);
    }

    return this;
}