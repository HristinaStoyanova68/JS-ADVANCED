import { getAllIdeas } from "../api/data.js";

let section = document.getElementById('dashboard-holder');
section.remove();

let ctx = null;

export function showCatalog(context) {
    ctx = context;
    context.showSection(section);
    loadIdeas();
    section.addEventListener('click', onDetails);
}

async function onDetails(event) {
    event.preventDefault();

    if (event.target.tagName != 'A') {
        return;
    }

    const currIdeaId = event.target.dataset.id;
    ctx.goTo('details', currIdeaId);
}

async function loadIdeas() {
    let ideas = await getAllIdeas();

    if (ideas.length == 0) {
        let element = document.createElement('h1');
        element.textContent = 'No ideas yet! Be the first one :)';
        section.replaceChildren(element);
    } else {
        let fragment = document.createDocumentFragment();
        ideas.map(createIdeaCard).forEach(i => fragment.appendChild(i));
        section.replaceChildren(fragment);
    }
}

function createIdeaCard(idea) {
    let element = document.createElement('div');
    element.classList = 'card overflow-hidden current-card details';
    element.style.width = '20rem';
    element.style.height = '18rem';

    element.innerHTML = `
        <div class="card-body">
                    <p class="card-text">${idea.title}</p>
                </div>
                <img class="card-image" src="${idea.img}"
                    alt="Card image cap">
                <a data-id="${idea._id}" class="btn" href="">Details</a>
                `;

    return element;
}
//</div>