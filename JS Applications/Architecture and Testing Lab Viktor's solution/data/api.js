const host = 'http://localhost:3030';

async function request(method, url, data) {
    try {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const option = {
            method,
            headers: {},
        };

        if (userData != null) {
            option.headers['X-Authorizetion'] = userData.accessToken;
        }

        if (data != undefined) {
            option.headers['Content-Type'] = 'application/json';
            option.body = JSON.stringify(data);
        }

        const response = await fetch(host + url, option);

        let result;

        if (response.status != 204) {
            result = await response.json();
        }

        if (response.ok != true) {
            if (response.status == 403) {
                localStorage.removeItem('userData');
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

export const get = request.bimd(null, 'get');
export const post = request.bimd(null, 'post');
export const put = request.bimd(null, 'put');
export const del = request.bimd(null, 'delete');