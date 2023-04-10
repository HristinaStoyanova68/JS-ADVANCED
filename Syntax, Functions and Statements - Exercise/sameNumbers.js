function sameNumbers(number) {

    let numberAsString = number.toString();
    let isSame = true;
    let compareChar = Number(numberAsString[0]);
    let sum = 0;

    for (const char of numberAsString) {

        if (Number(char) !== compareChar) {
            isSame = false;
        }
        sum += Number(char);
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
console.log('...............');
sameNumbers(1234);
