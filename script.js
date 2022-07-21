const addBtn = document.querySelector('.addBook');
const modal = document.querySelector(".modal");
const span = document.querySelector(".close");
const form = document.querySelector('.modalForm')

addBtn.onclick = function() {
    form.reset();
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none";
}
  
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
  }
}


form.onsubmit = function() {
    const bookTitle = document.querySelector('#title').value;
    const bookAuthor = document.querySelector('#author').value;
    const bookPages = document.querySelector('#pages').value;
    const bookRead = document.querySelector('#read').checked;
    addBook(bookTitle, bookAuthor, bookPages, bookRead);

    displayBook();
    modal.style.display = "none";
};

const books = document.querySelector(".books");

let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    library.push(newBook);
}

function makeBook(item) {
    const bookCard = document.createElement('div');
    const disTitle = document.createElement('div');
    const disAuthor = document.createElement('div');
    const disPages = document.createElement('div');
    const disRead = document.createElement('div');
    const disReadTxt = document.createElement('div');


    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');

    input.setAttribute("type", "checkbox");
    label.classList.add('switch');
    span.classList.add('slider');
    span.classList.add('round');


    disTitle.textContent = item.title;
    disAuthor.textContent = "By: " + item.author;
    disPages.textContent = "Pages: " + item.pages;
    disReadTxt.textContent = "Have read? ";
    if (item.read === true) {
        input.checked = true;
    }

    disTitle.classList.add("cardTitle");
    disAuthor.classList.add("cardText");
    disPages.classList.add("cardText");
    disRead.classList.add("cardRead")
    disReadTxt.classList.add("cardText");

    books.appendChild(bookCard);
    bookCard.appendChild(disTitle);
    bookCard.appendChild(disAuthor);
    bookCard.appendChild(disPages);
    bookCard.appendChild(disRead);
    disRead.appendChild(disReadTxt);
    disRead.appendChild(label);
    label.appendChild(input);
    label.appendChild(span);
};



function displayBook() {
    const lastBook = library.at(-1);
    makeBook(lastBook);
};