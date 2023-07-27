import page from "../../node_modules/page/page.mjs";

import { get, post } from "./api.js"
import { deleteUserData, setUserData } from "./sessions.js";

const endpoints = {
    login:'/users/login',
    register:'/users/register',
    logout:'/users/logout',
}

export async function login(email, password) {
    const userData = await post(endpoints.login, {email, password});
    setUserData(userData);
    
    page.redirect('/catalog');
}
export async function register(email, password) {
    const userData = await post(endpoints.register, {email, password});
    setUserData(userData);
    
    page.redirect('/catalog');
}
export async function logout() {
    get(endpoints.logout);
    deleteUserData();

    page.redirect('/catalog');
}