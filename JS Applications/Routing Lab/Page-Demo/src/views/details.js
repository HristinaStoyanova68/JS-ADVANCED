import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteById, getById } from '../data/catalogFurnitures.js';
import { getUserData } from '../util.js';

const detailsTemplate = (data, onDelete) => html`
<h1>Details Page</h1>
<p>Part label: ${data.make}</p>
<p>S/N: ${data._id}</p>
<p>Product model: ${data.model}</p>
<p>Unit price: £${data.price}</p>
<p>Product description: ${data.description}</p>
${data.canEdit ? html`
<a href="/catalog/${data._id}/edit">Edit</a>
<a @click=${onDelete} href="javascript:void(0)">Delete</a>` : null}
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const data = await getById(id);

    const userData = getUserData();
    if (userData) {
        data.canEdit = userData._id == data._ownerId;
    }
    ctx.render(detailsTemplate(data, onDelete));

    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete part ${data.make}?`);
        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog');
        }
    }
}