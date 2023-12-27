// Main.js

// Library array and book constructor

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary() {
    let book = "";
    myLibrary.push(book);
}

// Populating initial library

let theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, false);
// myLibrary.push(theHobbit)

let blackSwan = new Book("The Black Swan: The Impact of the Highly Improbable", "Nassim Nicholas Taleb", 400, true);
myLibrary.push(blackSwan);

let everybodyLies = new Book("Everybody Lies: Big Data, New Data, and What the" +
" Internet Can Tell Us About Who We Really Are", "Seth Stephens-Davidowitz", 338, true);
myLibrary.push(everybodyLies);

// DOM Manipulation

const table = document.querySelector("table");

myLibrary.forEach((book) => {
    let row = document.createElement("tr");
    for (let item in book) {
        let value = document.createElement("td");
        value.textContent = book[item];
        row.appendChild(value);
    };
    table.appendChild(row);
});

const container = document.querySelector(".container");
let newBook = document.createElement("button");
newBook.setAttribute("class", "new-book");
newBook.textContent = "New Book";
container.appendChild(newBook);

function handleNewBookClick() {
    newBook.remove();
    let bookForm = document.createElement("form");
    bookForm.setAttribute("method", "GET");
    bookForm.setAttribute("action", "test.js");
    for (let item in theHobbit) {
        let label = document.createElement("label");
        label.textContent = item.substring(0, 1).toUpperCase() + item.substring(1) + ":";
        label.setAttribute("for", item);
        let field = document.createElement("input");
        field.setAttribute("name", item);
        if (item == "read") {
            field.setAttribute("type", "checkbox");
        } else {
            field.setAttribute("type", "text");
        }

        bookForm.appendChild(label);
        bookForm.appendChild(field);
    }
    let submit = document.createElement("input");
    submit.textContent = "Submit";
    submit.setAttribute("type", "submit");
    submit.setAttribute("class", "submit-button");
    bookForm.appendChild(submit);
    container.appendChild(bookForm);
}

newBook.addEventListener("click", handleNewBookClick);

