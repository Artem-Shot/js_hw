'use strict';

let i = 10;
while (i <= 20) {
  console.log(i);
  i++;
}

let i = 10;
while (i <= 20) {
  console.log(i * i);
  i++;
}

for (let i = 1; i <= 10; i++) {
  console.log(i * 7);
}

let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(sum);

let sum = 16;
for (let i = 15; i <= 35; i++) {
  sum *= i;
  console.log(sum);
}

let sum = 0;
const n = 500;
for (let i = 1; i <= n; i++) {
  sum += i;
}
sum /= n;
console.log(sum);

let sum = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

const sum = 1;
for (let i = 1; i <= 9; i++) {
  if (i % sum === 0) {
    console.log(i);
  }
}

for (let i = 2; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 2; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log(i);
    sum += i;
  }
}
console.log(sum);

let result = "<table border='1' cellspacing='0' cellpadding='5'>";

for (let i = 1; i <= 10; i++) {
  result += '<tr>';
  for (let j = 1; j <= 10; j++) {
    result += `<td>${i * j}</td>`;
  }
  result += '</tr>';
}

result += '</table>';
document.write(result);

let line = '';

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    line += `${j * i} `;
  }
  console.log(line);
  line = '';
}
