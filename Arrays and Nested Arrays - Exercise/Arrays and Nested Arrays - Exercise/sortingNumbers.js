function sortingNumbers(numbers) {

    let result = [];

    numbers.sort((a, b) => a - b);

    while (numbers.length !== 0) {

        result.push(numbers.shift());
        result.push(numbers.pop());
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]