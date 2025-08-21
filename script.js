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
    return a / b;
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

const operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
    op.addEventListener("click", () => {
        firstNumber = parseInt(display.textContent);
        operator = op.textContent;
        firstClick = false;
    })
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    secondNumber = parseInt(display.textContent);
    const result = operate(operator);
    display.textContent = result;
    firstClick = false;
})