import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../data/userAuth.js";
import { createSubmitHandler } from "../utils.js";


const registerTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
            <form id="register" @submit=${onSubmit}>
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">
                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">
                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">
                    <input class="btn submit" type="submit" value="Register">
                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit(data, form, event) {

        if (data.email == '' || data.password == '') {
            form.reset();
            return alert('All fields are required!');
        }

        if (data.password != data['confirm-password']) {
            form.reset();
            return alert('Passwords don\'t match!');
        }

        await register(data.email, data.password);

        ctx.page.redirect('/');
    }
}