import { updateBook, html } from "./utility-api.js";

//update module:
//control edit form

const updateTemplate = (book, ctx) => html`
<form  @submit=${event => onSubmit(event, ctx)} id="edit-form">
        <input type="hidden" name="id" .value=${book._id}>
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." .value=${book.title}>
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." .value=${book.author}>
        <input type="submit" value="Save">
    </form>
`;

export function showUpdate(ctx) {

    if (ctx.book == undefined) {
        return null;
    } else {
        return updateTemplate(ctx.book, ctx);
    }
}

async function onSubmit(event, ctx) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const id = formData.get('id');
    //console.log(id);
    const title = formData.get('title').trim();
    const author = formData.get('author').trim();

    if (title == '' || author == '') {
        // return null;
        throw new Error('All fields are required');
        
    }

    // const result = await createBook({title, author});
    await updateBook(id, { title, author });

    event.target.reset();
    delete ctx.book;
    ctx.update();
}//updateBook