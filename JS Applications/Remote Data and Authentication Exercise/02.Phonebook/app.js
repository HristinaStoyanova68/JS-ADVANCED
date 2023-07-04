const loadBtn = document.querySelector('#btnLoad');
const createBtn = document.querySelector('#btnCreate');
const url = 'http://localhost:3030/jsonstore/phonebook';
const ulLoadElement = document.querySelector('#phonebook');
attachEvents();


function attachEvents() {
    // capture loadBtn
    loadBtn.addEventListener('click', onLoad);
    createBtn.addEventListener('click', onCreate);
}

// create func onLoad
function onLoad() {
    
    Array.from(ulLoadElement.children).forEach(li => li.remove());

    fetch(url)
    .then(res => res.json())
    .then(data => {

        Object.keys(data).forEach(key => {
            const liElement = document.createElement('li');
            liElement.textContent = `${data[key].person}: ${data[key].phone}`;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.dataset.id = key;
            deleteBtn.addEventListener('click', onDelete);
            liElement.appendChild(deleteBtn);
            ulLoadElement.appendChild(liElement);
        })
    })
}

// create func onDelete
function onDelete(e) {
const currDeleteBtn = e.target;
const currLi = currDeleteBtn.parentElement;
currLi.remove();

const currKey = currDeleteBtn.dataset.id;

fetch(`http://localhost:3030/jsonstore/phonebook/${currKey}`, {
    method: 'DELETE'
})
}
// create func onCreate
const personInputElement = document.querySelector('#person');
const phoneInputElement = document.querySelector('#phone');

function onCreate() {

    if (!personInputElement.value || !phoneInputElement.value) {
        return;
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            person: personInputElement.value.trim(),
            phone: phoneInputElement.value.trim()
        })
    })

    personInputElement.value = '';
    phoneInputElement.value = '';  
    onLoad();
}

