import page from './node_modules/page/page.mjs';
import { html, render } from './node_modules/lit-html/lit-html.js';
import { loginView } from './views/login.js';
import { getCatalog, catalogView } from './views/catalog.js';
import { registerView } from './views/register.js';
import { logout } from './views/logout.js';
import { createView } from './views/create.js';
import { myPublicationsView } from './views/my-publications.js';
import { detailsView } from './views/details.js';

page('/login', loginView);
page('/catalog', catalogView);
page('/register', registerView);
page('/create', createView);
page('/my-publications', myPublicationsView);
page('/details/:detailsId', detailsView);
page.start();

document.getElementById('logoutBtn').addEventListener('click', logout);

export const updateInfo = () => {
    const userDiv = document.getElementById('user');
    const guestDiv = document.getElementById('guest');
    if (localStorage.length == 0) {
        userDiv.style.display = 'none';
        guestDiv.style.display = 'inLine';
    } else {
        userDiv.style.display = 'inLine';
        guestDiv.style.display = 'none';
    }
}

updateInfo();

const catalogTemplate2 = (catalog) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${catalog.map(c => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${c.img} />
                <p>${c.description}</p>
                <footer>
                    <p>Price: <span>${c.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${c._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
    `)}
</div>
`;

render(catalogTemplate2(await getCatalog()), document.querySelector('.container'));


