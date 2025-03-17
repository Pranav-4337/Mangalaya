class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem("books")) || [];

    if (this.books.length === 0) {
      this.books = [
        {
          title: "Naruto",
          author: "Masashi Kishimoto",
          year: 1999,
          price: 100,
        },
        { title: "One Piece", author: "Eiichiro Oda", year: 1997, price: 100 },
        {
          title: "Attack on Titan",
          author: "Hajime Isayama",
          year: 2009,
          price: 10,
        },
        { title: "Boruto", author: "Masashi Oda", year: 1997, price: 100 },
        {
          title: "Death Note",
          author: "Tsugumi Ohba, Takeshi Obata",
          year: 2003,
          price: 100,
        },
        {
          title: "Dargon Ball",
          author: "Akira Toriyama",
          year: 1984,
          price: 100,
        },
        {
          title: "Fullmetal Alchemist",
          author: "Hiromu Arakawa",
          year: 2001,
          price: 100,
        },
        {
          title: "Demon Slayer: Kimetsu no Yaiba",
          author: "Koyoharu Gotouge",
          year: 2016,
          price: 100,
        },
        { title: "Tokyo Ghoul", author: "Sui Ishida", year: 2011, price: 100 },
        {
          title: "My Hero Academia",
          author: "Kohei Horikoshi",
          year: 2014,
          price: 100,
        },
        {
          title: "Hunter x Hunter",
          author: "Yoshihiro Togashi",
          year: 1998,
          price: 100,
        },
      ];
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}

export default Library;
const myLibrary = new Library();
console.log(myLibrary.books);

