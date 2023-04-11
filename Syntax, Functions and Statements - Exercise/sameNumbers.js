function sameNumbers(number) {

    let numberAsString = number.toString();
    let isSame = true;
    let compareChar = Number(numberAsString[0]);
    let sum = 0;

    for (let char of numberAsString) {
        char = Number(char);
        if (char !== compareChar) {
            isSame = false;
        }
        sum += char;
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
console.log('...............');
sameNumbers(1234);
