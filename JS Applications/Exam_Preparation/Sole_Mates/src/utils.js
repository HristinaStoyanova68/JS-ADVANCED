export const endpoints = {
    getAllAds: '/data/shoes?sortBy=_createdOn%20desc',
    byId: id => `/data/shoes/${id}`,
    create: '/data/shoes',
    shoesByBrand: brand => `/data/shoes?where=brand%20LIKE%20%22${brand}%22`,
}

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const form = event.currentTarget;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        callback(data, form, event);
    }
}
 