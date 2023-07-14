import { html, render } from "./node_modules/lit-html/lit-html.js";

document.getElementById('btnLoadTowns').addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.querySelector('#towns').value;

    const townList = input.split(', ');
    const cardTemplate = html`
    <ul>
        ${townList.map(town => html`
        <li>
            ${town}
        </li>
        `)}
    </ul>
    `;

    const root = document.getElementById('root');

    render(cardTemplate, root);
})
