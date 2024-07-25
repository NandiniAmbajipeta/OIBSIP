// script.js
const displayText = document.getElementById('display-text');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const equalsButton = document.getElementById('equals');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const numberButtons = document.querySelectorAll('.grid-item');

let currentNumber = '';
let previousNumber = '';
let operator = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '0' && currentNumber === '') {
            return;
        }
        currentNumber += button.textContent;
        displayText.textContent = currentNumber;
    });
});

clearButton.addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    displayText.textContent = '';
});

backspaceButton.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    displayText.textContent = currentNumber;
});

equalsButton.addEventListener('click', () => {
    if (currentNumber === '' || previousNumber === '') {
        return;
    }
    const result = calculate(previousNumber, currentNumber, operator);
    displayText.textContent = result;
    previousNumber = '';
    currentNumber = '';
    operator = '';
});

addButton.addEventListener('click', () => {
    if (currentNumber === '') {
        return;
    }
    previousNumber = currentNumber;
    currentNumber = '';
    operator = 'add';
    displayText.textContent = previousNumber + '+';
});

subtractButton.addEventListener('click', () => {
    if (currentNumber === '') {
        return;
    }
    previousNumber = currentNumber;
    currentNumber = '';
    operator = 'subtract';
    displayText.textContent = previousNumber + '-';
});

multiplyButton.addEventListener('click', () => {
    if (currentNumber === '') {
        return;
    }
    previousNumber = currentNumber;
    currentNumber = '';
    operator = 'multiply';
    displayText.textContent = previousNumber + '*';
});

divideButton.addEventListener('click', () => {
    if (currentNumber === '') {
        return;
    }
    previousNumber = currentNumber;
    currentNumber = '';
    operator = 'divide';
    displayText.textContent = previousNumber + '/';
});

function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case 'add':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case 'subtract':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 'multiply':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case 'divide':
            if (num2 === '0') {
                return 'Error';
            }
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            return 'Error';
    }
    return result.toString();
}