// Main.js

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

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 295, true);
