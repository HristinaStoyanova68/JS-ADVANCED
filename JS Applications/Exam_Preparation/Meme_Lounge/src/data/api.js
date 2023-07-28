import { deleteUserData, getUserData } from "./sessions.js";

const host = 'http://localhost:3030';

async function request (url, method = 'get', data) {
    const options = {
        method, 
        headers: {},
    }

    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {

        const response = await fetch(host + url, options);

        if (response.status == 204) {
            return response;
        }

        if (!response.ok) {
            if(response.status == 403) {
                deleteUserData();
            }

            const err = await response.json();
            throw new Error(err.message);
        }

        return response.json();
        
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export async function get(url) {
    return request(url);
}

export async function post(url, data) {
    return request(url, 'post', data);
}

export async function put(url, data) {
    return request(url, 'put', data);
}

export async function del(url) {
    return request(url, 'delete');
}