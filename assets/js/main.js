//DOM ELEMENTS
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;
let makePercentage = false;

const display = document.getElementById('display');
const numberBtns = document.querySelectorAll('.number');
const decimalBtn = document.querySelector('.decimal');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
const changeSignBtn = document.querySelector('.changeSign');
const percentBtn = document.querySelector('.percentage');
const divideBtn = document.querySelector('.division');
const multiplyBtn = document.querySelector('.multiplication');
const subractBtn = document.querySelector('.subtraction');
const addBtn = document.querySelector('.addition');

// only add digits to display, not operators
numberBtns.forEach(number =>
  number.addEventListener('click', e => {
    return addToDisplay(e.target.textContent);
  })
);

operatorBtns.forEach(operator =>
  operator.addEventListener('click', e => {
    return chooseOperator(e.target.textContent);
  })
);

operatorBtns.forEach(operator =>
  operator.addEventListener('click', () => {
    setOperation(operator.textContent);
  })
);

decimalBtn.addEventListener('click', addDecimal);
equalBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clear);
changeSignBtn.addEventListener('click', changeSign);
percentBtn.addEventListener('click', percentage);

// BUTTON FUNCTIONS
// add
const add = (a, b) => +a + +b;

// subtract
const subtract = (a, b) => +a - +b;

// multiply
const multiply = (a, b) => +a * +b;

// divide
const divide = (a, b) => +a / +b;

//operate
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      console.log('add');
      return add(a, b);
    case '-':
      console.log('subtract');
      return subtract(a, b);
    case 'x':
      console.log('multiply');
      return multiply(a, b);
    case '÷':
      console.log('divide');
      return divide(a, b);
  }
}

// clear
function clear() {
  display.textContent = '0';
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
}

// add decimal
function addDecimal() {
  if (display.textContent.includes('.')) return;
  display.textContent += '.';
}

// change sign
function changeSign() {
  display.textContent = `${display.textContent * -1}`;
}

// percentage
function percentage() {
  makePercentage = true;
  console.log(currentOperation);
  if (currentOperation !== null) {
    secondOperand = display.textContent;
    display.textContent = `${(firstOperand * secondOperand) / 100}`;
  } else {
    display.textContent = `${display.textContent / 100}`;
  }
}

// reset screen
function resetScreen() {
  display.textContent = '';
  shouldResetScreen = false;
}

//round value
function round(num) {
  return Math.round(num * 1000) / 1000;
}

// set Operation
function setOperation(operator) {
  // if (currentOperation !== null) evaluate();
  firstOperand = display.textContent;
  currentOperation = operator;
  shouldResetScreen = true;
}

// evaluate
function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === '÷' && display.textContent === '0') {
    alert("You can't divide by 0!");
    return;
  }
  if (shouldResetScreen && makePercentage) {
    display.textContent = `${firstOperand - (firstOperand * secondOperand) / 100}`;
  }
  secondOperand = display.textContent;
  display.textContent = round(operate(currentOperation, firstOperand, secondOperand));
  currentOperation = null;
  console.log('sucess');
}

//add to display value
function addToDisplay(value) {
  if (display.textContent === '0' || shouldResetScreen) {
    resetScreen();
    divideBtn.classList.remove('active');
    multiplyBtn.classList.remove('active');
    subractBtn.classList.remove('active');
    addBtn.classList.remove('active');
  }
  display.textContent += value;
}

function chooseOperator(operatorChoice) {
  operator = operatorChoice;
  if (operatorChoice === '÷') {
    divideBtn.classList.add('active');
    multiplyBtn.classList.remove('active');
    subractBtn.classList.remove('active');
    addBtn.classList.remove('active');
  } else if (operatorChoice === 'x') {
    divideBtn.classList.remove('active');
    multiplyBtn.classList.add('active');
    subractBtn.classList.remove('active');
    addBtn.classList.remove('active');
  } else if (operatorChoice === '-') {
    divideBtn.classList.remove('active');
    multiplyBtn.classList.remove('active');
    subractBtn.classList.add('active');
    addBtn.classList.remove('active');
  } else {
    divideBtn.classList.remove('active');
    multiplyBtn.classList.remove('active');
    subractBtn.classList.remove('active');
    addBtn.classList.add('active');
  }
}
//When user taps on digit, that number is stored somewhere but also displayed on the screen
//next they tap on the operator they want to perform which triggers that function and waits for the next argument
//when an operator is chosen, highlight that operator until a button that isn't an operator is clicked on
//once the next argument is selected, run the chosen operator and make that new value the next first arguement for the next operator
