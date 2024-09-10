'use strict';

const minimalBalance = 2000;

const clearSymbols = (string, symRem) => {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    if (symRem.includes(string[i])) continue;
    result.push(string[i]);
  }
  return result.join('');
};

const phNumBal = (arr, minimalBalance) => {
  const result = [];
  arr.forEach((item) => {
    const corected = clearSymbols(item.balance, ['$', ',']);
    if (corected > minimalBalance) result.push(item.phone);
  });
  return result;
};

const numbers = phNumBal(users, minimalBalance);
console.log(numbers);

const average = (arr) => {
  const result = users.reduce((acc, item) => {
    const corected = Number(clearSymbols(item.balance, ['$', ',']));
    const allBalance = acc + corected;
    return Number(allBalance.toFixed(2));
  }, 0);
  return result;
};
console.log(`Сума усіх рахунків: ${average(users)}`);
