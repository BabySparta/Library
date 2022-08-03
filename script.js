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
    event.preventDefault();
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

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
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
    const remove = document.createElement('button');

    input.setAttribute("type", "checkbox");
    label.classList.add('switch');
    span.classList.add('slider');
    span.classList.add('round');
    remove.classList.add('remove');

    remove.textContent = "Remove Book";
    disTitle.textContent = item.title;
    disAuthor.textContent = "By: " + item.author;
    disPages.textContent = "Pages: " + item.pages;
    disReadTxt.textContent = "Have read? ";
    if (item.read === true) {
        input.checked = true;
        bookCard.style.backgroundColor = 'lightblue';
    }
    input.addEventListener("change", () => {
    if (bookCard.style.backgroundColor === 'lightblue') {
        bookCard.style.backgroundColor = 'rgb(194, 194, 194)';
    } else {
        bookCard.style.backgroundColor = 'lightblue';
    }});

    remove.addEventListener('click', () => {
        bookCard.parentElement.removeChild(bookCard);
    })


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
    bookCard.appendChild(remove);
};

function displayBook() {
    const lastBook = library.at(-1);
    makeBook(lastBook);
};


/* Validation */

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');

pagesInput.addEventListener('input', (event) => {
    if (pagesInput.validity.rangeOverflow) {
        pagesInput.setCustomValidity("Too many pages. Please input a value between 1 and 5000");
        pagesInput.reportValidity();
      } else {
        pagesInput.setCustomValidity("");
      }
    if (pagesInput.validity.rangeUnderflow) {
      pagesInput.setCustomValidity("Too little pages. Please input a value between 1 and 5000");
      pagesInput.reportValidity();
    } else {
      pagesInput.setCustomValidity("");
    }
});