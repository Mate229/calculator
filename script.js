console.log("calculator")

function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        return "Error";
    } else {
        return a / b
    }
};

let firstNumber, secondNumber, operator;

function operate(operator) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
            break;
        case "-":
            return substract(firstNumber, secondNumber);
            break;
        case "*":
            return multiply(firstNumber, secondNumber);
            break;
        case "/":
            return divide(firstNumber, secondNumber);
    }
}

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");
// I declare a variable that will allows me to identify the first click
let firstClick = false;

digitButtons.forEach((digit) => {
    digit.addEventListener("click", () => {
        const buttonValue = digit.textContent;
        
        if (!firstClick) {
            display.textContent = buttonValue;
            firstClick = true;
        } else {
            display.textContent += buttonValue;
        }
    });
});

let operatorFirstClick = false;

const operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (!operatorFirstClick) {
            firstNumber = Number(display.textContent);
            operator = op.textContent;
            firstClick = false;
            operatorFirstClick = true;
        } else {
            secondNumber = Number(display.textContent);
            const result = operate(operator);
            display.textContent = result;
            // Update the first number in case user continue with operator
            firstNumber = result;
            firstClick = false;
            // Update operator in case user change operator
            operator = op.textContent;
        }
    })
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    secondNumber = Number(display.textContent);
    const result = operate(operator);
    display.textContent = result;
    // to restart digit click
    firstClick = false;
    // to restart operator click
    operatorFirstClick = false;
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.textContent = 0;
    operatorFirstClick = false;
});

