import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js';
import { contacts } from './contacts.js';

// contacts[1].showDetails = true;

const contactTemplate = (user) => html`
<div class="contact card">
    <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${user.name}</h2>
                <button class="detailsBtn" @click=${toggle.bind(user)}>Details</button>
                ${
                    user.showDetails ? html`<div class="details" id=${user.id}>
                    <p>Phone number: ${user.phoneNumber}</p>
                    <p>Email: ${user.email}</p>
                </div>` : null
                }
                <!-- <div class="details" id=${user.id}>
                    <p>Phone number: ${user.phoneNumber}</p>
                    <p>Email: ${user.email}</p>
                </div> -->
                
            </div>
        </div>`;

const root = document.getElementById('contacts');
//render(contacts.map(contactTemplate), root);


update();

function update() {
    // render(contacts.map(contactTemplate), root);
    render(repeat(contacts, c => c.id, contactTemplate), root);
}

function toggle() {
    this.showDetails = !this.showDetails;
    update();
}


// root.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (event.target.classList.contains('detailsBtn')) {
//         const info = event.target.parentElement.getElementsByClassName('details')[0];
//         // console.log(info);
//         if (info.style.display == 'block') {
//             info.style.display = 'none';
//         } else {
//             info.style.display = 'block';
//         }
//     }
// });
// @click=${() => { user.showDetails = !user.showDetails; update(); }}

// @click=${toggle.bind(user)}
