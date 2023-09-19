import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../data/user.js";
import { createSubmitHandler } from "../utils.js";

const registertemplate = (onSubmit) => html`
<section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${onSubmit}>
              <input type="text" name="email" id="register-email" placeholder="email"/>
              <input type="password" name="password" id="register-password" placeholder="password"/>
              <input type="password" name="re-password" id="repeat-password" placeholder="repeat password"/>
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>
`;

export function registerPage(ctx) {
  ctx.render(registertemplate(createSubmitHandler(onSubmit)));

  async function onSubmit(data, form, event) {

    const email = data.email;
    const password = data.password;
    const rePass = data['re-password'];

    if (email == '' || password == '' || rePass == '') {
      form.reset();
      return alert('All fields are required!');
    }

    if (password != rePass) {
      form.reset();
      return alert('Passwords don\'t match!');
    }

    await register(email, password);

    ctx.page.redirect('/');

  }
}