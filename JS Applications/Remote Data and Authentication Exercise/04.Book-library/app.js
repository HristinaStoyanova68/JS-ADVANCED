const loadBookBtn = document.getElementById('loadBooks');
loadBookBtn.addEventListener('click', getBooks);

const booksTableBody = document.querySelector('#books-table tbody');
booksTableBody.querySelectorAll('tr').forEach(tr => tr.remove());

let bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', handleFormSubmit);

function handleEdit(e) {

    let currentBook = e.target.closest('.book');
    let currentTitle = currentBook.querySelector('.title');
    let currentAuthor = currentBook.querySelector('.author');
    console.log(currentBook);
    let formHeading = bookForm.querySelector('h3');
    formHeading.textContent = 'Edit FORM';

    bookForm.dataset.entryId = currentBook.dataset.id;
    bookForm.dataset.isEdit = true;

    let titleInput = bookForm.querySelector('input[name="title"');
    let authorInput = bookForm.querySelector('input[name="author"');

    titleInput.value = currentTitle.textContent;
    authorInput.value = currentAuthor.textContent;
}
async function handleFormSubmit(e) {
    e.preventDefault();

    let form = e.currentTarget;
    let formData = new FormData(form);

    if (form.dataset.isEdit !== undefined) {
        let id = form.dataset.entryId;
        editBook(formData, id);
    } else {
        createBook(formData);
    }
}

async function deleteBook(e) {
    let bookToDelete = e.target.closest('.book');
    let id = bookToDelete.dataset.id;
    let url = `http://localhost:3030/jsonstore/collections/books/${id}`;

    let deleteResponse = await fetch(url, {
        method: 'DELETE',
    });

    if (deleteResponse.status === 200) {
        bookToDelete.remove();
    }
}

async function editBook(formData, id) {
    let editBook = {
        title: formData.get('title'),
        author: formData.get('author'),
    }

    let url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    let editResponse = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editBook),
    });

    let editResult = await editResponse.json();
    let editedBook = booksTableBody.querySelector(`tr.book[data-id="${id}"]`)
    let editedHtmlBook = createHtmlBook(editResult, editResult._id);
    editedBook.replaceWith(editedHtmlBook);
    
    let inputs = bookForm.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });

    // let titleInput = bookForm.querySelector('input[name="title"]');
    // titleInput.value = '';
    // let authorInput = bookForm.querySelector('input[name="author"]');
    // authorInput.value = '';
}

async function createBook(formData) {

    let newBook = {
        title: formData.get('title'),
        author: formData.get('author'),
    }

    let url = 'http://localhost:3030/jsonstore/collections/books';
    let createResponse = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBook),
    });

    let createResult = await createResponse.json();
    let createdHtmlBook = createHtmlBook(createResult, createResult._id);
    booksTableBody.appendChild(createdHtmlBook);

    let inputs = bookForm.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });

    // let titleInput = bookForm.querySelector('input[name="title"]');
    // titleInput.value = '';
    // let authorInput = bookForm.querySelector('input[name="author"]');
    // authorInput.value = '';

}

async function getBooks() {

    const url = 'http://localhost:3030/jsonstore/collections/books';
    const getBooksResponse = await fetch(url);
    const books = await getBooksResponse.json();

    booksTableBody.querySelectorAll('tr').forEach(tr => tr.remove());

    Object.keys(books).forEach(key => {
        let htmlBook = createHtmlBook(books[key], key);
        booksTableBody.appendChild(htmlBook);
    })
}

function createHtmlBook(book, id) {

    let titleTd = createElement('td', { class: 'title' }, book.title);
    let authorTd = createElement('td', { class: 'author' }, book.author);
    let editBtn = createElement('button', undefined, 'Edit');
    editBtn.addEventListener('click', handleEdit);
    let deleteBtn = createElement('button', undefined, 'Delete');
    deleteBtn.addEventListener('click', deleteBook);
    let buttonsTd = createElement('td', undefined, editBtn, deleteBtn);
    let tr = createElement('tr', { class: 'book' }, titleTd, authorTd, buttonsTd);
    tr.dataset.id = id;

    return tr;
}

function createElement(tag, attributes, ...params) {
    let element = document.createElement(tag);
    let firstValue = params[0];

    if (params.length === 1 && typeof (firstValue) !== 'object') {
        if (['input', 'textarea'].includes(tag)) {
            element.value = firstValue;
        }
        else {
            element.textContent = firstValue;
        }
    } else {
        element.append(...params);
    }

    if (attributes !== undefined) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        })
    }

    return element;
}



