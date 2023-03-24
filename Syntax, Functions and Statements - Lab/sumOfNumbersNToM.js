function sumOfNumbersNToM(elem1, elem2) {

    let num1 = Number(elem1);
    let num2 = Number(elem2);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    return result;
}

console.log(sumOfNumbersNToM('1', '5'));
console.log('............');
console.log(sumOfNumbersNToM('-8', '20'));