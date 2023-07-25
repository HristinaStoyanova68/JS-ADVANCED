const itemName = 'userData';

export function setUserdata(data) {
    localStorage.setItem(itemName, JSON.stringify(data));
}

export function getUserData() {
    return JSON.parse(localStorage.getItem(itemName));
}

export function clearUserData () {
    localStorage.removeItem(itemName);
}