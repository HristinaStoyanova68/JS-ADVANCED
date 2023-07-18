import {html} from '../../node_modules/lit-html/lit-html.js';

const aboutTemplate = () => html`
<h1>About Us</h1>
<p>Contact: +359 02 333 444</p>
`;

export function aboutPage(ctx) {
    ctx.render(aboutTemplate());
}