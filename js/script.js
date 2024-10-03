'use strict';

const IMG_FOLDER = './image/';
const IMG_EXT = '.jpg';

// const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

const getRanromNum = () => {
  const random = Math.floor(Math.random() * 10);
  return random;
};

const generateImg = (imgName) => {
  const newImage = document.createElement('img');
  newImage.src = `${IMG_FOLDER}${imgName + IMG_EXT}.`;
  newImage.alt = `${IMG_FOLDER}${imgName + IMG_EXT}.`;
  newImage.title = `${IMG_FOLDER}${imgName + IMG_EXT}.`;

  return newImage;
};

const imgToAppemd = generateImg(getRanromNum());

document.body.append(imgToAppemd);
