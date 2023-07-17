import { deleteBook, getBooks, html, until } from "./utility-api.js";

//list module:
//display list of books
//control books (edit, delete)

const catalogTemplate = (booksPromise) => html`
 <table>
        <!-- <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead> -->
        <tbody>
            ${until(booksPromise, html`<tr><td colSpan="3">Loading&hellip;</td></tr>`)}
            <!-- <tr>
                <td>Harry Potter</td>
                <td>J. K. Rowling</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
            <tr>
                <td>Game of Thrones</td>
                <td>George R. R. Martin</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr> -->
        </tbody>
    </table>
`;

const bookRow = (book, onEdit, onDelete) => html`<tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button @click=${onEdit}>Edit</button>
                    <button @click=${onDelete}>Delete</button>
                </td>
            </tr>`;

export function showCatalog(ctx) {
    return catalogTemplate(loadBooks(ctx));
}

async function loadBooks(ctx) {

    const data = await getBooks();
    //console.log(data);
    //const books = await getBooks();

    // return Object.values(books).map(book => bookRow(book, toggleEditor.bind(null, book, ctx)))
    const books = Object.entries(data).map(([key, value]) => Object.assign(value, {_id: key}));
    //console.log(books);

    return Object.values(books).map(book => bookRow(book, toggleEditor.bind(null, book, ctx), onDelete.bind(null, book._id, ctx)));
}

function toggleEditor(book, ctx) {
    ctx.book = book;
    ctx.update();
}

async function onDelete(id, ctx) {
    await deleteBook(id);
    ctx.update();
}