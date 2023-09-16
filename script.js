function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

const myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const body = document.body;
  myLibrary.forEach((e, index) => {
    const card = document.createElement("div");

    const title = document.createElement("p");
    title.textContent = e.title;

    const author = document.createElement("p");
    author.textContent = e.author;

    const pages = document.createElement("p");
    pages.textContent = e.pages + " pages";

    const isRead = document.createElement("button");
    isRead.textContent = e.isRead ? "Unread" : "Read";
    isRead.setAttribute("index", index);
    isRead.addEventListener("click", toggleIsRead);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("index", index);
    removeBtn.addEventListener("click", removeBook);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(isRead);
    card.appendChild(removeBtn);

    body.appendChild(card);
  });
}

function toggleIsRead(event) {
  const index = event.srcElement.attributes.index.value;
  myLibrary[index].isRead = !myLibrary[index].isRead;
  event.srcElement.textContent = myLibrary[index].isRead ? "Unread" : "Read";
}

function removeBook(event) {
  const index = event.srcElement.attributes.index.value;
  myLibrary.splice(index, 1);
  clearDisplay();
  displayBooks();
}

function clearDisplay() {
  const body = document.body
  body.replaceChildren();
}

addBookToLibrary(
  new Book("The Fellowship of the Ring", "J.R.R Tolkien", 231, false)
);
addBookToLibrary(
  new Book("The Two Towers", "J.R.R Tolkien", 231, false)
);
addBookToLibrary(
  new Book("The Return the King", "J.R.R Tolkien", 231, false)
);
addBookToLibrary(
  new Book("The Hobbit", "J.R.R Tolkien", 231, false)
);

displayBooks();
