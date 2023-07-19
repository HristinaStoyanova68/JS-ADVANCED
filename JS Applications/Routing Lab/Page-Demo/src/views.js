export function homePage(ctx) {
    ctx.show('home path');
}

export function catalog(ctx) {
    ctx.show(`<h1>Catalog</h1>
    <ul>
        <li><a href="/catalog/1">Product 1</a></li>
        <li><a href="/catalog/2">Product 2</a></li>
        <li><a href="/catalog/3">Product 3</a></li>
    </ul>`);
}

export function productPage(ctx) {
    //ctx.console.log(ctx.myValue);
    main.show('product page' + ctx.params.productId);
}

export function about(ctx) {
    ctx.show('what about');
}