'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
function generateKey(length, characters) {
  let key = '';
  for (let i = 0; i < length; i++) {
    const randomSymbol = Math.floor(Math.random() * characters.length);
    key += characters[randomSymbol];
  }

  return key;
}
console.log(key);
