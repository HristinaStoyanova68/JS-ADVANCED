function sortingNumbers(numbers) {

    const sortedNumbers = numbers.sort((numA, numB) => numA - numB);
    const result = [];

    while (sortedNumbers.length !== 0) {

        const firstElement = sortedNumbers.shift();
        const lastElement = sortedNumbers.pop();

        result.push(firstElement, lastElement);
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]