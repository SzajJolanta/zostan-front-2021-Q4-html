const operations = document.querySelector('#operationsScreen');
const finalResult = document.querySelector('#resultScreen');

let firstNumber;
let operator;
let secondNumber;

const captureNumber = e => {
    if (!firstNumber) {
        firstNumber = e.target.innerText;
    } else {
        secondNumber = e.target.innerText;
    }

    render();
};

const captureOperator = e => {
    operator = e.target.id;

    render();
};

const render = () => {
    if (operator == 'dodawanie') operatorSymbol = '+';
    if (operator == 'odejmowanie') operatorSymbol = '-';
    if (operator == 'mnozenie') operatorSymbol = '*';
    if (operator == 'dzielenie') operatorSymbol = '/';

    if (secondNumber) {
        operations.innerText = `${firstNumber} ${operatorSymbol} ${secondNumber}`;
    } else {
        return;
    }
};

const showResult = () => {
    let result;
    if (operator == 'dodawanie') result = parseInt(firstNumber) + parseInt(secondNumber);
    if (operator == 'odejmowanie') result = parseInt(firstNumber) - parseInt(secondNumber);
    if (operator == 'mnozenie') result = parseInt(firstNumber) * parseInt(secondNumber);
    if (operator == 'dzielenie') result = parseInt(firstNumber) / parseInt(secondNumber);

    finalResult.innerText = result;
};

const clearCalculation = () => {
    firstNumber = null;
    secondNumber = null;
    operator = null;

    operations.innerText = '';
    finalResult.innerText = '';
};

document.querySelectorAll('.numberButton').forEach(item => {
    item.addEventListener('click', captureNumber)
})

document.querySelector('#dodawanie').addEventListener('click', captureOperator);
document.querySelector('#odejmowanie').addEventListener('click', captureOperator);
document.querySelector('#mnozenie').addEventListener('click', captureOperator);
document.querySelector('#dzielenie').addEventListener('click', captureOperator);

document.querySelector('#result').addEventListener('click', showResult);
document.querySelector('#reset').addEventListener('click', clearCalculation);
