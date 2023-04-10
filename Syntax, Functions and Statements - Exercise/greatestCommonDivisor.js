function greatestCommonDivisor(a, b) {

    let num1 = Number(a);
    let num2 = Number(b);

    let greatestCommonDivisor = 0;

    let smallestNumber = Math.min(num1, num2);

    for (let i = 1; i <= smallestNumber; i++) {

        if (num1 % i === 0 && num2 % i === 0) {

            greatestCommonDivisor = i;
        }
    }

    console.log(greatestCommonDivisor);
}

greatestCommonDivisor(15, 5);
console.log('...............');
greatestCommonDivisor(2154, 458);