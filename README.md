# Manga-Laya

## 📌 Project Overview
Manga-Laya is an interactive **Manga Library Management System** where users can browse, add, and manage manga collections. The project allows users to log in, add manga to their cart, and even purchase books. Librarians can add new manga to the library, ensuring an up-to-date collection.

## 🚀 Features
### 🔹 User Features:
- **User Login**: Users must log in before browsing the manga collection.
- **View Available Manga**: Users can browse a collection of manga displayed with title, author, year, price, and cover image.
- **Search Manga**: Users can search for manga by title using a search bar.
- **Add to Cart**: Users can add manga to their cart and view them in the cart section.
- **Buy Now**: Users can purchase books directly from the cart.
- **Dark/Light Theme Toggle**: Users can switch between light and dark themes, and the preference is saved.

### 🔹 Librarian Features:
- **Secure Librarian Login**: Librarians need to answer a secret question to access the librarian panel.
- **Add Manga**: Librarians can add new manga with details such as title, author, year, price, and an image URL.
- **Remove Manga**: Librarians can delete manga from the collection.
- **Local Storage Integration**: All manga data is stored in local storage.

## 🛠️ Technologies Used
- **HTML, CSS, JavaScript**
- **Bootstrap Icons for UI**
- **Local Storage for Data Persistence**

## 📂 Project Structure
```
Manga-Laya/
│-- ELIBRARY.html (Landing page)
│-- user.html (User page to browse and buy manga)
│-- libraryadd.html (Librarian page to add new manga)
│-- hogwarts.html (Admin panel for managing books)
│-- books.js (Manages book operations and storage)
│-- user.js (Handles user interactions like search and cart management)
│-- library.css (Main styling file)
│-- README.md (Documentation file)
```

## 🛠️ Installation & Setup
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/yourusername/Manga-Laya.git
   ```
2. **Open the Project**:
   Navigate to the project folder and open `ELIBRARY.html` in a browser.
3. **Librarian Access**:
   - Click on `Librarian`.
   - Answer the secret question: `The Secret of Jiraiya and Hatake Kakashi?` (**Answer: 106**).
   - You will be redirected to the librarian panel.
4. **User Access**:
   - Click on `User` to log in and browse manga.
   - Add books to the cart and make purchases.

## 🐜 Code Explanation

### 📌 **Class Diagram & Flow**
#### **Flow of Operations:**
1. **User visits the website** → Selects user or librarian mode.
2. **User Mode:**
   - Logs in → Browse manga → Add to cart → Buy manga.
3. **Librarian Mode:**
   - Logs in → Adds new manga → Updates the collection.
4. **Data Handling:**
   - Manga data is stored/retrieved from local storage.

### 📌 **Classes and Functions**
#### **Book Class (Represents a Manga Book)**
```js
class Book {
  constructor(title, author, year, price, image) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
    this.image = image;
  }
}
```
#### **Library Class (Manages Books Collection)**
```js
class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem("books")) || [];
  }
  saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}
```
#### **BookManager Class (Handles Adding and Removing Books)**
```js
class BookManager {
  constructor(library) {
    this.library = library;
  }
  addBook(book) {
    this.library.books.push(book);
    this.library.saveToLocalStorage();
  }
}
```

### 📌 **Adding Books (Librarian Panel)**
```js
function addbooks() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let year = parseInt(document.getElementById("year").value);
  let price = parseFloat(document.getElementById("price").value);
  let image = document.getElementById("image").value;

  if (!title || !author || !year || !image) {
    alert("Please fill in all fields.");
    return;
  }

  var newBook = new Book(title, author, year, price, image);
  Manager.addBook(newBook);
  setTimeout(() => {
    window.location.href = "hogwarts.html";
  }, 500);
}
```

### 📌 **Displaying Books (User Page)**
```js
function displayBooks() {
  let bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  myLibrary.books.forEach((book, index) => {
    let bookRow = document.createElement("tr");
    bookRow.innerHTML = `
      <td>${index + 1}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td>${book.price}</td>
      <td><img src="${book.image}" alt="Book Image" width="50"></td>
      <td><button onclick="addToCart('${book.title}')">Add to Cart</button></td>`;
    bookList.appendChild(bookRow);
  });
}
```

## 🎨 UI Enhancements
- Smooth animations and transitions using CSS.
- Theme toggle for light/dark mode with preference saved in local storage.
- Responsive design for both desktop and mobile users.

## 🤝 Contribution
If you want to contribute:
1. Fork the repository.
2. Create a new branch (`feature-name`).
3. Commit your changes.
4. Push to your fork and create a pull request.

## 🐜 License
This project is open-source and available under the [MIT License](LICENSE).

---
🚀 **Enjoy Exploring Manga-Laya!**

