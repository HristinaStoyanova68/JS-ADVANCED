function ticTacToe(input) {

    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let isFirstPlayer = true;
    let isWin = false;

    for (const coordinates of input) {
        let [row, col] = coordinates.split(' ').map(Number);

        if (dashboard[0].every(x => x !== false) &&
            dashboard[1].every(x => x !== false) &&
            dashboard[2].every(x => x !== false)
        ) {
            break;
        }

        if (dashboard[row][col]) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        let marker = isFirstPlayer ? 'X' : 'O';
        dashboard[row][col] = marker;

        for (let i = 0; i < dashboard.length; i++) {

            if (dashboard[i].every(x => x === marker)) {

                console.log(`Player ${marker} wins!`);
                isWin = true;
                break;

            } else if (dashboard[0][i] === marker &&
                dashboard[1][i] === marker &&
                dashboard[2][i] === marker) {

                console.log(`Player ${marker} wins!`);
                isWin = true;
                break;

            } else if (dashboard[0][0] === marker &&
                dashboard[1][1] === marker &&
                dashboard[2][2] === marker) {

                console.log(`Player ${marker} wins!`);
                isWin = true;
                break;

            } else if (dashboard[0][2] === marker &&
                dashboard[1][1] === marker &&
                dashboard[2][0] === marker) {

                console.log(`Player ${marker} wins!`);
                isWin = true;
                break;
            }
        }

        if (isWin) {
            break;
        }

        isFirstPlayer = !isFirstPlayer;

    }

    if (!isWin) {

        console.log('The game ended! Nobody wins :(');
    }

    for (const line of dashboard) {
        console.log(line.join('\t'));
    }
}

ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
console.log('.........');
ticTacToe([
    "0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);
console.log('.............');
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);
