'use strict';

// Створюємо функцію-конструктор та присвоюємо ій властивості.
// створюэмо 2 порожніх масива розміром 10елементів  та наповнюэмо їх значення null за домомогою fill
function Student(name, surname, birthYear) {
  this.name = name;
  this.surname = surname;
  this.birthYear = birthYear;
  this.visits = Array(10).fill(null);
  this.marks = Array(10).fill(null);
}

// Створюємо метод age в prototype
Student.prototype.age = function () {
  const curentYear = new Date().getFullYear();
  return curentYear - this.birthYear;
};

// Створюємо методи present та  absent age в prototype за допомогою індекс оф знаходимо перше значення null та заповнюэмо його
Student.prototype.present = function () {
  const visit = this.visits.indexOf(null);
  if (visit !== -1) {
    this.visits[visit] = true;
  }
};

Student.prototype.absent = function () {
  const visit = this.visits.indexOf(null);
  if (visit !== -1) {
    this.visits[visit] = false;
  }
};

// Створюємо метод mark в prototype та перевіряємо щоб юув 0-10
Student.prototype.mark = function (value) {
  if (value > 0 && value <= 10) {
    const mark = this.marks.indexOf(null);
    if (mark !== -1) {
      this.marks[mark] = value;
    }
  } else {
    throw new Error('mark shoulb be from 1 to 10');
  }
};

// Створюємо метод для знаходження середнього значення оцнки та відвідування
Student.prototype.averageMark = function () {
  const validMark = this.marks.filter((mark) => mark !== null);
  const sum = validMark.reduce((acc, mark) => acc + mark, 0);
  return sum / validMark.length;
};

Student.prototype.averageVisits = function () {
  const validVisits = this.visits.filter((visit) => visit !== null);
  const sum = validVisits.reduce((acc, visit) => acc + visit, 0);
  return sum / validVisits.length;
};

// Створюємо метод для обчислення результату та виводимо повідомлення
Student.prototype.summary = function () {
  const averageMark = this.averageMark();
  const averageVisits = this.averageVisits();
  if (averageMark >= 9 && averageVisits >= 0.9) {
    return 'Ух ти, який молодчинка!';
  } if (averageMark >= 9 || averageVisits >= 0.9) {
    return 'Нормально, але можна краще';
  }
  return 'Редька!';
};

const student1 = new Student('Artem', 'Shotskiy', 1983);
const student2 = new Student('Nikita', 'Shotskiy', 2015);
const student3 = new Student('Nazar', 'Shotskiy', 2015);
const student4 = new Student('Victoria', 'Shotska', 2021);

console.log(student1.age());
student1.present();
student1.present();
student1.present();
student1.absent();

student1.mark(8);
student1.mark(9);

console.log(student1.averageMark());
console.log(student1.averageVisits());
console.log(student1);

console.log(student1.summary());

console.log(student2.age());
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

student2.mark(10);
student2.mark(10);
student2.mark(10);
student2.mark(10);
student2.mark(9);
student2.mark(9);
student2.mark(9);

console.log(student2.averageMark().toFixed(1));
console.log(student2.averageVisits());
console.log(student2);

console.log(student2.summary());

console.log(student3.age());
student3.present();
student3.present();
student3.present();
student3.absent();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

student3.mark(10);
student3.mark(10);
student3.mark(10);
student3.mark(6);
student3.mark(5);
student3.mark(9);
student2.mark(9);

console.log(student3.averageMark().toFixed(1));
console.log(student3.averageVisits());
console.log(student3);

console.log(student3.summary());

console.log(student4.age());
student4.present();
student4.present();
student4.present();
student4.absent();
student4.absent();
student4.absent();
student4.absent();
student4.present();
student4.present();
student4.present();
student4.present();

student4.mark(10);
student4.mark(10);
student4.mark(10);
student4.mark(8);
student4.mark(5);
student4.mark(9);
student4.mark(9);

console.log(student4.averageMark().toFixed(1));
console.log(student4.averageVisits());
console.log(student4);

console.log(student4.summary());

// function Student(name, surname, birthYear) {
//     this.name = name;
//     this.surname = surname;
//     this.birthYear = birthYear;
//     this.curentLesson = 0;
//     this.visits = Array(10);
//     this.marks = Array(10);
// }
// Student.prototype._setVisits = function (isLessonVisited) {
//     if (typeof isLessonVisited !== 'boolean') console.error('should be a boolean');
//     if (this.curentLesson < 0 && this.curentLesson >= 10) console.error('lesson should be 0 to 10');
//     this.visits[this.curentLesson] = isLessonVisited;
//     this.curentLesson++;
// };
// Student.prototype.present = function () {
//     this._setVisits(true);
// };
//
// Student.prototype.absent = function () {
//     this._setVisits(false);
// };
//
// Student.prototype.mark = function (value) {
//     const minMark = 0;
//     const maxMark = 10;
//     if (typeof value !== 'number') throw new TypeError('value must be a number');
//     if (value < maxMark || value > maxMark) console.error(`value should be on ${minMark} to ${maxMark}`);
//     const curentLessonNumber = this.curentLesson - 1;
//     if (!this.visits[curentLessonNumber]) console.error('student doesent visited this lesson');
//     this.marks[curentLessonNumber] = value;
// };
// export default Student;
