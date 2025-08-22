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

function remainder(a, b) {
    if (b === 0) {
        return "Error";
    } else {
        return a % b
    }
};

function power(a, b) {
    return a ** b;
}

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
        case "%":
            return remainder(firstNumber, secondNumber);
        case "xy":
            return power(firstNumber, secondNumber);
    }
}

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");
// I declare a variable that will allows me to identify the first click
let firstClick = false;
// I declare a variable that will help to identify wether a number is entered after an operator
let waitingForNumber = false;

digitButtons.forEach((digit) => {
    digit.addEventListener("click", () => {
        const buttonValue = digit.textContent;
        
        if (!firstClick) {
            display.textContent = buttonValue;
            firstClick = true;
        } else {
            display.textContent += buttonValue;
        }

        // A number is being entered so false
        waitingForNumber = false;
    });
});

let operatorFirstClick = false;

const operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
    op.addEventListener("click", () => {
        // An operator is clicked so we're expecting a number
        if (waitingForNumber) {
            // We're expecting a number but user click another operator, we skip and wait for a number
            return;
        }

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

        // an operator is clicked so we're expecting a number
        waitingForNumber = true;
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

const point = document.querySelector("#point");
point.addEventListener("click", () => {
    if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }
});

const del = document.querySelector("#del");
del.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
})

const pi = document.querySelector("#pi");
pi.addEventListener("click", () => {
    display.textContent = Math.PI;
})

// To randomize the color of the signature
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

function changeColor() {
    const signature = document.querySelector(".signature");
    setInterval(() => {
        signature.style.color = generateRandomColor();
    }, 500);
}

changeColor();
