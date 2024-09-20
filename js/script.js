'use strict';

const getFactorial = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * getFactorial(number - 1);
};

const result = getFactorial(3);
console.log(result);

const pow = (num, degree) => {
  if (num === 0 || degree === 0) {
    return 1;
  } return num * pow(num, degree - 1);
};
const res = pow(2, 6);
console.log(res);

const sum = (a, b) => {
  if (b === 0) {
    return a;
  }
  return sum(a + 1, b - 1);
};

console.log(sum(10, 15));
