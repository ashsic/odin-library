// Main.js

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let infoString = this.title + " by " + this.author + ", " + this.pages + " pages, ";
        if (this.read == true) infoString += "has been read.";
        else infoString += "not read yet.";
        console.log(infoString)
    };
};

function addBookToLibrary() {

    myLibrary.push(book);
}

let theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, false);
myLibrary.push(theHobbit)

let blackSwan = new Book("The Black Swan: The Impact of the Highly Improbable", "Nassim Nicholas Taleb", 400, true);
myLibrary.push(blackSwan);

