export function onSearch() {
    const tableRows = document.querySelector('.container tbody').children;
    let inputValue = document.querySelector('#searchField').value;
    let searchTerm = inputValue;
    inputValue = '';

    for (const row of tableRows) {
        row.classList.remove('select');

        if (row.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
        row.classList.add('select');
        }
    }
}