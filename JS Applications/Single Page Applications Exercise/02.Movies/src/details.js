//initialization
//-find relevant section 

import { showView } from './dom.js';
import { createDomElement } from './dom.js';
import { showEdit } from './edit.js';
import { showHome } from './home.js';

//-detach section from DOM
const section = document.getElementById('movie-example');
section.remove();

//display logic

export function showDetails(movieId) {
    getMovie(movieId);
    showView(section);
}

async function getMovie(id) {
    //section.replaceChildren(e('p', {}, 'Loading...'))
    const requests = [
        fetch('http://localhost:3030/data/movies/' + id),
        fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`),
    ];

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData != null) {
        requests.push(fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`));
    }

    const [movieRes, likesRes, hasLikedRes] = await Promise.all(requests);
    const [movieData, likes, hasLiked] = await Promise.all([
        movieRes.json(),
        likesRes.json(),
        hasLikedRes && hasLikedRes.json()
    ]);

    section.replaceChildren(createDetails(movieData, likes, hasLiked));
}

function createDetails(movie, likes, hasLiked) {
    //console.log(hasLiked);
    const controls = createDomElement(
        'div', 
        { className: 'col-md-4 text-center' },
        createDomElement('h3', { className: 'my-3' }, 'Movie Description'),
        createDomElement('p', {}, movie.description)
    );

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData != null) {
        if (userData.id == movie._ownerId) {
            controls.appendChild(createDomElement('a', { className: 'btn btn-danger', href: '#', onClick: onDelete }, 'Delete'));
            controls.appendChild(
                createDomElement(
                    'a', 
                    { 
                        className: 'btn btn-warning', 
                        href: '#', 
                        onClick: () => showEdit(movie) 
                    }, 
                    'Edit'));
        } else {
            if (hasLiked.length > 0) {
                controls.appendChild(createDomElement('a', { className: 'btn btn-primary', href: '#', onClick: onUnlike }, 'Unlike'));
            } else {
                controls.appendChild(createDomElement('a', { className: 'btn btn-primary', href: '#', onClick: onLike }, 'Like'));
            }
        }
    }
    controls.appendChild(createDomElement('span', { className: 'enrolled-span' }, `Liked ${likes}`));

    const element = createDomElement('div', { className: 'container' },
        createDomElement('div', { className: 'row bg-light text-dark' },
            createDomElement('h1', {}, `Movie title: ${movie.title}`),
            createDomElement('div', { className: 'col-md-8' },
                createDomElement('img', { 
                    className: 'img-thumbnail', 
                    src: movie.img, 
                    alt: 'Movie' 
                })
            ),
            controls
        )
    );

    return element;

    async function onDelete() {
        await fetch('http://localhost:3030/data/movies/' + movie._id, {
            method: 'DELETE',
            headers: {
                'X-Authorization': userData.token,
            }
        });
        showHome();
    }

    async function onLike() {
        await fetch('http://localhost:3030/data/likes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token,
            },
            body: JSON.stringify({
                movieId: movie._id
            })
        });
        showDetails(movie._id);        
    }

    async function onUnlike() {
        const likeId = hasLiked[0]._id;
        
        await fetch('http://localhost:3030/data/likes/' + likeId, {
            method: 'DELETE',
            headers: {
                'X-Authorization': userData.token,
            }
        });

        showDetails(movie._id);
    }
}

