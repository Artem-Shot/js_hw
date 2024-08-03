'use strict';

const name = prompt('What is your name?');
const age  = prompt('What is your age?');
let likesProgramming = confirm('Do you like programming?');


console.log(name);
console.log(age);
console.log(likesProgramming);

console.log(typeof name);
console.log(typeof age);
console.log(typeof likesProgramming);

let greeting = (`Hello, + ${name}!`).trim();

alert(greeting);
