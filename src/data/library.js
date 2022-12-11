export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        book.pages = +book.pages;
        this.books.push(book);
    }
    getAllBooks() {
        return this.books;
    }
    getAuthorBooks(author) {
        return this.books.filter(e => e.book_author === author)
    }
    getBooksByPages(pagesFrom, pagesTo) {
        return this.books.filter(e => e.pages >= pagesFrom && e.pages < pagesTo);
    }
}