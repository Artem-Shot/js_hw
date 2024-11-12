import Book from './Book.js';

class Ebook extends Book {
    _fileSize = null;
    constructor({title, author, year, fileSize}) {
        super({
            title,
            author,
            year,
        });
        this.fileSize = fileSize;
    }
    get info() {
        return`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Filesize: ${this.fileSize}`;
    }
    getDescription() {
        super.getDescription();
        console.log(`Filesize is: ${this.fileSize} MB`) ;

    }

    set fileSize(value) {
        if (typeof value !== 'number' || value < 0) {
            console.warn('Cannot set such value as fileSize');
            return;
        }
        this._fileSize = value;
    }
    get fileSize() {
        return this._fileSize;
    }

}

export default Ebook;
