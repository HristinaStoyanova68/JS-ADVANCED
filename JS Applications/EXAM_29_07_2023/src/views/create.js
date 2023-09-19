import { html } from "../../node_modules/lit-html/lit-html.js";
import { post } from "../data/api.js";
import { createSubmitHandler, endpoints } from "../utils.js";

const createTemplate = (onSubmit) => html`
<section id="create">
          <div class="form">
            <h2>Add Fact</h2>
            <form class="create-form" @submit=${onSubmit}>
              <input type="text" name="category" id="category" placeholder="Category"/>
              <input type="text" name="image-url" id="image-url" placeholder="Image URL"/>
              <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"
            ></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10" cols="50"
            ></textarea>
              <button type="submit">Add Fact</button>
            </form>
          </div>
        </section>
`;

export async function createPage(ctx) {

    ctx.render(createTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit(data, form, event) {
        if (Object.values(data).some(v => v == '')) {
          form.reset();

            return alert('All fields are required!');
        }

        const category = data.category;
        const imageUrl = data['image-url'];
        const description = data.description;
        const moreInfo = data['additional-info'];


        await post(endpoints.create, {category, imageUrl, description, moreInfo});
        form.reset();
        ctx.page.redirect('/catalog');
    }
}