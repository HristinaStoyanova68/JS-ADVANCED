function sumFirstLast(arr) {

    let first = Number(arr[0]);
    let second = Number(arr[arr.length - 1]);
    let result = first + second;
    return result;

}

console.log(sumFirstLast(['20', '30', '40']));
console.log('...........');
console.log(sumFirstLast(['5', '10']));