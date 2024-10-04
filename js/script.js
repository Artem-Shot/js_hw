'use strict';

const createTable = (rows = 10, columns = 10) => {
  let number = 1;
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.append(tbody);
  for (let i = 1; i <= rows; i++) {
    const row = document.createElement('tr');
    for (let j = 1; j <= columns; j++) {
      const column = document.createElement('td');
      row.append(column);
      column.textContent = number;
      number++;
    }
    tbody.append(row);
  }
  return table;
};
console.log(createTable());
document.body.appendChild(createTable());
