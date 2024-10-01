'use strict';

const p = document.querySelector('p');
const ghost = document.querySelector('[data-p]');
p.addEventListener('focus', (e) => {
  ghost.style.display = 'block';
});

p.addEventListener('blur', (e) => {
  ghost.style.display = 'none';
});
