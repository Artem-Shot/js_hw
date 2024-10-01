'use strict';

const input = document.querySelector('input');
const ghost = document.querySelector('[data-p]');
input.addEventListener('focus', (e) => {
  ghost.style.display = 'block';
});

input.addEventListener('blur', (e) => {
  ghost.style.display = 'none';
});
