const addBtn = document.querySelector('.addBook');
const modal = document.querySelector(".modal");
const span = document.querySelector(".close")

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

addBtn.onclick = function() {
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