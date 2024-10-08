'use strict';

const generateList = (array) => {
  const newList = (item) => {
    const ul = document.createElement('ul');
    item.forEach((item) => {
      const li = document.createElement('li');
      if (Array.isArray(item)) {
        li.appendChild(newList(item));
      } else {
        li.textContent = item;
      }
      ul.appendChild(li);
    });
    return ul;
  };
  const result = newList(array);
  document.body.appendChild(result);
};

generateList([1, 2, 3, [2, 3]]);

const allElements = document.querySelectorAll('li, ul');
console.log(allElements);
