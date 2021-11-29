// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list, bookName) {
    let bookList1 = [...list];
    bookList1.push(bookName);
    return bookList1;
    // Change code above this line
}

// Change code below this line
function remove(list, bookName) {
    let bookList = [...list];
    const book_index = bookList.indexOf(bookName);
    if (book_index >= 0) {

        bookList.splice(book_index, 1);
        return bookList;

        // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);