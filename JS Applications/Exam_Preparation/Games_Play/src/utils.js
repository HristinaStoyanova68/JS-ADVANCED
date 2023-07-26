export const endpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    allGames: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    byId: id => `/data/games/${id}`,
    allComments: gameId => `/data/comments?where=gameId%3D%22${gameId}%22`,
    createComment: '/data/comments',
};

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const form = event.currentTarget;

        const formData = new FormData(form);
        
        const data = Object.fromEntries(formData.entries());

        callback(data, form, event);
    }
}