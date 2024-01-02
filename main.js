// Main.js

// Library array and book class

// let myLibrary = [];

class Library {
    constructor(){
        this.library = [];
    };
};

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    };
};

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// };

// Populating initial library

let myLibrary = new Library();

let theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, false);
// myLibrary.push(theHobbit)

let blackSwan = new Book("The Black Swan: The Impact of the Highly Improbable", "Nassim Nicholas Taleb", 400, true);
myLibrary.library.push(blackSwan);

let everybodyLies = new Book("Everybody Lies: Big Data, New Data, and What the" +
" Internet Can Tell Us About Who We Really Are", "Seth Stephens-Davidowitz", 338, true);
myLibrary.library.push(everybodyLies);

// DOM Manipulation

// constant HTML hooks:

const table = document.querySelector("table");
const container = document.querySelector(".container2");

// functions:

function removeButtonHandler(event) {
    const index = event.target.value;
    myLibrary.library.splice(index, 1);
    createLibrary();
};

function boolHandler(event) {
    const index = event.target.value;
    if (myLibrary.library[index].read === true){
        myLibrary.library[index].read = false;    
    } else {
        myLibrary.library[index].read = true;
    }
    createLibrary();
};

function createLibrary(){
    while (table.childNodes.length > 2) {
        table.removeChild(table.lastElementChild);
    }
    myLibrary.library.forEach((book, index) => {
        let row = document.createElement("tr");
        for (let item in book) {
            let value = document.createElement("td");
            if (item == "read") {
                let boolButton = document.createElement("button");
                boolButton.textContent = book[item];
                boolButton.setAttribute("value", index);
                boolButton.addEventListener("click", boolHandler);
                value.appendChild(boolButton);
            } else {
                value.textContent = book[item];
            }
            row.appendChild(value);
        };
        let value = document.createElement("td")
        let removeButton = document.createElement("button");
        removeButton.setAttribute("value", index);
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", removeButtonHandler);
        value.appendChild(removeButton)
        row.appendChild(value);
        table.appendChild(row);
    });
    console.log(myLibrary.library)
};

function handleSubmitClick(event) {
    let form = event.target;
    event.preventDefault();
    myLibrary.library.push(new Book(form.title.value, form.author.value,
        form.pages.value, form.read.checked));
    createLibrary();
    form.remove()
};

function handleNewBookClick() {
    let bookForm = document.createElement("form");
    bookForm.setAttribute("method", "GET");
    bookForm.setAttribute("action", "main.js");
    for (let item in theHobbit) {
        let label = document.createElement("label");
        label.textContent = item.substring(0, 1).toUpperCase() + item.substring(1) + ":";
        label.setAttribute("for", item);
        let field = document.createElement("input");
        field.setAttribute("name", item);
        if (item == "read") {
            field.setAttribute("type", "checkbox");
        } else if (item == "pages") {
            field.setAttribute("min", 1);
            field.setAttribute("max", 9999);
            field.setAttribute("type", "number");
            field.required = true;
        } else {
            field.setAttribute("type", "text");
            field.required = true;
        }
        bookForm.appendChild(label);
        bookForm.appendChild(field);
    }

    let submit = document.createElement("input");
    submit.textContent = "Submit";
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.setAttribute("class", "submit-button");
    bookForm.appendChild(submit);
    container.appendChild(bookForm);
    bookForm.addEventListener("submit", handleSubmitClick);
};

function createNewBookButton() {
    let newBook = document.createElement("button");
    newBook.setAttribute("class", "new-book");
    newBook.textContent = "New Book";
    container.appendChild(newBook);
};

function updatePage() {
    createLibrary();
    createNewBookButton();
    
    let newBook = document.querySelector(".new-book");
    newBook.addEventListener("click", handleNewBookClick);
    
    let submit = document.querySelector("#submit");
};

updatePage();