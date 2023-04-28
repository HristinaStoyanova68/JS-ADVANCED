function extractIncreasingSubsetFromArray(numbers) {

    let biggestNumber = numbers.shift();
    const result = [biggestNumber];

    for (const number of numbers) {

        if (number >= biggestNumber) {

            biggestNumber = number;
            result.push(number);
        }
    }

    return result;
}

console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log('...............');
console.log(extractIncreasingSubsetFromArray([1, 2, 3, 4]));
console.log('...............');
console.log(extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]));