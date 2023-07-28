import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteMeme, getMemeDetails } from "../data/meme.js";
import { getUserData } from "../data/sessions.js";


const detailsTemplate = (data, canEdit, onDelete) => html`
<section id="meme-details">
            <h1>Meme Title: ${data.title}</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${data.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${data.description}</p>

                    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                    ${canEdit ? html`
                    <a class="button warning" href="/catalog/${data._id}/edit">Edit</a>
                    <button class="button danger" @click=${onDelete}>Delete</button>` : nothing}                    
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const memeId = ctx.params.id;
   // console.log(memeId);

    const data = await getMemeDetails(memeId);
    //console.log(data);

    const userData = getUserData();
    let canEdit = false;

    if (userData) {
        data._ownerId == userData._id ? canEdit = true : canEdit = false;
    }

    ctx.render(detailsTemplate(data, canEdit, onDelete));

    async function onDelete() {
        const toDelete = confirm('Are you sure you want to delete this meme?');

        if (toDelete) {
            await deleteMeme(memeId);
            ctx.page.redirect('/catalog');
        }
    }
}