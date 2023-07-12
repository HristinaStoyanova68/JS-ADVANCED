import "./src/api/api.js";
import { showCatalog } from "./src/views/catalog.js";
import { showCreate } from "./src/views/create.js";
import { showDetails } from "./src/views/details.js";
import { showHome } from "./src/views/home.js";
import { showLogin } from "./src/views/login.js";
import { showRegister } from "./src/views/register.js";
import { logout } from "./src/api/data.js";

let main = document.querySelector('main');

let links = {
    'homeLink': 'home',
    'catalogLink': 'catalog',
    'getStartedLink': 'home',
    'createLink': 'create',
    'loginLink': 'login',
    'registerLink': 'register',
};

let views = {
    'home': showHome,
    'login': showLogin,
    'register': showRegister,
    'catalog': showCatalog,
    'create': showCreate,
    'details': showDetails,
};

let nav = document.querySelector('nav');
nav.addEventListener('click', onNavigation);

document.getElementById('logoutBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    await logout();
    updateNav();
    goTo('home');
})

function onNavigation(event) {
    event.preventDefault();
    let name = links[event.target.id];
    goTo(name);
}

let ctx = {
    showSection,
    updateNav,
    goTo,
}

function goTo(name, ...params) {
    let view = views[name];

    if (typeof view == 'function') {
        view(ctx, ...params);
    }
}

function showSection(name) {
    main.replaceChildren(name);
}

updateNav();

function updateNav () {
    //1. add classes to buttons -->> index.html
    //2. get userData -->> sessionStorage
    //3. hide not needed items

    let userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData) {
        [...nav.querySelectorAll('.user')].forEach(li => li.style.display = 'block');
        [...nav.querySelectorAll('.guest')].forEach(li => li.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user')].forEach(li => li.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(li => li.style.display = 'block');
    }
}