function diagonalSums(matrix) {

    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < matrix.length; i++) {
        
        sum1 += matrix[i][i];
    }

    matrix.reverse();

    for (let i = 0; i < matrix.length; i++) {

        sum2 += matrix[i][i];
    }

    console.log(`${sum1} ${sum2}`);
}

diagonalSums([[20, 40], [10, 60]]);
console.log('.................');
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);