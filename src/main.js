import { Library } from "./data/library.js";

const inputElements = document.querySelectorAll(".form-class [name]");

const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const MIN_YEAR = 1950;
const maxYear = getMaxYear();
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";
const ACTIVE = "active"
const library = new Library();
let isFormError = false;

const dateErrorElement = document.getElementById("date_error");
const pagesErrorElement = document.getElementById("pages_error");
const pagesFormErrorElement = document.getElementById("pages_form_error");

const booksListElement = document.getElementById("books-all");
const booksPagesListElement = document.getElementById("books-pages");
const booksAuthorListElement = document.getElementById("books-author");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/***************************************************************************/
//functions of book Form

function generateBook(inputElements) {
    return Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
}

function onSubmit(event) {
    event.preventDefault();
    if (isFormError) { return console.log("some error exist"); }
    library.addBook(generateBook(inputElements));

}

function onChange(event) {
    if (event.target.name == "pages") {
        validatePages(event.target)
    } else if (event.target.name == "date") {
        validateDate(event.target);
    }
}

function validatePages(element) {
    const value = +element.value;
    if (value < MIN_PAGES || value > MAX_PAGES) {
        const message = value < MIN_PAGES ? `pages must be ${MIN_PAGES} or greater`
            : `pages must be ${MAX_PAGES} or less`;
        showErrorMessage(element, message, pagesErrorElement);
    }

}

function validateDate(element) {
    const value = +element.value.slice(0, 4);
    if (value < MIN_YEAR || value > maxYear) {
        const message = value < MIN_YEAR ? `year must be ${MIN_YEAR} or greater` :
            `year must be ${maxYear} or less`;
        showErrorMessage(element, message, dateErrorElement);
    }
}

function showErrorMessage(element, message, errorElement) {
    isFormError = true;
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => {
        isFormError = false;
        element.classList.remove(ERROR_CLASS);
        element.value = '';
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}

function getMaxYear() {
    return new Date().getFullYear();
}

/***********************************************************************************/
//functions of Pages Form

let pagesFrom = 0;
let pagesTo = 0;
function onSubmitPages(event) {
    event.preventDefault();
    const books = library.getBooksByPages(pagesFrom, pagesTo);
    booksPagesListElement.innerHTML = getBookItems(books);
}

function onChangePagesFrom(event) {
    const value = +event.target.value;
    if (pagesTo && value >= pagesTo) {
        showErrorMessage(event.target, "Pages 'from' must be less than Pages 'to'",
            pagesFormErrorElement);
    } else {
        pagesFrom = value;
    }
}

function onChangePagesTo(event) {
    const value = +event.target.value;
    if (pagesFrom && value < pagesFrom) {
        showErrorMessage(event.target, "Pages'To' must be greater than Pages 'From'",
            pagesFormErrorElement);
    } else {
        pagesTo = value;
    }


} function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        booksListElement.innerHTML = getBookItems(books);
    }
}

function getBookItems(books) {
    return books.map(e =>
        `<li class="books-item">
              <div class="books-item-container">
                 <p class="books-item-paragraph">Title: ${e.book_title} </p>
                 <p class="books-item-paragraph">Author: ${e.book_author} </p>
                 <p class="books-item-paragraph">Genre: ${e.genre}</p>
                 <p class="books-item-paragraph">Date: ${e.date}</p>
                 <p class="books-item-paragraph">Pages: ${e.pages}</p>
              </div>
          </li>`).join('');
}

/***********************************************************************************/
//functions of Author Form
let author = "";
function onSubmitAuthor(event) {
    event.preventDefault();

    const booksByAuthor = library.getAuthorBooks(author);
    booksAuthorListElement.innerHTML = getBookItems(booksByAuthor);
}

function onChangeAuthor(event) {
    const value = event.target.value;
    author = value;
}

window.onSubmit = onSubmit;
window.onChange = onChange;
window.onSubmitPages = onSubmitPages;
window.onChangePagesFrom = onChangePagesFrom;
window.onChangePagesTo = onChangePagesTo;
window.showSection = showSection;
window.onChangeAuthor = onChangeAuthor;
window.onSubmitAuthor = onSubmitAuthor;
window.getBookItems = getBookItems;