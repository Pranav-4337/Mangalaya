import Library from "./books.js";
const myLibrary = new Library();

class users {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }
}

class useracc {
  constructor() {
    this.logins = JSON.parse(localStorage.getItem("logins")) || [];
    this.lastId = JSON.parse(localStorage.getItem("lastId")) || 0;
    this.carts = JSON.parse(localStorage.getItem("carts")) || {};
  }

  login(users) {
    this.lastId++;
    const newUser = { id: this.lastId, users };
    this.logins.push(newUser);
    this.saveToLocalStorage("logins", this.logins);
    localStorage.setItem("lastId", this.lastId);
    console.log(`User Registered: ${users.username} (ID: ${this.lastId})`);
  }

  addToCart(username, book) {
    if (!this.carts[username]) {
      this.carts[username] = [];
    }
    this.carts[username].push(book);
    this.saveToLocalStorage("carts", this.carts);
  }

  removeFromCart(username, index) {
    if (this.carts[username]) {
      this.carts[username].splice(index, 1);
      this.saveToLocalStorage("carts", this.carts);
    }
  }

  saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

const newUser = new useracc();

function checkUser() {
  let username = document.getElementById("username").value;

  if (!username) {
    alert("Please enter a username.");
    return;
  }

  let userExists = newUser.logins.some(
    (user) => user.users.username === username
  );

  if (userExists) {
    alert(`Welcome back, ${username}!`);
    localStorage.setItem("currentUser", username);
    openuserpage();
  } else {
    logins();
  }
}

function logins() {
  let username = document.getElementById("username").value;

  if (!username) {
    alert("Please enter a username.");
    return;
  }

  let ids = newUser.lastId + 1;
  const newuser = new users(ids, username);
  newUser.login(newuser);

  localStorage.setItem("currentUser", username);

  alert(`Login successful! Welcome, ${username}.`);
  openuserpage(); // Redirect to user page

  document.getElementById("username").value = "";
}

function openuserpage() {
  window.location.href = "userpage.html";
}
function displayBooks() {
  let bookList = document.getElementById("bookList1");
  if (!bookList) {
    console.error("bookList element not found!");
    return;
  }
  bookList.innerHTML = ""; // Clear previous content

  myLibrary.books.forEach((book, index) => {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <img src="${
        book.image || "default-book.jpg"
      }" alt="." class="book-image" loading="lazy">
      <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        <p><strong>Price:</strong> $${book.price}</p>
        <button onclick="addcart('${book.title}')">Add To Cart</button>
      </div>
    `;

    bookList.appendChild(bookCard);
  });

  console.log("📚 Books in library:", myLibrary.books);
}
document.addEventListener("DOMContentLoaded", displayBooks);

function searchBooks() {
  let searchInput = document.getElementById("searchInput").value.toLowerCase();
  let bookCards = document.querySelectorAll(".book-card");

  bookCards.forEach((card) => {
    let titleElement = card.querySelector(".book-title");

    if (titleElement) {
      // ✅ Check if title exists to prevent errors
      let title = titleElement.textContent.toLowerCase();

      if (title.includes(searchInput)) {
        card.style.display = "block"; // Show matching books
      } else {
        card.style.display = "none"; // Hide non-matching books
      }
    }
  });
}

function addcart(title) {
  let username = localStorage.getItem("currentUser");
  if (!username) {
    alert("Please log in to add books to the cart.");
    return;
  }

  const bookToAdd = myLibrary.books.find((book) => book.title === title);
  if (bookToAdd) {
    newUser.addToCart(username, bookToAdd);
    alert(`${bookToAdd.title} has been added to your cart.`);
  } else {
    alert("Book not found.");
  }

  displayCart();
}

function removeFromCart(index) {
  let username = localStorage.getItem("currentUser");
  if (!username) {
    alert("Please log in to remove books from the cart.");
    return;
  }
  let bookTitle = newUser.carts[username][index].title;
  newUser.removeFromCart(username, index);
  alert(`${bookTitle} has been removed from your cart.`);

  displayCart();
}

function displayCart() {
  let cartList = document.getElementById("cartList");

  if (!cartList) {
    console.error("cartList element not found!");
    return;
  }

  let username = localStorage.getItem("currentUser");
  cartList.innerHTML = "";

  if (!username) {
    cartList.innerHTML =
      "<p class='message'>Please log in to view your cart.</p>";
    return;
  }

  if (newUser.carts[username] && newUser.carts[username].length > 0) {
    let totalPrice = 0;

    newUser.carts[username].forEach((book, index) => {
      let cartCard = document.createElement("div");
      cartCard.classList.add("cart-card");

      cartCard.innerHTML = `
        <img src="${
          book.image || "default-book.jpg"
        }" alt="." class="cart-image">
        <div class="cart-info">
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Year:</strong> ${book.year}</p>
          <p><strong>Price:</strong> $${book.price}</p>
          <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
        </div>
      `;

      cartList.appendChild(cartCard);
      totalPrice += parseFloat(book.price);
    });

    // Total Price and Buy Now Section
    let totalSection = document.createElement("div");
    totalSection.classList.add("total-section");
    totalSection.innerHTML = `
      <p class="total-price"><strong>Total Price: $${totalPrice.toFixed(
        2
      )}</strong></p>
      <button onclick="buyNow()" class="buy-all-btn">Buy Now</button>
    `;
    cartList.appendChild(totalSection);
  } else {
    cartList.innerHTML = "<p class='message'>No items in cart</p>";
  }
}

function openCartPage() {
  window.location.href = "cart.html";
}

function buyNow() {
  let username = localStorage.getItem("currentUser");
  if (!username) {
    alert("Please log in to complete your purchase.");
    return;
  }

  if (newUser.carts[username] && newUser.carts[username].length > 0) {
    alert("Purchase successful! Thank you for shopping.");
    newUser.carts[username] = []; // Clear cart after purchase
    newUser.saveToLocalStorage("carts", newUser.carts);
    displayCart(); // Refresh cart display
  } else {
    alert("Your cart is empty!");
  }
}

console.log(newUser.logins);
document.addEventListener("DOMContentLoaded", function () {
  displayCart();
});
window.checkUser = checkUser;
window.addcart = addcart;
window.displayBooks = displayBooks;
window.displayCart = displayCart;
window.openCartPage = openCartPage;
window.openuserpage = openuserpage;
window.removeFromCart = removeFromCart;
window.buyNow = buyNow;
window.searchBooks = searchBooks;

document.addEventListener("DOMContentLoaded", function () {
  let usernameInput = document.getElementById("username");
  if (!usernameInput) {
    console.error("Username input not found!");
    return;
  }

  document.getElementById("addUserBtn").addEventListener("click", checkUser);
});
