function extractIncreasingSubsetFromArray(array) {

    const output = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let index = 0; index < array.length; index++) {
        const currElement = array[index];

        if (currElement >= biggest) {
            output.push(currElement);
            biggest = currElement;
        }
    }

    return output;
}

console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log('...............');
console.log(extractIncreasingSubsetFromArray([1, 2, 3, 4]));
console.log('...............');
console.log(extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]));