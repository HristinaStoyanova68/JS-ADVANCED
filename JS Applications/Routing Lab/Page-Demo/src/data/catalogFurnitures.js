import { get } from "./api.js";


const endpoints = {
    catalog: '/data/catalog',
}
export async function getFurnitures() {
    return get(endpoints.catalog);
}