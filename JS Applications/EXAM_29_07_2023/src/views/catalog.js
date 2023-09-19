import { html } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../data/api.js";
import { endpoints } from "../utils.js";

const catalogTemplate = (data) => html`
<h2>Fun Facts</h2>
        <section id="dashboard">
          ${data.length > 0 ? html`
          ${data.map(funFact => html`
          <div class="fact">
            <img src=${funFact.imageUrl} alt="example1" />
            <h3 class="category">${funFact.category}</h3>
            <p class="description">${funFact.description}</p>
            <a class="details-btn" href="/catalog/${funFact._id}">More Info</a>        
          </div>`)}` : html`<h2>No Fun Facts yet.</h2>
          `}
        </section>
`;

export async function catalogPage(ctx) {
    const data = await get(endpoints.getAllFacts);
    ctx.render(catalogTemplate(data));
}

