function evenPositionElement(numbers) {

    const result = [];

    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];

        if (index % 2 === 0) {
            result.push(element);
        }
    }

    console.log(result.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60']);
console.log('...........');
evenPositionElement(['5', '10']);