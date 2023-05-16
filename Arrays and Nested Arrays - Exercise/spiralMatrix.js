function spiralMatrix(rows, columns) {

    let matrix = [];
    let num = 1;
    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = columns - 1;

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    while (startCol <= endCol && startRow <= endRow) {

        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = num;
            num++;
        }

        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = num;
            num++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = num;
            num++;
        }

        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startCol] = num;
            num++;
        }

        startCol++;
    }

    console.log(matrix.map(x => x.join(' ')).join('\n'));
}

spiralMatrix(5, 5);
console.log('...............');
spiralMatrix(3, 3);

