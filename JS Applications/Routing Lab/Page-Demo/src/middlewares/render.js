import {render} from '../../node_modules/lit-html/lit-html.js';

const main = document.querySelector('main');

export function addRender(ctx, next) {
    console.log('hitting middleware');

    // ctx.main = main;
    // ctx.show = (html) => main.innerHTML = html;
    ctx.render  = renderView;
    next();
}

function renderView(content) {
    render(content, main);
}