/* eslint-disable quotes */
/* eslint-disable indent */
let myLibrary = [];
let cards = [];
let deletebuttons = [];
let readbuttons = [];

let i = 0;
let rvalue;

const left = document.querySelector(".left");
const form = document.querySelector("form");

const book1 = {
    title: "The Immortals of Meluha",
    author: "Amish Tripathi",
    page: 390,
    read: "yes"
};

const book2 = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    page: 208,
    read: "no"
};

addBookToLibrary(book1);
addBookToLibrary(book2);
display();

function book (title,author,page,read) {
    this.title = title
    this.author = author
    this.page = page
    this.read = read
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

function display () {
    let length = myLibrary.length;
    for (i = 0 ; i < length ; i++) {
        cards[i] = document.createElement("div");
        cards[i].className = "card";
        cards[i].data = i;
        cards[i].setAttribute('style', 'white-space: pre;');
        cards[i].textContent = `Title : ${myLibrary[i].title}\nAuthor : ${myLibrary[i].author}\nPage : ${myLibrary[i].page}\nRead : ${myLibrary[i].read}\n`;

        deletebuttons[i] = document.createElement("button");
        deletebuttons[i].textContent = "Delete";
        deletebuttons[i].setAttribute("data",i);
        deletebuttons[i].addEventListener("click", (e) => {
            removeBook(e);
        });
        cards[i].appendChild(deletebuttons[i]);

        readbuttons[i] = document.createElement("button");
        readbuttons[i].textContent = "Change read status";
        readbuttons[i].setAttribute("data",i);
        readbuttons[i].addEventListener("click", (e) => {
            changeRead(e);
        });
        cards[i].appendChild(readbuttons[i]);

        left.appendChild(cards[i]);
    }
}

function createBook () {
    let author = document.getElementById("author");
    let title = document.getElementById("title");
    let page = document.getElementById("page");
    let radioButtons = document.getElementsByName('read');
    
    for (let radio of radioButtons) {
        if (radio.checked) {
            rvalue = radio.value;
        }
    }
    let newBook = new book(title.value,author.value,page.value,rvalue);
    removeDisplay();
    addBookToLibrary(newBook);
    display();
}

function removeDisplay () {
    let length = myLibrary.length;
    for (i = 0 ; i < length ; i++) {
        left.removeChild(cards[i]);
    }
}

function removeBook (e) {
    let element = e.target;
    let index = element.getAttribute("data");
    removeDisplay();
    myLibrary.splice(index,1);
    display();
}

function changeRead (e) {
    let element = e.target;
    let index = element.getAttribute("data");
    removeDisplay();
    if (myLibrary[index].read == "yes") 
        myLibrary[index].read = "no";
    else
        myLibrary[index].read = "yes";
    display();
}