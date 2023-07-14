import { deleteById, getById } from "../api/data.js";


let section = document.getElementById('detailsPage');
section.remove();

let ctx = null;
let ideaId = '';

export function showDetails(context, id) {
    ideaId = id;
    ctx = context;
    context.showSection(section);
    loadDetails();
}

async function loadDetails() {

    const deleteBtn = section.querySelector('a[class="btn detb"]');

    const ideaData = await getById(ideaId);
    const title = ideaData.title;
    const description = ideaData.description;
    const img = ideaData.img;
    const ownerId = ideaData._ownerId;
    createDetails(title, description, img);

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (!userData || userData.id != ownerId) {
        // deleteBtn.style.display = 'none';
        deleteBtn.remove();
    } else {
        // deleteBtn.style.display = 'block';
        //(section.querySelector('text-center')).appendChild(deleteBtn);
        deleteBtn.addEventListener('click', onDelete);  
    }
}

async function onDelete(event) {
    event.preventDefault();

    await deleteById(ideaId);
    ctx.goTo('catalog');
}

function createDetails(title, description, img) {

    section.querySelector('h2').textContent = title;
    section.querySelector('p.idea-description').textContent = description;
    section.querySelector('img').src = img;
}