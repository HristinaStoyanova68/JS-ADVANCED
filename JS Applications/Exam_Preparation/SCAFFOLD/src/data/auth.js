
import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";

const edpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

//TODO Change user object according to project requirements

export async function login(email, password) {
    const result = await post(edpoints.login, {email, password});
    setUserData(result);
}

export async function register(email, password) {
    const result = await post(edpoints.register, {email, password});
    setUserData(result);
}

export async function logout() {
    get(edpoints.logout);
    clearUserData();
}