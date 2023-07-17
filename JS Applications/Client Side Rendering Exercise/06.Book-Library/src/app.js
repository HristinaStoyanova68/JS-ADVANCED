import { showCatalog } from "./catalog.js";
import { showCreate } from "./create.js";
import { showUpdate } from "./update.js";
import { html, render } from "./utility-api.js";

const bodyElement = document.getElementsByTagName('body')[0];
//const loadBtn = document.createElement('button');
// loadBtn.id = 'loadBooks';
// loadBtn.textContent = 'LOAD ALL BOOKS';
// bodyElement.appendChild(loadBtn);

const loadBtnTemplate = () => html`
    <button id="loadBooks" @click=${event => onClick(event)}>LOAD ALL BOOKS</button>
`;

// const tableElement = document.createElement('table');
// const headElement = document.createElement('thead');
// const trElement = document.createElement('tr');
// const titleElement = document.createElement('th');
// titleElement.textContent = 'Title';
// const authorElement = document.createElement('th');
// authorElement.textContent = 'Author';
// const actionElement = document.createElement('th');
// actionElement.textContent = 'Action';

// trElement.appendChild(titleElement);
// trElement.appendChild(authorElement);
// trElement.appendChild(actionElement);

// headElement.appendChild(trElement);
// tableElement.appendChild(headElement);
// bodyElement.appendChild(tableElement);


const headTemplate = () => html`
<table>
    <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
</table>
`;

//render(headTemplate, tableElement);

//loadBtn.addEventListener('click', onClick);


//main module:
//init modules with dependecies
//-rendering
//-communication between modules
function onClick(event) {
    event.preventDefault();

    update();
}


const ctx = {
    update,
    //render: (template) => render(template, root),
};


render([loadBtnTemplate(), headTemplate(), showCreate(ctx)], bodyElement)
//update();

function update() {
    render([
        loadBtnTemplate(), 
        headTemplate(),
        showCatalog(ctx),
        showCreate(ctx),
        showUpdate(ctx)
    ], bodyElement)
}

// ctx.render([
//     showCatalog(ctx),
//     showCreate(ctx),
//     showUpdate(ctx)
// ]);


//const root = document.body;









// 

// const tableTemplate = html`
// <table>
//         <thead>
//             <tr>
//                 <th>Title</th>
//                 <th>Author</th>
//                 <th>Action</th>
//             </tr>
//         </thead>
//         <tbody>
            
//             <tr>
//                 <td>Game of Thrones</td>
//                 <td>George R. R. Martin</td>
//                 <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// `

// async function onClick(event) {
//     event.preventDefault();
// }
