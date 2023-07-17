import { html, render } from '../node_modules/lit-html/lit-html.js';
import { until } from '../node_modules/lit-html/directives/until.js';

export {
    html,
    render,
    until,
};

//api module:
//load books
//edit book
//delete book
//crerate book

const host = 'http://localhost:3030/jsonstore/collections';

async function request(url, method = 'get', data) {
    const options = {
        method,
        headers: {},
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'applications/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        } 

            return response.json();
      
    } catch (error) {
        const err = error.message;
        //alert('All fields are required');
        alert(err);
        throw error;
    }
}

export async function getBooks() {
    return request('/books');
}

export async function getById(id) {
    return request('/books/' + id);
}

export async function createBook(book) {
    return request('/books', 'post', book);
}

export async function updateBook(id, book) {
    return request('/books/' + id, 'put', book);
}

export async function deleteBook(id) {
    return request('/books/' + id, 'delete');
}