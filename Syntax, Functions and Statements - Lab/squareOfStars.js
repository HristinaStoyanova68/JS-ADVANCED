function squareOfStars(input) {

    if (input !== undefined) {
        numOfStars = Number(input);
    } else {
        numOfStars = 5;
    }

    let square = '';
    
    for (let row = 0; row < numOfStars; row++) {
        let line = '';
        for (let col = 0; col < numOfStars; col++) {
            line += '* ';
        }
        square += `${line.trim()}\n`;
    }
    
    return square;
}
console.log(squareOfStars());
console.log('................');
console.log(squareOfStars(1));
console.log('................');
console.log(squareOfStars(2));
console.log('................');
console.log(squareOfStars(5));
console.log('................');
console.log(squareOfStars(7));