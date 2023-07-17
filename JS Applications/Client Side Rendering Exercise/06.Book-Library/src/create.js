import { createBook, html } from "./utility-api.js";

//create module:
//control create form

const createTemplate = (onSuccess) => html`
<form @submit=${event => onSubmit(event, onSuccess)} id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
`;

export function showCreate(ctx) {
    //console.log(ctx);
    if (ctx.book == undefined) {
        //console.log(ctx.book);
        //console.log(ctx.update);
        return createTemplate(ctx.update);
    } else {
        return null;
    }
}

async function onSubmit(event, onSuccess) {
    event.preventDefault();

    const formData = new FormData(event.target);
    //console.log(event.target);
    // console.log(formData);

    const title = formData.get('title').trim();
    const author = formData.get('author').trim();

    if (title == '' || author == '') {
        // return null;
        throw new Error('All fields are required');
        
    } else {
        // const result = await createBook({title, author});
        await createBook({ title, author });

        // console.log(title);
        // console.log(author);


        event.target.reset();
        onSuccess();
    }


}