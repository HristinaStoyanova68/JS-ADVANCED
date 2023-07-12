//initialization
//-find relevant section 

import { showView } from './dom.js';
import { showHome } from './home.js';

//-detach section from DOM
const userData = JSON.parse(sessionStorage.getItem('userData'));
const section = document.getElementById('add-movie');
const form = section.querySelector('#add-movie-form');
form.addEventListener('submit', onSubmit);
section.remove();

//display logic

export function showCreate() {
    showView(section);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const {title, description, img} = Object.fromEntries(formData);

    try {
        if (title == '' || description == '' || img == '') {
            throw new Error('All fields are required');
        }

        const response = await fetch('http://localhost:3030/data/movies/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token,
            },
            body: JSON.stringify({title, description, img}),
        })

        if (response.ok != true) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();

        form.reset();
        showHome();

    } catch (error) {
        alert(error.message);
    }
}