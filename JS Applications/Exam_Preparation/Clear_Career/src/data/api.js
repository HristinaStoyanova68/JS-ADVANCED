import { clearUserData, getUserData } from "../util.js";

const host = 'http://localhost:3030';

async function requset(method, url, data) {
    const options = {
        method,
        headers: {},
    };

    //TODO load user data

    const userData = getUserData();

    if (userData) {
        const token = userData.accessToken;
        options.headers['X-Authorization'] = token;
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        let result;
        if (response.status != 204) {
            result = await response.json();
        }

        if (response.ok == false) {
            if (response.status == 403) {
                clearUserData();
            }
            const error = result;
            throw error;
        }

        return result;
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export const get = requset.bind(null, 'get');
export const post = requset.bind(null, 'post');
export const put = requset.bind(null, 'put');
export const del = requset.bind(null, 'delete');