function smallestTwoNumbers(array) {

    let result = array.sort((a, b) => a - b);
    console.log(result[0], result[1]);
}

smallestTwoNumbers([30, 15, 50, 5]);
console.log('..............');
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
