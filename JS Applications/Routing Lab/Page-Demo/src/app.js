import page from '../node_modules/page/page.mjs';
import { addRender } from './middlewares/render.js';
import {homePage} from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { aboutPage } from './views/about.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { detailsPage } from './views/details.js';
import { getUserData } from './util.js';
//import { about, catalog, homePage, productPage } from './views.js';


page(addRender);
page((ctx, next) => {ctx.updateNav = updateNav; next();});
page('/index.html', '/home');
page('/home', homePage);
page('/catalog', catalogPage);
page('/catalog/:id', detailsPage);
page('/catalog/:id/edit', () => console.log('yes'));
page('/about', aboutPage);
page('/login', loginPage);
page('/register', registerPage);
// page('/home', homePage);
// page('/catalog', catalog);
// page('/catalog/:productId', productPage);
// // page('/catalog/:category/:id', category);
// page('/about', about);
// page('*', () => main.innerHTML = '404 Not Found');

updateNav();

page.start();

function updateNav() {
    const userData = getUserData();

    if (userData != null) {
        document.querySelectorAll('.guest').forEach(entry => entry.style.display = 'none');
    } else {
        document.querySelectorAll('.guest').forEach(entry => entry.style.display = '');
    }
}





// function category(ctx) {
// const categoryName = ctx.params.category;
// const id = ctx.params.id;
// main.innerHTML = `<h1>Catalog</h1>
// <h2>${categoryName}</h2>
// <p>Viewing product: ${id}<p>
// <button>Back to Catalog</button>
// `;

// }