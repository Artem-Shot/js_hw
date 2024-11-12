import Book from './Book.js';

class PrintedBook extends Book {
    _pageCount = 0;
    constructor({title, author, year, pageCount}) {
        super({
            title,
            author,
            year,
            });
        this.pageCount = pageCount;
    }
    get info() {
        return`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page: ${this.pageCount}`;
    }
    getDescription() {
        super.getDescription();
        console.log(`It has  ${this.pageCount} pages`) ;
    }
    set pageCount(value) {
        if (typeof value !== 'number' || value < 0) {
            console.warn('Cannot set such value as pageCount');
            return;
        }
        this._pageCount = value;
    }
    get pageCount() {
        return this._pageCount;
    }

}
export default PrintedBook;