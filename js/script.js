import PrintedBook from './classes/PrintedBook.js';
import ebook from './classes/Ebook.js';

const pBook1 = new PrintedBook({
  title: 'White Tooth',
  author: 'Jack London',
  year: 1906,
  pageCount: 304,
});
console.log(pBook1);
pBook1.getDescription();

console.log('---------------');

const ebook1 = new ebook({
  title: 'Kobzar',
  author: 'Taras Shevchenko',
  year: 1840,
  fileSize: 37,
});
console.log(ebook1);
ebook1.getDescription();
ebook1.info;
