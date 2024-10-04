'use strict';

const createDiv = (text) => {
  const div = document.createElement('div');
  div.setAttribute('data-p', 'id');
  div.innerHTML = text;
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
};
const addEventListeners = (input, div) => {
  input.addEventListener('focus', () => {
    div.style.display = 'block';
  });
  input.addEventListener('blur', () => {
    div.style.display = 'none';
  });
};
const input1 = document.querySelector('#input-1');
const unicDiv1 = createDiv('я тут. 1');
addEventListeners(input1, unicDiv1);

const input2 = document.querySelector('#input-2');
const unicDiv2 = createDiv('я тут. 2');
addEventListeners(input2, unicDiv2);

const input3 = document.querySelector('#input-3');
const unicDiv3 = createDiv('я тут. 3');
addEventListeners(input3, unicDiv3);
