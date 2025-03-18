class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem("books")) || [];

    if (this.books.length === 0) {
      this.books = [
        {
          title: "Naruto",
          author: "Masashi Kishimoto",
          year: 1999,
          price: 1000,
          image:
            "https://cdn.kobo.com/book-images/e354f3eb-d7f8-4339-9c95-f6b1885bad7d/1200/1200/False/naruto-vol-1.jpg",
        },
        {
          title: "One Piece",
          author: "Eiichiro Oda",
          year: 1997,
          price: 1000,
          image:
            "https://www.japantimes.co.jp/uploads/imported_images/uploads/2017/09/p18-kosaka-onepiece-a-20170924.jpg",
        },
        {
          title: "Attack on Titan",
          author: "Hajime Isayama",
          year: 2009,
          price: 800,
          image:
            "https://2.bp.blogspot.com/-56JDbApM6Mw/VXvK6pyYq7I/AAAAAAAAAs8/GacUNOx29DY/s1600/AoT%2BVol.%2B1%2BHajime%2BIsayama.jpg",
        },
        {
          title: "Boruto",
          author: "Masashi Kishimoto",
          year: 2016,
          price: 500,
          image: "https://m.media-amazon.com/images/I/61lpmdy4VHL.jpg",
        },
        {
          title: "Death Note",
          author: "Tsugumi Ohba, Takeshi Obata",
          year: 2003,
          price: 1000,
          image:
            "https://th.bing.com/th/id/OIP.za5Liz3f8ZWZ1J9mlORfXQAAAA?rs=1&pid=ImgDetMain",
        },
        {
          title: "Dargon Ball",
          author: "Akira Toriyama",
          year: 1984,
          price: 900,
          image:
            "https://www.manga-sanctuary.com/v10_good/public/img/objet/origin/6616.jpg",
        },
        {
          title: "Fullmetal Alchemist",
          author: "Hiromu Arakawa",
          year: 2001,
          price: 1000,
          image:
            "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781591169208_9781591169208_hr.jpg",
        },
        {
          title: "Demon Slayer: Kimetsu no Yaiba",
          author: "Koyoharu Gotouge",
          year: 2016,
          price: 2000,
          image:
            "https://1.bp.blogspot.com/-eHYw2rh0HPg/XmWZ3_XMkSI/AAAAAAABRqo/FmDNQU0e0RMbMZyeCAPvW_1EbShTLUuogCLcBGAsYHQ/s1600/81ZNkhqRvVL.jpg",
        },
        {
          title: "Tokyo Ghoul",
          author: "Sui Ishida",
          year: 2011,
          price: 400,
          image:
            "https://th.bing.com/th/id/OIP.82Pt8p-4A5VkTpGntXVKeQHaKS?rs=1&pid=ImgDetMain",
        },
        {
          title: "My Hero Academia",
          author: "Kohei Horikoshi",
          year: 2014,
          price: 500,
          image:
            "https://th.bing.com/th/id/OIP.3yHeHOfT8sga6fUhzbpYYgHaLP?rs=1&pid=ImgDetMain",
        },
        {
          title: "Hunter x Hunter",
          author: "Yoshihiro Togashi",
          year: 1998,
          price: 800,
          image:
            "https://th.bing.com/th/id/OIP.1MFXHJzynQqYBnSzlzWhiQAAAA?rs=1&pid=ImgDetMain",
        },
        {
          title: "Jujutsu Kaisen",
          author: "Gege Akutami",
          year: "2018",
          price: "1500",
          image:
            "https://th.bing.com/th/id/R.7cf50d9860296793430a619c482173a2?rik=KXExeyIoA6ciWw&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f9781974710027_p0_v1_s1200x630.jpg&ehk=%2fIN%2bIMX4cEflMVTuLrN3J9OIy%2fU6Pk9sSR0yzPo3rWk%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          title: "Black Clover",
          author: "Yūki Tabata",
          year: "2015",
          price: "800",
          image:
            "https://th.bing.com/th/id/OIP.wFtaqiDzDbcyC_lf_z8P0wHaL0?rs=1&pid=ImgDetMain",
        },
        {
          title: "Spy x Family",
          author: "Tatsuya Endo",
          year: "2019",
          price: "700",
          image:
            "https://www.manga-news.com/public/images/vols/Spy-Family-1-kurokawa.jpg",
        },
        {
          title: "Solo Leveling",
          author: "Chugong",
          year: "2016",
          price: "950",
          image:
            "https://www.pro-bems.com/IMAGES/images_1/SL04347941/g/SL04347941_1.jpg",
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
