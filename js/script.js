'use strict';

const minBal = 2000;

const removeSymbols = (str, symbToRemove) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (symbToRemove.includes(str[i])) continue;
    result.push(str[i]);
  }
  return result.join('');
};

const phoneNumMinBalance = (arr, minBal = 0, balKey = 'balance') => {
  arr.forEach((item) => {
    const newString = Number(removeSymbols(item.balance, ['$', ',']));
    console.log(newString);
  });
};

const phoneNumbers = phoneNumMinBalance(users, minBal, phoneNumMinBalance);
console.log(phoneNumbers);
// const newArr = users.filter((item) => item.balance > minBal);
// const sumOfAllBalances = 0;
//
// newArr.forEach((item) => { item.balance = sumOfAllBalances += item.balance; });
// console.log(sumOfAllBalances);
