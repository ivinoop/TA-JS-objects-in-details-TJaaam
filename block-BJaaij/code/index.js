class Book {
  constructor(title, category, author) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}

class Booklist {
  constructor() {
    this.allBooks = [];
    this.readIndex = 0;
  }
  add(books = []) {
    this.allBooks = this.allBooks.concat(books);
  }
  getCurrentBook() {
    return this.allBooks[this.readIndex];
  }
  get getCurrentBook() {
    return this.allBooks[this.readIndex + 1];
  }
  getPrevBook() {
    return this.allBooks[this.readIndex - 1];
  }
  changeCurrentBook(value) {
    this.readIndex = value;
  }
}

// Test

let book1 = new Book("Who Will Cry When You Die", "Guide", "Robin Sharma");
let book2 = new Book("Sapiens", "History", "Yuval Noah Harrari");
let book3 = new Book("Lord of the rings", "Fantasy", "J R R Tolkiens");
let book4 = new Book("Ego Is The Enemy", "Guide", "Ryan Holiday");
let book5 = new Book("1984", "SciFi", "Gorge Orewell");
let book6 = new Book("Dune", "SciFi", "Frank Herbert");

let bookList1 = new Booklist();

bookList1.add([book1, book2, book3, book4, book5, book6]);