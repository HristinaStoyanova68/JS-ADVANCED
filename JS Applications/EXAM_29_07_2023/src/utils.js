
export const endpoints = {
    getAllFacts: '/data/facts?sortBy=_createdOn%20desc',
    byId: id => `/data/facts/${id}`,
    create: '/data/facts',
    likes: factId => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
    like: '/data/likes',
    userLikesCount: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
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
 