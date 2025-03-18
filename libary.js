import Library from "./books.js";

class Book {
  constructor(title, author, year, price, image) {
    (this.title = title),
      (this.author = author),
      (this.year = year),
      (this.price = price),
      (this.image = image);
  }
}

class BookManager {
  constructor(library) {
    if (!library) {
      throw new Error("Library instance is required");
    }
    this.library = library;
  }
  addBook(book) {
    if (!this.library) {
      console.error("Library instance is missing in BookManager.");
      return;
    }

    const bookExists = this.library.books.some(
      (b) => b.title.toLowerCase() === book.title.toLowerCase()
    );
    if (bookExists) {
      alert("Book already exists!");
      return;
    }

    this.library.books.push(book);
    this.library.saveToLocalStorage();
    console.log(`${book.title} has been added.`);
    displayBooks();
  }
}

const myLibrary = new Library();
var Manager = new BookManager(myLibrary);

function bookadd() {
  window.location.href = "libraryadd.html";
}

function addbooks() {
  console.log("book added");
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let year = parseInt(document.getElementById("year").value);
  let price = parseFloat(document.getElementById("price").value);
  let image = document.getElementById("image").value;

  if (title === "" || author === "" || year === "" || !image) {
    alert("Please fill in all fields.");
    return;
  }

  var newBook = new Book(title, author, year, price, image);
  console.log(newBook);
  Manager.addBook(newBook);
  window.location.href = "hogwarts.html";

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("year").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
}

function displayBooks() {
  let bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  let tableHeader = `
  <tr>
    <th>#</th>
    <th>Title</th>
    <th>Author</th>
    <th>Year</th>
    <th>Price</th>
    <th>Action</th>
  </tr>
`;
  bookList.innerHTML = tableHeader;

  myLibrary.books.forEach((book, index) => {
    let bookRow = document.createElement("tr");

    bookRow.innerHTML = `
      <td>${index + 1}</td>
      <td id="titled">${book.title}</td>
      <td id="authored">${book.author}</td>
      <td>${book.year}</td>
      <td>${book.price}</td>
      <td><button onclick="removeBook('${book.title}')">Remove</button></td>`;

    bookList.appendChild(bookRow);
  });

  console.log("📚 Books in library:", myLibrary.books);
}

function removeBook(title) {
  myLibrary.books = myLibrary.books.filter((book) => book.title !== title);
  myLibrary.saveToLocalStorage();
  displayBooks();
}

const searchBook = { title: "Naruto", author: "Kishimoto" };
const exists = myLibrary.books.filter((book) =>
  book.title.includes(searchBook.title)
);
console.log("books are searched\n", exists.length);
document.addEventListener("DOMContentLoaded", displayBooks);

window.bookadd = bookadd;
window.removeBook = removeBook;
window.addbooks = addbooks;
