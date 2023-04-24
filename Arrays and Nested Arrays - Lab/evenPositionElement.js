function evenPositionElement(numbers) {

    let result = numbers
        .filter((elem, i) => i % 2 == 0)
        .join(' ');
    console.log(result);
}

evenPositionElement(['20', '30', '40',

    '50', '60']);
console.log('...........');
evenPositionElement(['5', '10']);