function largestNumber(num1, num2, num3) {

    let max = 0;

    if (num1 > num2 && num1 > num3) {
        max = num1;
    } else if (num2 > num1 && num2 > num3) {
        max = num2;
    } else if (num3 > num1 && num3 > num2) {
        max = num3;
    }

    console.log(`The largest number is ${max}.`);
}

largestNumber(5, -3, 16);
console.log('...............');
largestNumber(-3, -5, -22.5);