import { updateNav } from './app.js';
import { showView } from './dom.js';
import { showHome } from './home.js';
//initialization
//-find relevant section 
//-detach section from DOM
const section = document.getElementById('form-sign-up');
const form = section.querySelector('form');
form.addEventListener('submit', onRegister);
section.remove();

//display logic

export function showRegister() {
    showView(section);
}

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePassword = formData.get('repeatPassword').trim();

    try {

        if (email == '' || password == '' || rePassword == '') {
            throw new Error('All fields are required!');
        }

        if (password.length < 6) {
            throw new Error('Password must be atleast 6 characters !');
        }

        if (password != rePassword) {
            throw new Error("Passwords don't match !");
        }

        const res = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();

        sessionStorage.setItem(
            'userData',
            JSON.stringify({
                email: data.email,
                id: data._id,
                token: data.accessToken,
            })
        );

        form.reset();
        updateNav();
        showHome();
    } catch (err) {
        alert(err.message);
    }
}