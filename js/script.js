'use strict';

let user;
user = {

  name: 'John',
  age: 35,
  get newName() {
    return this.name;
  },
  set newName(newName) {
    this.name = newName;
  },

  get newAge() {
    return this.age;
  },
  set newAge(newAge) {
    if (typeof newAge === 'number' && newAge >= 0 && newAge <= 120) {
      this.age = newAge;
    } else {
      throw new Error('age must be a number and less than the number 120 and more than 0');
    }
  },
};
// user.newName = 'alex';
// user.newAge = 140;
// user.newName = 'alice';
// user.newAge = 17;
console.log(user.name);
console.log(user.age);
