import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from './catSeeder.js';

let cardTemplate = (cat) => html`
<li>
 <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
 <div class="info">
     <button class="showBtn" @click=${onClick}>Show status code</button>
     <div class="status" style="display: none" id="${cat.id}">
         <h4>Status Code: ${cat.statusCode}</h4>
         <p>${cat.statusMessage}</p>
     </div>
 </div>
</li>
`;

function onClick(event) {
    let currCat = event.target.parentElement;
    let currResult = currCat.querySelector('.status').style.display;
    if (currResult == 'none') {
        currCat.querySelector('.status').style.display = 'block';
        event.target.textContent = 'Hide status code';
    } else {
        currCat.querySelector('.status').style.display = 'none';
        event.target.textContent = 'Show status code';
    }
}

let result = cats.map(cardTemplate);
let main = document.getElementById('allCats');
render(result, main);

