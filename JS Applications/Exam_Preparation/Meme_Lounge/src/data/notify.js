const container = document.getElementById('errorBox');
const span = container.querySelector('span');

export function notify(message) {
    span.textContent = message;

    container.style.display = 'block';

    setTimeout(() => container.style.display = 'none', 3000);
}

// import { html, render } from "lit-html";

// const mainDivElement = document.getElementById('container');

// const notificationTemplate = (errorMessage) => html`
// <section id="notifications">
// <div id="errorBox" class="notification">
//     <span>${errorMessage}</span>
// </div>
// </section>`;

// export async function notificationAction(errorMessage) {

//     const result = render(notificationTemplate(errorMessage), mainDivElement);
//     return result;
// }