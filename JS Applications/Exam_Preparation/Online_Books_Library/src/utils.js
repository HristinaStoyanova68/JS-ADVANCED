export const endpoints = {
    getAllBooks: '/data/books?sortBy=_createdOn%20desc',
    addBook: '/data/books',
    byId: '/data/books/',
    userBooks: userId => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    userLike: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    likesAmount: bookId => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    addLike: '/data/likes',
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