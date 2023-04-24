function negativePositiveNumbers(array) {

    let newArray = [];

    for (const elem of array) {
        if (elem < 0) {
            newArray.unshift(elem);
        } else {
            newArray.push(elem);
        }
    }

    console.log(newArray.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
console.log('...........');
negativePositiveNumbers([3, -2, 0, -1]);