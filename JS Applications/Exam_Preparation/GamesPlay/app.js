import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";
import { getUserData } from "./src/data/session.js";
import { layoutTemplate } from "./src/layout.js";
import { homePage } from "./src/views/home.js";
import { loginPage } from "./src/views/login.js";
import { registerPage } from "./src/views/register.js";
import { logout } from "./src/data/userAuth.js";
import { createPage } from "./src/views/create.js";

const boxDivElement = document.getElementById('box');

page(decorateContext);
page('/index.html', '/home');
page('/home', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/create', createPage);

page.start();

function decorateContext(ctx, next) {

    ctx.render = renderView;

    next();
}

function renderView(content) {
    const userdata = getUserData();

    render(layoutTemplate(content, userdata), boxDivElement);
}

function onLogout(ctx) {
    logout();
    ctx.page.redirect('/home');
}