'use strict';

const sum = () => {
  let step = 0;
  return (result) => {
    step += result;
    return step;
  };
};

const finalResult = sum();

console.log(finalResult(3));
console.log(finalResult(5));
console.log(finalResult(20));
