function biggestElement(array) {

    let newArray = [];
    for (const arr of array) {
        let biggest = arr.sort((a, b) => b - a)[0];
        newArray.push(biggest);
    }

    let big = newArray.sort((a, b) => b - a)[0];

    return big;
}


console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
console.log('..........');
console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));