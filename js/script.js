'use strict';

const name = prompt('What is your name?');
let age  = prompt('What is your age?');
let likesProgramming = confirm('Do you like programming?');


console.log(name);
console.log(age);
console.log(likesProgramming);

console.log(typeof name);
console.log(typeof age);
console.log(typeof likesProgramming);

let greeting = (`Hello, + ${name}!`).trim();

alert(greeting);

age = Number(age)
let numericAge = age
let nextAge = numericAge + 1

console.log(nextAge)

let isAdult = true
if (age >= 18) {
    console.log(isAdult)
} else {
    console.log(false)
}


