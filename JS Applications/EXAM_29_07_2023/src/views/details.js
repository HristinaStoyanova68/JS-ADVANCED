import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteById, get, post } from "../data/api.js";
import { getUserData } from "../data/sessions.js";
import { endpoints } from "../utils.js";

const detailsTemplate = (data, canEdit, canLike, likes, onDelete, onLike) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-category">${data.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${data.description}</p>
                   <p id ="more-info">${data.moreInfo}</p>
              </div>
              <h3>Likes:<span id="likes">${likes}</span></h3>
               <div id="action-buttons">
               ${canEdit ? html`
               <a href="/catalog/${data._id}/edit" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` : nothing}
            ${canLike ? html`<a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>` : nothing}
          </div>
            </div>
        </div>
      </section>
`;

export async function detailsPage(ctx) {
    const factId = ctx.params.id;

    const data = await get(endpoints.byId(factId));

    const userData = getUserData();
    let canEdit = false;

    if (userData) {
        data._ownerId == userData._id ? canEdit = true : canEdit = false;
    }

    let canLike = false;

    if (userData && userData._id != data._ownerId) {
      canLike = await get(endpoints.userLikesCount(factId, userData._id)) == 0;
    }

    const likes = await get(endpoints.likes(factId));

    ctx.render(detailsTemplate(data, canEdit, canLike, likes, onDelete, onLike));

    async function onDelete() {
        const toDelete = confirm('Are you sure you want to delete this item?');

        if (toDelete) {
            deleteById(endpoints.byId(factId));
            ctx.page.redirect('/catalog');
        }
    }

    async function onLike() {
      await post(endpoints.like, {factId});

      ctx.page.redirect(`/catalog/${factId}`);
    }
}