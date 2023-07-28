import { html } from "../../node_modules/lit-html/lit-html.js";
import { notify } from "../data/notify.js";
import { login } from "../data/user.js";
import { createSubmitHandler } from "../utils.js";

// window.notify = notify;

const loginTemplate = (onSubmit) => html`<section id="login">
<form id="login-form" @submit=${onSubmit}>
    <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password">
        <input type="submit" class="registerbtn button" value="Login">
        <div class="container signin">
            <p>Dont have an account?<a href="/register">Sign up</a>.</p>
        </div>
    </div>
</form>
</section>`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit({email, password}, form, event) {
        if (email == '' || password == '') {
            form.reset();

            // const errorMessage = 'All fields are required!';

            return notify('All fields are required!');
            // return await notificationAction(errorMessage);
        }
        await login(email, password);
        form.reset();
        ctx.page.redirect('/catalog');
        ctx.updateNav();
    }
}