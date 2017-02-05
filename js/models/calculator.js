'use strict';

function Calculator () {
    //operands: [first operand, second operand, result]
    var operands = [0, 0, 0],
        operator = '';
    
    this.addOperandValue = function (which, value) {
        if (+operands[which] === 0 && String(operands[which]).indexOf('.') === -1) {
            operands[which] = '';
        }

        operands[which] += value;
    };

    this.sliceOperandValue = function (which) {
        if (operands[which] === 0) {
            return;
        }

        operands[which] = String(operands[which]).slice(0, -1);
        //when last symbol is emty or negative
        if (!operands[which].length || operands[which] === '-') {
            operands[which] = 0;
        }
    }

    this.getOperandValue = function (which) {
        return operands[which];
    };

    this.setOperator = function (vl) {
        operator = vl;
        operands[1] = 0;
    };

    this.calculate = function () {
        doAction();
        operands[2] = operands[0];
    };

    this.clearAllFields = function () {
        operands = [0, 0, 0];
        operator = '';
    };

    this.clearCurrentField = function (which) {
        operands[which] = 0;
    };

    this.setPolarity = function (which) {
        operands[which] = String(0 - operands[which]);
    }

    this.addDot = function (which) {
        if (operands[which].indexOf('.') !== -1) {
            return;
        }

        operands[which] = operands[which] += '.';
    };

    function doAction () {
        switch (operator) {
            case '+': operands[0] = +operands[0] + +operands[1];
                break;
            case '-': operands[0] = +operands[0] - +operands[1];
                break;
            case '*': operands[0] = +operands[0] * +operands[1];
                break;
            case '/': operands[0] = +operands[0] / +operands[1];
                break;         
	    };
    }

    return this;
}