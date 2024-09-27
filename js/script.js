'use strict';

const tableBody = document.getElementById('table-body');
let number = 1;
for (let i = 0; i < 10; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 10; j++) {
    const value = document.createElement('td');
    value.textContent = number;
    row.append(value);
    number++;
  }
  tableBody.append(row);
}

setTimeout(() => {
  tableBody.style.backgroundColor = 'lightblue';
}, 1000);
setTimeout(() => {
  tableBody.style.backgroundColor = 'pink';
}, 2000);
setTimeout(() => {
  tableBody.style.backgroundColor = 'white';
  tableBody.style.fontWeight = 'bold';
}, 4000);

const bodyEl = document.body;
bodyEl.style.backgroundColor = 'purple';
