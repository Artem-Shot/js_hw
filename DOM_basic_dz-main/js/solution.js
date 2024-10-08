'use strict';

const allElementsOfLists = document.querySelectorAll('li');
console.log(allElementsOfLists);

const ul = document.getElementById('ulId');
const atributes = ul.getAttributeNames();
const atributeData = {};
atributes.forEach((element) => {
  atributeData[element] = ul.getAttribute(element);
});
console.log(atributeData);
console.log(atributes);

const newNameLastChild = document.querySelector('#ulId li:last-child');
newNameLastChild.innerHTML = 'Привіт, мене звуть Артем.';
console.log(newNameLastChild);

const addClassFirstChild = document.querySelector('#ulId li:first-child');
addClassFirstChild.setAttribute('data-my-name', 'Artem');
console.log(addClassFirstChild);

ul.removeAttribute('data-dog-tail');
