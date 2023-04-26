function diagonalSums(array) {

    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < array.length; i++) {
        let currArr = array[i];
        sum1 += Number(currArr[i]);
        sum2 += Number(currArr[(currArr.length - 1) - i]);
    }

    console.log(sum1, sum2);
}

diagonalSums([[20, 40], [10, 60]]);
console.log('.................');
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);