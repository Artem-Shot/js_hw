'use strict';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class TaskQueue {
  constructor(delayTime) {
    this.delayTime = delayTime;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  run() {
    let promise = Promise.resolve();
    const results = [];
    this.tasks.forEach((task) => {
      promise = promise
        .then(() => task())
        .then((result) => {
          console.log(result);
          results.push(result);
          return delay(this.delayTime);
        });
    });
    return promise.then(() => 'Усі завдання завершено');
  }
}

const queue = new TaskQueue(1000); // затримка між завданнями — 1 секунда

queue.addTask(() => Promise.resolve('Task 1 виконано'));
queue.addTask(() => Promise.resolve('Task 2 виконано'));
queue.addTask(() => Promise.resolve('Task 3 виконано'));

queue.run().then((message) => {
  console.log(message); // Усі завдання завершено
});
