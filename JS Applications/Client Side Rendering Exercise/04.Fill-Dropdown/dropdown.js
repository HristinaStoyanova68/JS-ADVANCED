import {html, render} from './node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

const dropDownElement = document.getElementById('menu');
const formElement = document.querySelector('form');
const inputElement = document.getElementById('itemText');

getItems()
async function getItems() {
    const res = await fetch(url);
    const items = await res.json();

    return items;
}

const optionTemplate = (data) => html`
${data.map(item => {
return html`<option value=${item._id}>${item.text}</option>`
})}`;

render(optionTemplate(Object.values(await getItems())), dropDownElement);

formElement.addEventListener('submit', addItem);

async function addItem(event) {
    event.preventDefault();
    
    const text = inputElement.value;
    const bodyData = {
        text,
    }

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
    }

    const response = await fetch(url, options);

    if (response.ok) {
        render(optionTemplate(Object.values(await getItems())), dropDownElement);
    }

    formElement.reset();
}


  



// fetch(url) 
// .then(res => res.json())
// .then(data => {
//     // const items = Object.entries(data);
//     return items;
// })


//
// 

// // const itemTemplate = html`
// // <select id="menu">
// // ${optionTemplate}
// // </select>
// // `;

// const itemTemplate = html`

// ${optionTemplate}

// `;

// const listItemsElement = document.getElementById('menu');




// listItemsElement.addEventListener('click', onClick);

// function onClick(event) {
//     // event.preventDefault();

    
// }