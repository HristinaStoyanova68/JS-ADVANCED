function circleArea(input) {

    let typeOf = typeof (input);
    if (typeOf === 'number') {

        let result = Math.PI * Math.pow(input, 2);
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOf}.`);
    }
}

circleArea(5);
console.log('..............');
circleArea('name');