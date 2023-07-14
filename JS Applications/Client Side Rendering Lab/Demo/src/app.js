import { html, render } from '../node_modules/lit-html/lit-html.js';

import { data, products } from "./data.js";
import { getTemplate } from "./templating.js";
import { dom } from "./dom.js";

const userBlock = (user) => html`
<article class="user-block" data-id="12345">
    <span style="background-color: red">Username: ${user.name}</span>
    <span>Phone: ${user.phone}</span>
</article>
`;

const productTemplate = (product) => html`
<div class="product">
    <span style=${'color: ' + product.color}>Label: ${product.label}</span>
    <span>Price: £${product.price}</span>
    <input type="number" .value=${product.qty}>
    <button ?disabled=${product.qty == 0} @click=${() => buyProduct(product)}>Buy</button>
    ${
        product.qty == 0 
        ? html`<span>Out of stock</span>`
        : html`<span>Free shipping available for premium users</span>`
    }
</div>
`;

// const name = 'Peter';
// const result = myTag`hello, ${name}!`;
// console.log(result);

// function myTag(strings, ...values) {
//     console.log(strings, values);

//     return strings[0] + values[0] + strings[1];
// }

// const greetingTemplate = (name) => html`<h2>Hello, ${name}!</h2>`;

// const result = greetingTemplate('Lit-HTML');
// console.log(result);

// render(result, document.querySelector('main'));

const greetingTemplate = (name) => html`
<h2>Hello, ${name}!</h2>
`;
const head = document.querySelector('header');
const main = document.querySelector('main');
const list = document.getElementById('products');

start();

async function start() {


    // for (let user of data) {

    //     // const html = await getTemplate('user-block', user);
    //     // main.innerHTML += html;
    //     /*
    //     const element = document.createElement('article');
    //     element.className = 'user-block';
    //     const nameSpan = document.createElement('span');
    //     nameSpan.textContent =`UserName: ${user.name}`;
    //     element.appendChild(nameSpan);

    //     const phoneSpan = document.createElement('span');
    //     phoneSpan.textContent = `Phone: ${user.phone}`;
    //     element.appendChild(phoneSpan);

    //     main.appendChild(element);
    //     */

    //     // const element = dom('article', {className: 'user-block', dataset: {id: '12345'}},
    //     // dom('span', {}, `UserName: ${user.name}`),
    //     // dom('span', {onclick: () => alert('Messeging ' + user.phone)}, `UserPhone: ${user.phone}`)
    //     // );

    //     // main.appendChild(userBlock(user));
    // }
    render(greetingTemplate('Guest'), head);
    render(data.map(userBlock), main);
    render(products.map(productTemplate), list);

    // for (let product of products) {

    //     const html = await getTemplate('product', product);
    //     list.innerHTML +=html;       
    // }
}

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    render(greetingTemplate('Peter'), head);

});


// function userBlock(user) {
//     return dom('article', {className: 'user-block', dataset: {id: '12345'}},
//     dom('span', {style: {'backgroundColor': 'red'}}, `UserName: ${user.name}`),
//     dom('span', {onclick: () => alert('Messeging ' + user.phone)}, `UserPhone: ${user.phone}`)
//     );
// }

function buyProduct(product) {
    alert(`You bought ${product.label} for £${product.price}`);
}
