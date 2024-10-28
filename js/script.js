'use strict';

let product;
product = {
};
Object.defineProperty(product, 'name', {
  get() {
    return this._name;
  },
  set(value) {
    if (typeof value === 'string' && value.trim().length > 0) {
      this._name = value;
    } else throw new Error(`${value} is not a string and shoud not use spaces`);
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(product, 'price', {
  get() {
    return this._price;
  },
  set(value) {
    if (typeof value === 'number' && value > 0) {
      this._price = value;
    } else throw new Error(`${value} is not a number and shoud be more the 0`);
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperty(product, 'quantity', {
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(product, 'totalValue', {
  get() {
    return this.price * this.quantity;
  },

  enumerable: true,
  configurable: false,
});

const descriptor = Object.getOwnPropertyDescriptor(product, 'totalValue');
console.log(descriptor);

product.name = 'Iphone';
product.price = 1000;
product.quantity = 3;

console.log(product.name);
console.log(product.price);
console.log(product.quantity);
console.log(product.totalValue);

// product.name = '';
// product.price = -100;
