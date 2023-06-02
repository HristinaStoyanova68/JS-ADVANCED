function addItem() {
    //read input value
    const text = document.getElementById('newItemText').value;

    //create new li
    const newLi = document.createElement('li');
    newLi.textContent = text;

    //obtain reference to list element
    const list = document.getElementById('items');
    
    //add new li to list
    list.appendChild(newLi);
    
    // let input = document.getElementById('newItemText');
    // let value = input.value;

    // let ul = document.getElementById('items');
    // let newLi = document.createElement('li');

    // newLi.textContent = value;
    // ul.appendChild(newLi);
}