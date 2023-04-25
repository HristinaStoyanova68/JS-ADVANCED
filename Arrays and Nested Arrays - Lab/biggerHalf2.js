function biggerHalf(array) {

    let result = array.sort((a, b) => a - b);
    let index = Math.floor(result.length / 2);
    
    return result.splice(index);
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log('...........');
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));