import { html } from '../../node_modules/lit-html/lit-html.js';
import { getFurnitures } from '../data/catalogFurnitures.js';

const catalogTemplate = (list) => html`
<h1>Catalog Page</h1>
<p>Welcome to our catalog</p>
<ul>${list.map(productTemplate)}</ul>
`;

const productTemplate = (item) => html`
<li>${item.make}</li>
`;

export async function catalogPage(ctx) {
    // const request = await fetch('http://localhost:3030/data/catalog');
    // const list = await request.json();
    //ctx.render(catalogTemplate([{ make: 'Part1' }, { make: 'Part2' }]));

    const list = await getFurnitures();
    ctx.render(catalogTemplate(list));
}