function greatestCommonDivisor(a, b) {

    let num1 = Number(a);
    let num2 = Number(b);

    while (num1 !== num2) {

        if (num1 > num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
    }

    console.log(num1);
}

greatestCommonDivisor(15, 5);
console.log('...............');
greatestCommonDivisor(2154, 458);