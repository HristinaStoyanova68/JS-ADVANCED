function validityChecker(x1, y1, x2, y2) {

    let resultAsArray = [];
    let result1 = [[x1, y1], [0, 0], Math.pow(x1, 2) + Math.pow(y1, 2)];
    let result2 = [[x2, y2], [0, 0], Math.pow(x2, 2) + Math.pow(y2, 2)];
    let result3 = [[x1, y1], [x2, y2], Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)];

    resultAsArray.push(result1, result2, result3);

    for (const result of resultAsArray) {

        let distance = Math.sqrt(result[2]);

        if (Number.isInteger(distance)) {

            console.log(`{${result[0].join(', ')}} to {${result[1].join(', ')}} is valid`);
        } else {
            console.log(`{${result[0].join(', ')}} to {${result[1].join(', ')}} is invalid`);
        }
    }
}

validityChecker(3, 0, 0, 4);
console.log('...............');
validityChecker(2, 1, 1, 1);