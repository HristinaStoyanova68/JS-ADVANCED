import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from './towns.js'

const cardTemplate = html`
   <ul>
       ${towns.map((town) => {
   return html`<li id="${town}">${town}</li>
       `})}  
      </ul>
      `;

const card = document.getElementById('towns');
render(cardTemplate, card);

document.querySelector('button').addEventListener('click', search);

function search() {
   const text = document.getElementById('searchText').value;
   const result = towns.filter(town => {
      if (town.includes(text)) {
         const match = document.getElementById(`${town}`);
         match.setAttribute('class', 'active');
         // document.getElementById(town).classList = 'active';
         return town;
      } else {
         document.getElementById(town).classList.remove('active');
      }
   });

   const resultHtml = document.getElementById('result');
   resultHtml.textContent = `${result.length} matches found`;
}




