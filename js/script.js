'use strict';

// const number = +prompt('введіть любе число');
// const exponent = +prompt('введіть степінь числа');
// alert(`Ви ввели число  ${number} та ступінь ${exponent}`);

function mainFunction(callback) {
  const number = +prompt('Введіть перше число');
  const exponent = +prompt('Введіть степінь числа');
  callback(number, exponent);
}

function exponentiation(number, exponent) {
  const result = number ** exponent;
  alert(`Результат обчислення ${result}`);
}
mainFunction(exponentiation);

function multiplay(number, exponent) {
  const result = number * exponent;
  alert(`Результат обчислення ${result}`);
}
mainFunction(multiplay);

function division(number, exponent) {
  const result = number / exponent;
  alert(`Результат обчислення ${result}`);
}
mainFunction(division);

function modulo(number, exponent) {
  const result = number % exponent;
  alert(`Результат обчислення ${result}`);
}
mainFunction(modulo);
