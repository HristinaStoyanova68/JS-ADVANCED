import { register } from "../api/data.js";

let section = document.getElementById('registerPage');
section.remove();

let ctx = null;

export function showRegister(context) {
    ctx = context;
    context.showSection(section);
}

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(form);
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();
    let repeatPass = formData.get('repeatPassword').trim();

    if (email == '' || password == '') {
        alert('All fields are required!');
        return form.reset();
    }

    if (password != repeatPass) {
        alert(`Passwords d'not match!`);
        return form.reset();
    }

    await register(email, password);
    form.reset();
    ctx.goTo('home');
    ctx.updateNav();
}


