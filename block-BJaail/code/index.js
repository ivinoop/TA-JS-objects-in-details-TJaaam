let form = document.querySelector(".form");
let bookList = document.querySelector(".bookList");

const nameElm = document.getElementById("author");
const titleElm = document.getElementById("title");
const isbnElm = document.getElementById("isbn");

class BookList {
  constructor(root, list = []) {
    this.books =  list;
    this.root = root;
  }

  add(title, author, isbn) {
    let book = new Book(title, author, isbn);
    this.books.push(book);
    this.createUI();
    return this.books.length;
  }

  handleDelete(id) {
    let index = this.books.findIndex(book => book.id === id);
    this.books.splice(index, 1);
    this.createUI();
    return this.books.length;
  }

  createUI () {
    this.root.innerHTML = "";
    this.books.forEach((book) => {
      let ui = book.createUI();
      ui.querySelector("span").addEventListener("click", this.handleDelete.bind(this, book.id));
      this.root.append(ui);
      });
    } 
}

class Book {
  constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.id =  `id-${Date.now()}`;
  } 

  createUI(){
    let li = document.createElement("li");
    let deleteElm = document.createElement("span");
    deleteElm.innerText = "❌";            
    let title = document.createElement("h3");
    title.innerText = this.title;
    let author = document.createElement("p");
    author.innerText = this.author;
    let isbn = document.createElement("p");
    isbn.innerText = `ISBN: ${this.isbn}`;
    let button = document.createElement("button");

    li.append(title, author, isbn, deleteElm);
    return li;
  }    
}

let library = new BookList(bookList);
library.add("Animal Farm", "Gorge Orwell", "9780451526342");
library.add("The Old Man and the Sea", "Ernest Hemingway", "978-0099908401");

function handleSubmit(event) {
  event.preventDefault();
  const name = nameElm.value;
  const title = titleElm.value;
  const isbn = isbnElm.value;
  library.add(name, title, isbn);

  nameElm.value = "";
  titleElm.value = "";
  isbnElm.value = "";
}

form.addEventListener("submit", handleSubmit);