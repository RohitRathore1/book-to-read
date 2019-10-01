const storageManager = (() => {
  const localStorage = window.localStorage;
  const books = loadLocalStorage();

  const getBooks = () => books;

  function addBook(book) {
    const newBook = {[book.title]: book};
    books.push(newBook[`${book.title}`]);

    saveLocalStorage();
  }

  function deleteBook(index) {
    books.splice(index, 1);

    saveLocalStorage();
  }

  function toggleReadBook(index) {
    books[index].read === "yes" ? books[index].read = "no" : books[index].read = "yes";

    saveLocalStorage();
  }

  function saveLocalStorage() {
    localStorage.setItem("bookslist", JSON.stringify(books));
  }

  function loadLocalStorage() {
    if (localStorage.getItem("bookslist")) {
      return JSON.parse(localStorage.getItem("bookslist"));
    } else {
      const quixote = {title: "Don Quixote", author: "Miguel de Cervantes", pages: 600, read: "no"};
      const lostTime = {title: "In Search of Lost Time", author: "Marcel Proust", pages: 500, read: "no"};
      const ulysses = {title: "Ulysses", author: "James Joyce", pages: 500, read: "no"};
      const gatsby = {title: "The Great Gatsby", author: "F.Scott Fitzgerald", pages: 400, read: "no"};
      const mobyDick = {title: "Moby Dick", author: "Herman Melville", pages: 600, read: "no"};
      const hamlet = {title: "Hamlet", author: "William Shakespeare", pages: 200, read: "no"};
      return [quixote, lostTime, ulysses, gatsby, mobyDick, hamlet]
    }
  }

  return { addBook, deleteBook, toggleReadBook, getBooks }

})();

export default storageManager
