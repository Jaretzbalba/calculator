const display = document.getElementById('display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

digits.forEach(digit =>
  digit.addEventListener('click', e => {
    return addToDisplay(e.target.textContent);
  })
);

operators.forEach(operator =>
  operator.addEventListener('click', e => {
    return addToDisplay(e.target.textContent);
  })
);

// const one = document.getElementById(1);
// const two = document.getElementById(2);
// const three = document.getElementById(3);
// const four = document.getElementById(4);
// const five = document.getElementById(5);
// const six = document.getElementById(6);
// const seven = document.getElementById(7);
// const eight = document.getElementById(8);
// const nine = document.getElementById(9);

// BUTTON FUNCTIONS
// add
const add = (a, b) => a + b;

// subtract
const subtract = (a, b) => a - b;

// multiply
const multiply = (a, b) => a * b;

// divide
const divide = (a, b) => a / b;

//operate
function operate(operator, a, b) {
  switch (operator) {
    case add:
      return add(a, b);
    case subtract:
      return subtract(a, b);
    case multiply:
      return multiply(a, b);
    case divide:
      return divide(a, b);
  }
}

//add pressed digit to input
function addToInput(num) {}

//add to display value
function addToDisplay(value) {
  display.textContent += value;
}
