import { html } from "../../node_modules/lit-html/lit-html.js";
import { get, putById } from "../data/api.js";
import { createSubmitHandler, endpoints } from "../utils.js";

const editTemplate = (data, onSubmit) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Fact</h2>
            <form class="edit-form" @submit=${onSubmit}>
              <input type="text" name="category" id="category" placeholder="Category" .value=${data.category}/>
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${data.imageUrl}/>
            <textarea id="description" name="description" placeholder="Description" rows="10" cols="50" .value=${data.description}
          ></textarea>
          <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10" cols="50" .value=${data.moreInfo}
          ></textarea>
              <button type="submit">Post</button>
            </form>
          </div>
        </section>
`;

export async function editPage(ctx) {
    const factId = ctx.params.id;

    const data = await get(endpoints.byId(factId));

    ctx.render(editTemplate(data, createSubmitHandler(onSubmit)));

    async function onSubmit(newData, form) {

        if (Object.values(newData).some(v => v == '')) {
            return alert('All fields are required!');
        }

        const category = newData.category;
        const imageUrl = newData['image-url'];
        const description = newData.description;
        const moreInfo = newData['additional-info'];

        await putById(endpoints.byId(factId), {category, imageUrl, description, moreInfo});
        form.reset();
        ctx.page.redirect(`/catalog/${factId}`);
    }
}