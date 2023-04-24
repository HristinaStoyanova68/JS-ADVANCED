function processOddPositions(array) {

    let result = array
        .filter((elem, i) => i % 2 == 1)
        .map(elem => elem * 2)
        .reverse()
        .join(' ');

    return result;
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log('...............');
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));