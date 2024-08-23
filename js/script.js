'use strict';

function padString(str, num, char, bool) {
  if (typeof str !== 'string') {
    return 'some error string';
  }
  if (typeof num !== 'number') {
    return 'some error number';
  }
  if (typeof char !== 'string' || char.length !== 1) {
    return 'some error length';
  }
  if (typeof bool !== 'boolean') {
    return 'some error boolean';
  }
  if (num < str.length) { return str.substr(0, num); }
}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));
