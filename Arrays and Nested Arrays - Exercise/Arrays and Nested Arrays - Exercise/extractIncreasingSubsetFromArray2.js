function extractIncreasingSubsetFromArray(numbers) {

    let biggestNumber = numbers[0];

    return numbers.reduce((acc, currElem) => {

        if (biggestNumber <= currElem) {

            acc.push(currElem);
            biggestNumber = currElem;
        }

        return acc;
    }, [])
}

console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log('...............');
console.log(extractIncreasingSubsetFromArray([1, 2, 3, 4]));
console.log('...............');
console.log(extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]));