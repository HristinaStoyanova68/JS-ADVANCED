import { createIdea } from "../api/data.js";

let section = document.getElementById('createPage');
section.remove();

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showCreate(context) {
    ctx = context;
    context.showSection(section);
}

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(form);
    let title = formData.get('title').trim();
    let description = formData.get('description').trim();
    let img = formData.get('imageURL').trim();

    //TODO Add validations

    if (title.length < 6) {
        return alert('Title must be longer than 6 characters!');
    }

    if (description.length < 10) {
        return alert('Description must be longer than 10 characters!');
    }

    if (img.length < 5) {
        return alert('Image must be longer than 5 characters!');
    }

    const idea = {
        title,
        description,
        img,
    }
    
    createIdea(idea);
    form.reset();
    ctx.goTo('catalog');
}