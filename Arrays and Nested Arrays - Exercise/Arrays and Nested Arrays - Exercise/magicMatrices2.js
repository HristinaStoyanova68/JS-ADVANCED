function magicMatrices(matrix) {

    let isMagic = true;

    for (let i = 0; i < matrix.length - 1; i++) {

        let rowSum = matrix[i].reduce((a, b) => a + b, 0);
        let nextRowSum = matrix[i + 1].reduce((a, b) => a + b, 0);

        let colSum = 0;
        let nextColSum = 0;

        for (let j = 0; j < matrix.length; j++) {

            colSum += matrix[j][i];
            nextColSum += matrix[j][i + 1];
        }

        if (rowSum !== nextRowSum || colSum !== nextColSum) {
            isMagic = false;
            break;
        }
    }

    return isMagic;
}

console.log(magicMatrices([
    [4, 5, 6], 
    [6, 5, 4], 
    [5, 5, 5]]));
console.log('......');
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log('......');
console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));