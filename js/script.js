'use strict';

const mixedArr = [1, 'b', 3, false, null, 8];

const calcAverage = function (mixedArr) {
  const numbersOnly = mixedArr.filter((item) => typeof item === 'number');
  let sum = 0;

  for (let i = 0; i < numbersOnly.length; i++) {
    sum += numbersOnly[i];
  }
  const average = sum / numbersOnly.length;
  return average;
};

console.log(calcAverage(mixedArr));

const result = function doMath(x, znak, y) {
  if (znak !== '**' && znak !== '-' && znak !== '+' && znak !== '*' && znak !== '/' && znak !== '%' && znak.length !== 1) return 'wrong znak';
  return eval(x + znak + y);
};
const x = +prompt('Введіть перше число x');
const znak = prompt('Введіть знак');
const y = +prompt('Введіть друге число  y');

console.log(result(x, znak, y));

const userArray = function xArray() {
  const arr = [];
  const length = prompt('довжина основного масиву:');
  for (let i = 0; i < length.length; i++) {
    const elements = prompt(`кількість елементів ${i + 1}:`);
    const innerAray = [];
    for (let j = 0; j < elements.length; j++) {
      const key = prompt(`значення елементыв ${j + i} в рядку ${i + 1}`);
      innerAray.push(key);
    }
    arr.push(innerAray);
  }
  return arr;
};

console.log(userArray());

function delateCh(string, chToDelate) {
  for (const ch of chToDelate) {
    string = string.split(ch).join('');
  }
  return string;
}

const inputString = prompt('Введіть рядок:');
const chToDelate = prompt('Введіть символи для видалення');

const newString = delateCh(inputString, chToDelate);
console.log(newString);
