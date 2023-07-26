import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { del, get, post } from "../data/api.js";
import { getUserData } from "../data/session.js";
import { createSubmitHandler, endpoints } from "../utils.js";

const detailstTemplate = (data, canEdit, onDelete, onComment, comments, userData) => html`
<section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">
                <div class="game-header">
                    <img class="game-img" src=${data.imageUrl}/>
                    <h1>${data.title}</h1>
                    <span class="levels">MaxLevel: ${data.maxLevel}</span>
                    <p class="type">${data.category}</p>
                </div>
                <p class="text">${data.summary}</p>
                <div class="details-comments">
                    <h2>Comments:</h2>
                    ${comments.length != 0 ? html`
                    <ul>${comments.map(c => html`
                    <li class="comment">
                            <p>Content: ${c.comment}.</p>
                        </li>`)}
                    </ul>` : html`<p class="no-comment">No comments.</p>`}                    
                </div>
                ${canEdit ? html`<div class="buttons">
                    <a href="/catalog/${data._id}/edit" class="button">Edit</a>
                    <a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>
                </div>` : nothing}
                
            </div>
            ${userData && !canEdit ? html`
            <article class="create-comment">
                <label>Add new comment:</label>
                <form class="form" @submit=${onComment}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>` : nothing}
        </section>
`;

export async function detailsPage(ctx) {
    const gameId = ctx.params.id;

    const data = await get(endpoints.byId(gameId));
    const userData = getUserData();
    let canEdit = false;

    const comments = await get(endpoints.allComments(gameId));
    

    if (userData) {
        data._ownerId == userData._id ? canEdit = true : canEdit = false;
    }

    ctx.render(detailstTemplate(data, canEdit, onDelete, createSubmitHandler(onComment), comments, userData));

    async function onDelete() {
        const toDelete = confirm('Are you sure you want to delete this item?');

        if (toDelete) {
            del(endpoints.byId(gameId));
            ctx.page.redirect('/')
        }
    }

    async function onComment(data, form, event) {

        const comment = data.comment;

        await post(endpoints.createComment, {gameId, comment});
        form.reset();
        ctx.page.redirect(`/catalog/${gameId}`);
    }
}