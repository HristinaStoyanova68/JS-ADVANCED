const itemName = 'userData';

export function getUserData() {
    return JSON.parse(localStorage.getItem(itemName));
}

export function setUserData(data) {
    return localStorage.setItem(itemName, JSON.stringify(data));
}

export function deleteUserData() {
    localStorage.removeItem(itemName);
}