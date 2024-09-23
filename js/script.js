'use strict';

const insertWordInto = (str) => {
  let num = 0;

  return (word) => {
    let res;
    const newString = str.split(' ');

    if (num === 0) {
      const getMiddle = Math.floor(newString.length / 2);
      res = [
        ...newString.slice(0, getMiddle),
        word,
        ...newString.slice(getMiddle),
      ].join(' ');
    } else if (num === 1) {
      res = `${word} ${str}`;
    } else if (num === 2) {
      res = `${str} ${word}`;
    }

    num++;
    return res;
  };
};

const insert = insertWordInto('hello world');

const result = insert('Odesa'); // -> 'hello Odesa world'
console.log(result);

const secondResult = insert('Odesa'); // -> 'Odesa hello world'
console.log(secondResult);

const thirdResult = insert('Odesa'); // -> 'hello world Odesa'
console.log(thirdResult);
