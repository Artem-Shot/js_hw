'use strict';

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

const random = Math.floor(Math.random() * images.length);

const randomImage = images[random];

console.log(randomImage);

const newImage = document.createElement('img');
newImage.src = randomImage;
