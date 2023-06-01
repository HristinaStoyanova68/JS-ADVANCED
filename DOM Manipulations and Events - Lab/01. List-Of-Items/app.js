function addItem() {
    
    let input = document.getElementById('newItemText');
    let value = input.value;

    let ul = document.getElementById('items');
    let newLi = document.createElement('li');

    newLi.textContent = value;
    ul.appendChild(newLi);
}