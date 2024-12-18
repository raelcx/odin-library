const myBooks = [];

const addNewBookModal = document.querySelector("#addNewBookModal");
const newBookBtn = document.querySelector("#newBookBtn");
const closeNewBookModal = document.querySelector("#closeNewBookModal");
const addBookBtn = document.querySelector("#addBookBtn");

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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const bookList = document.querySelector("#bookList");
    const bookDiv = document.createElement("div");

    const elements = ['bookTitle', 'bookAuthor', 'bookPages', 'bookRead'].map(() => document.createElement("p"));

    elements[0].textContent = 'Book Title: ' + title;
    bookDiv.append(elements[0]);
    elements[1].textContent = 'Book Author: ' + author;
    bookDiv.append(elements[1]);
    elements[2].textContent = 'Book Pages: ' + pages;
    bookDiv.append(elements[2]);
    elements[3].textContent = 'Book read? ' + read;
    bookDiv.append(elements[3]);

    bookList.append(bookDiv);
}

function displayBooks() {
    const bookList = document.querySelector("#bookList");

    for (book in myBooks) {
        const bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", (`book-${book}`));

        const elements = ['bookTitle', 'bookAuthor', 'bookPages', 'bookRead'].map(() => document.createElement("p"));

        elements[0].textContent = 'Book Title: ' + myBooks[book].title;
        bookDiv.append(elements[0]);
        elements[1].textContent = 'Book Author: ' + myBooks[book].author;
        bookDiv.append(elements[1]);
        elements[2].textContent = 'Book Pages: ' + myBooks[book].pages;
        bookDiv.append(elements[2]);
        elements[3].textContent = 'Book read? ' + myBooks[book].read;
        bookDiv.append(elements[3]);

        bookList.append(bookDiv);
    }
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
