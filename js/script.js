'use strict';

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],

];

const result = [];
const newArray = (arr, ...args) => {
  for (const item of arr) {
    if (args.length > 1) {
      throw new Error('Function accepts only 1 argument, too much arguments provided');
    }
    if (Array.isArray(item)) newArray(item);
    else result.push(item);
  }
  return result;
};
console.log(newArray(complexArray));
