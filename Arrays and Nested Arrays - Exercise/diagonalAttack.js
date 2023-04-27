function diagonalAttack(input) {

    let matrix = input.map(x => x.split(' ').map(Number));

    let isEqual = diagonalSums(matrix);

    if (isEqual) {

        for (let i = 0; i < matrix.length; i++) {

            for (let j = 0; j < matrix.length; j++) {

                if (i !== j && i !== (matrix.length - 1 - j)) {
                    matrix[i][j] = isEqual;
                }
            }
        }        
    }

    for (const line of matrix) {

        console.log(line.join(' '));
    }

    function diagonalSums(matrix) {
        let sum1 = 0;
        let sum2 = 0;

        for (let i = 0; i < matrix.length; i++) {

            sum1 += matrix[i][i];
            sum2 += matrix[i][matrix.length - 1 - i];
        }

        if (sum1 === sum2) {
            return sum1;
        } else {
            return false;
        }
    }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
console.log('............');
diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0']);