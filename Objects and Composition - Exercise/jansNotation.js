function jansNotation(array) {

    const calcMap = {
        "+": (a, b) => a + b,
        "-": (a, b) => b - a,
        "*": (a, b) => a * b,
        "/": (a, b) => b / a,
    };

    const clonedArray = [...array];
    const numbers = [];

    for (let i = 0; i <= array.length; i++) {

        if (i === array.length) {

            if (numbers.length === 1) {
                return numbers[0];
            }

            return 'Error: too many operands!';
        }

        if (typeof clonedArray[i] === 'number') {
            numbers.push(clonedArray[i]);

        } else {

            const operator = clonedArray[i];

            if (numbers.length < 2) {

                return 'Error: not enough operands!';

            } else {
                const numA = numbers.pop();
                const numB = numbers.pop();
                const result = calcMap[operator](numA, numB);
                numbers.push(result);
            }
        }
    }
}

console.log(jansNotation([3, 4, '+']));
// 7
console.log('..........');
console.log(jansNotation([5, 3, 4, '*', '-']));
// -7
console.log('..........');
console.log(jansNotation([7, 33, 8, '-']));
//Error: too many operands!
console.log('..........');
console.log(jansNotation([15, '/']));
//Error: not enough operands!