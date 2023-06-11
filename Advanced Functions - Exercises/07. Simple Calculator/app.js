function calculator() {
    // make dictionary
    const html = {
        selector1: '',
        selector2: '',
        output: '',
    };
    const operands = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    //helper function 

    function calculate(selector1Value, selector2Value, operand) {

        return operands[operand](Number(selector1Value), Number(selector2Value));
    }

    //result

    return {
        init: (selector1, selector2, resultSelector) => {
            html.selector1 = document.querySelector(selector1);
            // console.log(html.selector1);
            html.selector2 = document.querySelector(selector2);
            html.output = document.querySelector(resultSelector);
        },
        add: () => {

            html.output.value = calculate(html.selector1.value, html.selector2.value, '+');
        },
        subtract: () => {
            html.output.value = calculate(html.selector1.value, html.selector2.value, '-');
        },
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');



