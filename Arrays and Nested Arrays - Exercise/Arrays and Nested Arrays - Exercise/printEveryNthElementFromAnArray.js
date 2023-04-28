function printEveryNthElementFromAnArray(array, step) {

    let newArr = [array[0]];

    for (let i = 1; i < array.length; i++) {

        if (i % step === 0) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

console.log(printEveryNthElementFromAnArray([
    '5',
    '20',
    '31',
    '4',
    '20'],
    2));
console.log('..............');
console.log(printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2));
console.log('..............');
console.log(printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6));