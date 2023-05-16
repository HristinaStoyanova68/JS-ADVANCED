function magicMatrices(matrix) {

    const totalSum = matrix[0].reduce((acc, currElem) => acc + currElem, 0);

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = 0;
        let sumCol = 0;

        for (let col = 0; col < matrix.length; col++) {
            sumRow += matrix[col][row];
            sumCol += matrix[row][col];
        }

        if (totalSum !== sumRow || totalSum !== sumCol) {

            return false;
        }

    }

    return true;
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
console.log('......');
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
console.log('......');
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);