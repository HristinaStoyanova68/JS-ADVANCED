//initialization
//-find relevant section 

import { showView } from './dom.js';
import { showCreate } from './create.js';
import { createDomElement } from './dom.js';
import { showDetails } from './details.js';

//-detach section from DOM
const section = document.getElementById('home-page');
const addMovieBtn = section.querySelector('#add-movie-button');
const before = section.querySelector('#movie');
const catalog = section.querySelector('#movies-list');
catalog.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;

    if (target.tagName == 'BUTTON') {
        target = target.parentElement;
    } 
    if (target.tagName == 'A') {
        const id = target.dataset.id;
        //console.log(id);
        showDetails(id);
    }   
});

section.querySelector('#createLink').addEventListener('click', (event) => {
    event.preventDefault();
    showCreate();
});

section.remove();

//display logic

export function showHome() {
    showView(section);
    getMovies();
}

export function hideCreateBtn() {
    addMovieBtn.remove();
}
export function addCreateBtn() {
    section.insertBefore(addMovieBtn, before);
}

async function getMovies() {
    //catalog.replaceChildren(createDomElement('p', {}, 'Loading...'));
    try {
        const res = await fetch('http://localhost:3030/data/movies');

        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }
        const data = await res.json();

        catalog.replaceChildren(...data.map(createMovieCard));
    } catch (err) {
        alert(err.message);
    }
}

function createMovieCard(movie) {
    const element = createDomElement('div', { className: 'catd mb-4' });
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${movie.title}</h4>
        </div>
        <div class="card-footer">
            <a data-id="${movie._id} "href="#">
                <button type="button" class="btn btn-info">Details</button>
            </a>
        </div>
    `;

    return element;
}


