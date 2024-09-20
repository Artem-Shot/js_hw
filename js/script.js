'use strict';

// const InsertWordInto = (string) => (word) => {
//   const words = string.split(' ');
//   const getMiddle = Math.floor(words.length / 2);
//   const newString = [
//     ...words.slice(0, getMiddle),
//     word,
//     ...words.slice(getMiddle),
//   ].join(' ');
//   return newString;
// };
// const insert = InsertWordInto('hello world');
// console.log(insert());
//
// const result = insert('Odessa');
// console.log(result);
//
// const result2 = insert('Odessa');
// console.log(result2);
//
// const result3 = insert('Odesa');
// console.log(result3);
//
// const result4 = insert('Odesa');
// console.log(result4);

const InsertWordInto = (str) => {
  let num = 0;

  return (word) => {
    let result;
    const newString = str.split(' ');

    if (num % 3 === 0) {
      const getMiddle = Math.floor((newString.length - 1) / 2);
      result = [
        ...newString.slice(0, getMiddle + 1),
        word,
        ...newString.slice(getMiddle + 1),
      ].join(' ');
    } else if (num % 3 === 1) {
      result = `${word} ${str}`;
    } else if (num % 3 === 2) {
      result = `${str} ${word}`;
    }

    num++;
    return result;
  };
};

const insert = InsertWordInto('hello world');

const result = insert('Odesa'); // -> 'hello Odesa world'
console.log(result);

const secondResult = insert('Odesa'); // -> 'Odesa hello world'
console.log(secondResult);

const thirdResult = insert('Odesa'); // -> 'hello world Odesa'
console.log(thirdResult);
