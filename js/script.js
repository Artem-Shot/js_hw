'use strict';

const cars = {
  brand: 'Jaguar',
  price: 50000,
};

const getCarInfo = function () {
  return `${this.brand} costs ${this.price}`;
};

const apply = function (func, context, ...args) {
  let result = null;
  context.func = func;
  result = context.func(...args);
  delete context.func;
  return result;
};

const bind = function (func, context, ...args) {
  if (!func) return undefined;

  return function () {
    return apply(func, context, ...args);
  };
};

const bindGetCarInfo = bind(getCarInfo, cars);
console.log(bindGetCarInfo());
console.log(bindGetCarInfo);
