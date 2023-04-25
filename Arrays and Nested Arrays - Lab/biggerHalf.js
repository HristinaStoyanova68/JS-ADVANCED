function biggerHalf(array) {

    let result = array.sort((a, b) => a - b);
    let index = Math.ceil(result.length / 2);

    if (result.length % 2 !== 0) {
        index -= 1;
    }
    
    return result.splice(index);
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log('...........');
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));