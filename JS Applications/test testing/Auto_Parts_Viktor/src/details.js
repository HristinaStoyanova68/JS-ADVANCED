import { getById } from './data/data.js';

const detailsSection = document.getElementById('details');
const content = {
    id: detailsSection.querySelector('#part-id'),
    label: detailsSection.querySelector('#part-label'),
    price: detailsSection.querySelector('#part-price'),
    qty: detailsSection.querySelector('#part-qty'),
};

export async function showDetails(id) {
    document.querySelector('main').replaceChildren(detailsSection);

    content.id.textContent = 'Loading...';
    content.label.textContent = 'Loading...';
    content.price.textContent = 'Loading...';
    content.qty.textContent = 'Loading...';

    //const data = await getDetails(id);
    const data = await getById(id);
    content.id.textContent = data._id;
    content.label.textContent = data.label;
    content.price.textContent = data.price;
    content.qty.textContent = data.qty;

}

// async function getDetails(id) {
//     try {
//         const token = localStorage.getItem('accessToken');
//         const options = {
//             method: 'get',
//             headers: {}
//         };

//         if (token != null) {
//             options.headers['X-Authorization'] = token;
//         }

//         const response = await fetch(`http://localhost:3030/data/autoparts/${id}`, options);

//         if (response.ok == false) {
//             const error = await response.json();
//             throw error;
//         }

//         const data = await response.json();

//         return data;
//     } catch (err) {
//         alert(err.message);
//     }
// }