'use strict';

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const sumPositive = array.filter((item) => item >= 0);
let sum = 0;
sumPositive.forEach((item) => sum += item);
console.log(`Сума позитивних елементів: ${sum} , кількість позитивних елементів: ${sumPositive.length}`);

let minElement = 0;
let minIndex = 0;

for (let i = 1; i < array.length; i++) {
  if (array[i] < minElement) {
    minElement = array[i];
    minIndex = i;
  }
}
console.log(`Мінімальний елемент масиву: ${minElement}, його індекс: ${minIndex}`);

let maxElement = 0;
let maxIndex = 0;
for (let i = 1; i < array.length; i++) {
  if (array[i] > maxElement) {
    maxElement = array[i];
    maxIndex = i;
  }
}
console.log(`Максимальний елемент масиву: ${maxElement}, його індекс: ${maxIndex}`);

const negQty = array.filter((item) => item < 0);
negQty.forEach((item) => sum += item);
console.log(`Кількість негативних елементів: ${negQty.length}`);

const unpairedPositivQty = array.filter((item) => item > 0 && item % 2 !== 0).length;

console.log(`Кількість непарних позитивних елементів: ${unpairedPositivQty}`);

const pairedPositivQty = array.filter((item) => item > 0 && item % 2 === 0).length;

console.log(`Кількість парних позитивних елементів: ${pairedPositivQty}`);

const pairedPositivSum = array.filter((item) => item > 0 && item % 2 === 0);
let sum1 = 0;
pairedPositivSum.forEach((item) => sum1 += item);
console.log(`Сума парних позитивних елементів: ${sum1}`);

const unPairedPositivSum = array.filter((item) => item > 0 && item % 2 !== 0);
let sum2 = 0;
unPairedPositivSum.forEach((item) => sum2 += item);
console.log(`Сума непарних позитивних елементів: ${sum2}`);

const productPositiv = array.filter((item) => item > 0);
let result = 1;
productPositiv.forEach((item) => result *= item);
console.log(`Добуток позитивних елементів: ${result}`);

const newArray = array.map((item) => (item === maxElement ? item : 0));
console.log(newArray);
