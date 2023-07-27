import page from "./node_modules/page/page.mjs";

import { render } from "./node_modules/lit-html/lit-html.js";
import { getUserData } from "./src/data/sessions.js";
import { layoutTemplate } from "./src/layout.js";
import { catalogPage } from "./src/views/catalog.js";
import { registerPage } from "./src/views/register.js";
import { loginPage } from "./src/views/login.js";
import { logout } from "./src/data/user.js";
import { createPage } from "./src/views/create.js";
import { detailsPage } from "./src/views/details.js";
import { editPage } from "./src/views/edit.js";
import { userBooksPage } from "./src/views/userBook.js";

const mainDivElement = document.getElementById('container');

page(decorateContext);

page('/index.html', '/');
page('/', catalogPage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/create', createPage);
page('/catalog/:id', detailsPage);
page('/catalog/:id/edit/:id', editPage);
page('/my-books', userBooksPage);

page.start();


function decorateContext(ctx, next) {
    ctx.render = renderView;

    next();
}

function renderView(content) {
    const userData = getUserData();

    render(layoutTemplate(content, userData), mainDivElement);
}

async function onLogout() {
    await logout();
}