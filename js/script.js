'use strict';

const arr = [7, 5, 3, 10, 15, 22, 101, 48, 159, 147];
arr.sort((a, b) => a - b);
const deletedElements = arr.splice(1, 3);
console.log(arr);
console.log(deletedElements);
