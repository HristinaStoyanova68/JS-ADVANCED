function solve() {

    //1.Select elements - table, 2 buttons

    //let board = document.querySelector('#exercise tbody');
    let buttons = Array.from(document.querySelectorAll('#exercise tfoot button'));
    let checkBtn = buttons[0];
    let clearBtn = buttons[1];

    checkBtn.addEventListener('click', checkTable);
    clearBtn.addEventListener('click', clearTable);

    function checkTable() {
        //2.Transform the table into matrix#exercise
        let board = Array.from(document.querySelectorAll('#exercise tbody tr'))
            .map(row => Array.from(row.querySelectorAll('input'))
                .map(x => Number(x.value)));

        //3.Check isValid table
        let isValid = isValidTable(board);
        let checkParagraph = document.querySelector('#check p');
        let table = document.querySelector('#exercise table');
        //4.Set resulting message and border color
        checkParagraph.textContent = isValid ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';

        //4a.If isValid table set  message in green colour and set border in green color 
        //4b.If !(isValid) table set  message in red colour and set border in red color 
        checkParagraph.style.color = isValid ? 'green' : 'red';
        table.style.border = isValid ? '2px solid green' : '2px solid red';

    }

    function isValidTable(board) {
        //3a.Check that every row contains numbers 1-3 without repeating
        //3a.Check that every col contains numbers 1-3 without repeating


        for (let row = 0; row < board.length; row++) {
            let rowObj = createCheckObj(board);
            let colObj = createCheckObj(board);
            for (let col = 0; col < board[row].length; col++) {
                let currRowCell = board[row][col];
                let currColCell = board[col][row];

                rowObj[currRowCell]++;
                colObj[currColCell]++;
            }

            let rowValues = Object.values(rowObj);
            let colValues = Object.values(colObj);

            if (rowValues.length > board.length || rowValues.some(x => x !== 1) ||
                colValues.length > board.length || colValues.some(x => x !== 1)) {
                return false;
            }

        }
        return true;
    }

    function createCheckObj(board) {
        let obj = {};

        for (let index = 0; index < board.length; index++) {
            obj[index + 1] = 0;
        }
        return obj;
    }

    function clearTable() {
        //Clear table border and message
        let checkParagraph = document.querySelector('#check p');
        let table = document.querySelector('#exercise table');
        let board = Array
            .from(document.querySelectorAll('#exercise tbody tr'))
            .map(row => Array.from(row.querySelectorAll('input')));
        checkParagraph.textContent = '';
        table.style.border = '';
        board.forEach(el => el.value = '');
    }
}