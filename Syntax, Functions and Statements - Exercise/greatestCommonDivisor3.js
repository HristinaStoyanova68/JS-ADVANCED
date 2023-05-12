function greatestCommonDivisor3(num1, num2) {

    while (num2) {
        const temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    console.log(num1);
}

greatestCommonDivisor3(15, 5);
console.log('.................');
greatestCommonDivisor3(2154, 458);