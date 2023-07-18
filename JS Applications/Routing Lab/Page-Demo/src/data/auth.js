import { setUserData } from "../util.js";
import { get, post } from "./api.js";

const endpoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',

}
export async function register(email, password) {
    const userData = await post(endpoints.register, {email, password});
    setUserData(userData);

    return userData;
}

export async function login(email, password) {
    const userData = post(endpoints.login, {email, password});
    setUserData(userData);

    return userData;
}

export async function logout() {
    const userData = await get(endpoints.logout);
    clearUserData(userData);
}