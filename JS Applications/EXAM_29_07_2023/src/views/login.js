import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/user.js";
import { createSubmitHandler } from "../utils.js";

const logintemplate = (onSubmit) => html`
<section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${onSubmit}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input type="password" name="password" id="password" placeholder="password"/>
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;

export function loginPage(ctx) {
  ctx.render(logintemplate(createSubmitHandler(onSubmit)));

  async function onSubmit({email, password}, form, event) {
    

    // const email = data.email;
    // const password = data.password;

    if (email == '' || password == '') {
      //console.log('hi');
      form.reset();
      return alert('All fields are required!');
    }
      await login(email, password);
      form.reset();
      ctx.page.redirect('/');
  }
}