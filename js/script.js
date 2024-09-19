'use strict';

const cars = [
  {
    brand: 'Jaguar',
    price: 30000,
    bodyStyle: 'sedan',
  },
  {
    brand: 'Land Rover',
    price: 80000,
    bodyStyle: 'crosover',
  },
  {
    brand: 'porsche',
    price: 130000,
    bodyStyle: 'coupe',
  },
];

const getCarInfo = function (str) {
  console.log(str);
  console.log(`${this.brand} is ${this.bodyStyle} costs ${this.price}`);
};

for (const car of cars) {
  const x = getCarInfo.bind(car, `This car costs ${car.price}`);
  x();
}
