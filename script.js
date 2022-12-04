let myLibrary = [];

const library = document.getElementById("library");
const addBookBtn = document.getElementById("addBookBtn");
const formModal = document.getElementById("formModal");
const modalCloseBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".submitBtn");

function Book(title, author, numPages, hasRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.hasRead = hasRead;

  this.info = function () {
    return title + " by " + author + ", " + numPages + " pages, " + hasRead;
  };
}

function createBook() {
  let title = document
    .getElementById("bookForm")
    .elements.namedItem("title").value;
  console.log(title);
  let author = document
    .getElementById("bookForm")
    .elements.namedItem("author").value;
  let numPages = document
    .getElementById("bookForm")
    .elements.namedItem("numPages").value;
  let hasRead = document
    .getElementById("bookForm")
    .elements.namedItem("hasRead").value;
  let book = new Book(title, author, numPages, hasRead);
  myLibrary.push(book);
  addBookToLibrary();
}

function addBookToLibrary() {
  // myLibrary.push(book);
  myLibrary.forEach(function (book) {
    const shelf = document.createElement("div");
    shelf.classList.add("shelf");
    const box = document.createElement("div");
    box.classList.add("box");
    const boxDeleteBtn = document.createElement("span");
    boxDeleteBtn.innerText = "Delete Book";
    boxDeleteBtn.classList.add("boxDeleteBtn");
    box.innerText = `${book.title} by ${book.author}`;
    box.appendChild(boxDeleteBtn);
    shelf.setAttribute("style", "background-color: aliceblue");
    shelf.appendChild(box);
    library.appendChild(shelf);
    console.log(myLibrary);
  });
}

// shelf.style("grid-template-columns", "repeat(4, 1fr)");

addBookBtn.addEventListener("click", function (e) {
  formModal.style.display = "block";
});

modalCloseBtn.addEventListener("click", function (e) {
  formModal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == formModal) {
    formModal.style.display = "none";
  }
});

submitBtn.addEventListener("click", function (e) {
  createBook();
  e.preventDefault();
  document.getElementById("bookForm").reset();
  formModal.style.display = "none";
});
