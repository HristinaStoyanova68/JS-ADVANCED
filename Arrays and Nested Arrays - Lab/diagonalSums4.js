function diagonalSums(matrix) {

    let innerArray = matrix[0];
    let secondDiagonalIndex = innerArray.length - 1;
    let sumMainDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let index = 0; index < matrix.length; index++) {
        let mainDiagonalElement = matrix[index][index];
        let secondDiagonalElement = matrix[index][secondDiagonalIndex - index];

        sumMainDiagonal += mainDiagonalElement;
        sumSecondDiagonal += secondDiagonalElement;
    }

    console.log(sumMainDiagonal, sumSecondDiagonal);
}

diagonalSums([[20, 40], [10, 60]]);
console.log('.................');
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);