'use strict';

/* eslint-disable*/
const test = () => {
  for (var i = 0; i < 3; i++) {
    console.log('var ' + i);
  }


  for (let j = 0; j < 3; j++) {
    console.log('let ' + j);
  }

  for (let k = 0; k < 3; k++) {
    const qq = k + 5;
    console.log('константа ' + qq);
  }

  console.log(i);
  console.log(j);
  console.log(k);
}




test()



