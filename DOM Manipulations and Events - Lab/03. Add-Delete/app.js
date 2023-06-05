function addItem() {
    //read input value
    const text = document.getElementById('newItemText').value;

    //create new li
    const newLi = document.createElement('li');
    newLi.textContent = text;

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';

    deleteBtn.addEventListener('click', () => newLi.remove());

    newLi.appendChild(deleteBtn);

    //obtain reference to list element
    const list = document.getElementById('items');
    
    //add new li to list
    list.appendChild(newLi);
}