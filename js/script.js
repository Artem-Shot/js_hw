'use strict';

const numArray = [12, 2, 3, 5, 6, 7, 8, 9, 11];
let sum = numArray.reduce((acc, num) => acc + num, 0);
let averageSum = sum / numArray.length;

alert('Cереднє значення ' + averageSum);