const myBooks = [];

const addNewBookModal = document.querySelector("#addNewBookModal");
const newBookBtn = document.querySelector("#newBookBtn");
const closeNewBookModal = document.querySelector("#closeNewBookModal");
const addBookBtn = document.querySelector("#addBookBtn");
const bookList = document.querySelector("#bookList");

newBookBtn.addEventListener("click", () => {
    addNewBookModal.showModal();
})

closeNewBookModal.addEventListener("click", () => {
    addNewBookModal.close();
})

addNewBookModal.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.querySelector('input[name="read"]:checked').id;

    addBookToLibrary(title, author, pages, read);

    addNewBookModal.close();
})

// Add event listener to delete books
bookList.addEventListener("click", (e) => {
    deleteBook(e.target.className);
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);

    myBooks.push(newBook);

    displayBooks();
}

function displayBooks() {
    const bookList = document.querySelector("#bookList");

    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }

    for (book in myBooks) {
        const bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", (`book-${book}`));

        const removeBook = document.createElement("button");

        const elements = ['bookTitle', 'bookAuthor', 'bookPages', 'bookRead'].map(() => document.createElement("p"));

        elements[0].textContent = 'Book Title: ' + myBooks[book].title;
        bookDiv.append(elements[0]);
        elements[1].textContent = 'Book Author: ' + myBooks[book].author;
        bookDiv.append(elements[1]);
        elements[2].textContent = 'Book Pages: ' + myBooks[book].pages;
        bookDiv.append(elements[2]);
        elements[3].textContent = 'Book read? ' + myBooks[book].read;
        bookDiv.append(elements[3]);

        removeBook.setAttribute("class", (`book-${book}`));
        removeBook.textContent = "Remove book";

        bookDiv.append(removeBook);

        bookList.append(bookDiv);
    }
}

function deleteBook(book) {
    document.querySelector(`.${book}`).remove();

}

///////
function tempBooks() {
    let book1 = new Book('Teste título', 'Israel Carvalho', 350, 'yes');
    let book2 = new Book('Teste título2', 'Israel Carvalho2', 20, 'no');
    let book3 = new Book('Teste título3', 'Israel Carvalho3', 3502, 'yes');

    myBooks.push(book1);
    myBooks.push(book2);
    myBooks.push(book3);

}

// Calls function to add "dummy" books automatically when page loads
tempBooks();

displayBooks();
