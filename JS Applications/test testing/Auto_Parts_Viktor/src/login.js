import { login } from "./data/auth.js";
//import { showHome } from './home.js';
import { addSubmitListener } from "./util.js";
//import { showView } from "./app.js";

const loginSection = document.getElementById('login');
const loginForm = loginSection.querySelector('#login-form');
addSubmitListener(loginForm, onLogin);
// loginForm.addEventListener('submit', onLogin);
let ctx = null;

export function showLogin(newCtx) {
    document.querySelector('main').replaceChildren(loginSection);
    ctx = newCtx;
}

async function onLogin({ email, password }) {
    // event.preventDefault();
    // const formData = new FormData(loginForm);
    // const { email, password } = Object.fromEntries(formData.entries());
    // const userData = await sendLoginData(email, password);
    await login(email, password);
    loginForm.reset();
    ctx.showView('home-link');
}

// async function sendLoginData(email, password) {
//     try {
//         const response = await fetch('http://localhost:3030/users/login', {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email, password })
//         });

//         if (response.ok == false) {
//             const error = await response.json();
//             throw error;
//         }

//         const userData = await response.json();

//         return userData;
//     } catch (err) {
//         alert(err.message);
//     }
// }