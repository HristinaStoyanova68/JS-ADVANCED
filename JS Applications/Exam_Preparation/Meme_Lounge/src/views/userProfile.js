import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserProfileMemes } from "../data/meme.js";
import { getUserData } from "../data/sessions.js";

const userProfileTemplate = (data, memesCount, userMemes) => html`

<section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/${data.gender}.png">
                <div class="user-content">
                    <p>Username: ${data.username}</p>
                    <p>Email: ${data.email}</p>
                    <p>My memes count: ${memesCount}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                <!-- Display : All created memes by this user (If any) --> 
                ${userMemes.length != 0 ? html`
                ${userMemes.map(m => html`
                <div class="user-meme">
                    <p class="user-meme-title">${m.title}</p>
                    <img class="userProfileImage" alt="meme-img" src=${m.imageUrl}>
                    <a class="button" href="/catalog/${m._id}">Details</a>
                </div>`)}` : html`<p class="no-memes">No memes in database.</p>`}
                
                

                <!-- Display : If user doesn't have own memes  --> 
                
            </div>
        </section>`;

        export async function userProfilePage(ctx) {

            

            const userData = await getUserData();
            const userId = userData._id;
            //console.log(userData);

            const userMemes = await getUserProfileMemes(userId);
           // console.log(userMemes);

            // let memeId;
            // let memeData;
            // async function onClick(ctx) {
            //     memeId = ctx.params.id;
            //     console.log(memeId);
            //     memeData = await getMemeDetails(memeId);
            //     console.log(memeData);
            //     return memeData;
            // }

            const memesCount = (await getUserProfileMemes(userId)).length;
            //console.log(memesCount);
            ctx.render(userProfileTemplate(userData, memesCount, userMemes));
        }