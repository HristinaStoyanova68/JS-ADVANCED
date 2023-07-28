import { html } from "../../node_modules/lit-html/lit-html.js";
import { editMeme, getMemeDetails } from "../data/meme.js";
import { notify } from "../data/notify.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (data, onSubmit) => html`
<section id="edit-meme">
            <form id="edit-form" @submit=${onSubmit}>
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${data.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" .value=${data.description}>
                            ${data.description} 
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${data.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`;
export async function editPage(ctx) {

    const memeId = ctx.params.id;

    const data = await getMemeDetails(memeId);
    //console.log(data);

    ctx.render(editTemplate(data, createSubmitHandler(onSubmit)));

    async function onSubmit(newData, form, event) {

        if (Object.values(newData).some(v => v == '')) {
            return notify('All fields are required!');
        }

        await editMeme(memeId, newData);
        form.reset();
        ctx.page.redirect(`/catalog/${memeId}`);
    }
}