import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllMemes } from "../data/meme.js";

const catalogTemplate = (data) => html`
<section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${data.length != 0 ? html`
                ${data.map(m => html`
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${m.title}</p>
                            <img class="meme-image" alt="meme-img" src=${m.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/catalog/${m._id}">Details</a>
                        </div>
                    </div>
                </div>`)}
                ` : html`<p class="no-memes">No memes in database.</p>`}
			</div>
        </section>
`;

export async function catalogPage(ctx) {

    const data = await getAllMemes();

    ctx.render(catalogTemplate(data));
}