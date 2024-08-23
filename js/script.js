'use strict';

function padString(str, num, char, addLeft = false) {
  let result = '';
  const stringLength = num - str.length;

  if (typeof str !== 'string') {
    return 'some error string';
  }
  if (typeof num !== 'number') {
    return 'some error number';
  }
  if (typeof addLeft !== 'boolean') {
    return 'some error boolean';
  }
  if (num < str.length) return str.substr(0, num);

  for (let i = 0; i < stringLength; i++) {
    result += char;
  }
  return addLeft ? result + str : str + result;
}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));
