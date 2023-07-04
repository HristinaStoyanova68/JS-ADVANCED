//1.add event listeners to  the buttons
//2.create addComment func - get data from input
//2.1POST request to the server
//3create displayComments func - fetch all comments from server
//display the data

function attachEvents() {

    document.querySelector('#refresh').addEventListener('click', displayComments);    
    document.querySelector('#submit').addEventListener('click', addComments);
}
const baseUrl = 'http://localhost:3030/jsonstore/messenger';

function addComments() {
    let authorNameElement = document.querySelector('[name="author"]');
    let contentElement = document.querySelector('[name="content"]');

    if (!authorNameElement.value || !contentElement.value) {
        return;
    } 

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            author: authorNameElement.value.trim(),
            content: contentElement.value.trim(),
        })
    })
    .then(response => {
        if (response.ok == false) {
            throw new Error('Error creating new record');
        }

        return response.json();
    })
    .catch(err => alert(err));

    authorNameElement.value = '';
    contentElement.value = '';

    //displayComments();
    
}

function displayComments() {
    fetch(baseUrl)
    .then(response => {
        if (response.ok == false) {
            throw new Error('Error');
        }

        return response.json();
    })
    .then(data => {
        let textArea = document.querySelector('#messages');
        let comments = [];

        Object.values(data).forEach(user => comments.push(`${user.author}: ${user.content}`));
        textArea.value = comments.join('\n');
    })
    .catch(err => alert(err.message))
}

attachEvents();