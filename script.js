const myBooks = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}


let book1 = new Book('Teste título', 'Israel Carvalho', 350, 'yes');
let book2 = new Book('Teste título2', 'Israel Carvalho2', 20, 'no');
let book3 = new Book('Teste título3', 'Israel Carvalho3', 3502, 'yes');

myBooks.push(book1);
myBooks.push(book2);
myBooks.push(book3);
