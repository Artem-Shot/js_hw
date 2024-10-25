'use strict';

const DeepFreeze = (obj) => {
  Object.freeze(obj);
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      DeepFreeze(obj[key]);
    }
  }
  return obj;
};

const user = {
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: {
      a1: 1,
      b1: 2,
      c1: 3,
      d1: {
        a2: 3,
        b2: 3,
        c2: 3,
      },
    },
  },
};

DeepFreeze(user);

// user.data.a = 10;
console.log(user.data.a);
console.log(Object.isFrozen(user));
