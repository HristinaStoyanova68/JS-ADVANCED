function orbit(array) {

    let [row, col, initialRowIndex, initialColIndex] = array;
    let orbit = [];

    for (let i = 0; i < row; i++) {
        orbit.push([]);
    }

    for (let i = 0; i < row; i++) {

        for (let j = 0; j < col; j++) {

            orbit[i][j] = Math.max(Math.abs(i - initialRowIndex),
                Math.abs(j - initialColIndex)) + 1;
        }
    }

    orbit.forEach(x => console.log(x.join(' ')));
    //console.log(orbitMatrix.map(rows => rows.join(" ")).join("\n"));
}

orbit([4, 4, 0, 0]);
console.log('...........');
orbit([5, 5, 2, 2]);
console.log('...........');
orbit([3, 3, 2, 2])