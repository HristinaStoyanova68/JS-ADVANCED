function sumTable() {

    let selectedElements = document.querySelectorAll('tr td:nth-of-type(2)');

    let sum = Array.from(selectedElements).reduce((a, x) => {
        let currValue = Number(x.textContent) || 0;
        return a + currValue;
    }, 0);

    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
}