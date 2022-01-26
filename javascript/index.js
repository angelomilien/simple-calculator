let firstInput = "";
let secondInput = "";

// SELECT BUTTONS
// const plusButton = document.getElementById("one");

// const minusButton = document.getElementById("two");

// const multiButton = document.getElementById("three");

// const diviButton = document.getElementById("four");

// const clearButton = document.getElementById("five");

// const result = document.getElementById("result");

// OTHER FUNCTIONS

function getValues() {
  firstInput = Number(document.getElementById("input-1").value);

  secondInput = Number(document.getElementById("input-2").value);
}

function clearInputs() {
  document.getElementById("input-1").value = "";
  document.getElementById("input-2").value = "";
}

// FUNCTIONS FOR OPERATIONS

function sum() {
  getValues();
  result.value = firstInput + secondInput;
}

function subtract() {
  getValues();
  result.value = firstInput - secondInput;
}

function multiply() {
  getValues();
  result.value = firstInput * secondInput;
}

function divide() {
  getValues();
  result.value = firstInput / secondInput;
}
