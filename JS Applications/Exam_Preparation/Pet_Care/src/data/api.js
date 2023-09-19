async function request(method, url, data) {

    const options = {
        method,
        headers: {},
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (localStorage.length !== 0) {

        // const token = 
        options.headers['X-Athorization'] = token;
    }
}