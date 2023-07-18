import page from '../node_modules/page/page.mjs';

const main = document.querySelector('main');



page('/home', homePage);
page('/catalog', () => main.innerHTML = `<h1>Catalog</h1>
    <ul>
        <li><a href="/catalog/1">Product 1</a></li>
        <li><a href="/catalog/2">Product 2</a></li>
        <li><a href="/catalog/3">Product 3</a></li>
    </ul>`);
page('/catalog/:productId', productPage);
page('/catalog/:category/:id', category);
page('/about', () => main.innerHTML = 'what about');
//page('*', () => main.innerHTML = '404 Not Found');

page.start();

function homePage(ctx) {
    main.innerHTML = 'home path';
}

function productPage(ctx) {
    main.innerHTML = 'product page' + ctx.params.productId;
}

function category(ctx) {
const categoryName = ctx.params.category;
const id = ctx.params.id;
main.innerHTML = `<h1>Catalog</h1>
<h2>${categoryName}</h2>
<p>Viewing product: ${id}<p>
`;

}