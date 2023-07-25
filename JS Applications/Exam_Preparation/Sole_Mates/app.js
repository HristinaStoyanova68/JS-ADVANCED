import { render } from "./node_modules/lit-html/lit-html.js";
import { getUserData } from "./src/api/sessions.js";
import { layoutTemplate } from "./src/layout.js";
import page from "./node_modules/page/page.mjs";
import { homePage } from "./src/views/home.js";
import { loginPage } from "./src/views/login.js";
import { logout } from "./src/api/user.js";
import { registerPage } from "./src/views/register.js";
import { catalogPage } from "./src/views/catalog.js";
import { detailsPage } from "./src/views/details.js";
import { editPage } from "./src/views/edit.js";
import { createPage } from "./src/views/create.js";

const root = document.getElementById('wrapper');

page(decorateContext);

page('/index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/catalog', catalogPage);
page('/catalog/:id', detailsPage);
page('/catalog/:id/edit', editPage);
page('/create', createPage);


page.start();

function renderView(content) {
    const userData = getUserData();

    render(layoutTemplate(userData, content), root);
    
}

function decorateContext(ctx, next) {

    ctx.render = renderView;

    next();
}

function onLogout(ctx) {
    logout();
    ctx.page.redirect('/catalog');
}