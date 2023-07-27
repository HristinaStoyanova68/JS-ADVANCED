import { del, get, post, put } from "./api.js"

const endpoits = {
    create: '/data/memes',
    allMemes: '/data/memes?sortBy=_createdOn%20desc',
    byId: memeId => `/data/memes/${memeId}`,
    userMemes: userId => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
}

export async function createMeme(data) {
    await post(endpoits.create, data);
}

export async function getAllMemes() {
    return await get(endpoits.allMemes);
}

export async function getMemeDetails(id) {
    return await get(endpoits.byId(id));
}

export async function editMeme(id, data) {
    return await put(endpoits.byId(id), data);
}

export async function deleteMeme(id) {
    return  await del(endpoits.byId(id));
}

export async function getUserProfileMemes(id) {
    return await get(endpoits.userMemes(id));
}

