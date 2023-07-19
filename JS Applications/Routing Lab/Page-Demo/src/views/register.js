import {html} from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

const registerTemplate = (onSubmit) => html`
<h1>Register Page</h1>
<form @submit=${onSubmit}>
    <label>Email: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <label>Repeat: <input type="password" name="repass"></label>
    <button>Sign up</button>
</form>
<p>Already have an acount? <a href="/login">Sign in</a></p>
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister({email, password, repass}) {
        if (email == '' || password == '') {
            return alert('All fields are required!');
        }
        if (password !== repass) {
            return alert('Passwords do not match!');
        }
        await register(email, password);
        ctx.updateNav();
        ctx.page.redirect('/home');
    }
}