function rotateArray(array, numOfRotations) {

    while (numOfRotations > 0) {
        let rotateElement = array.pop();
        array.unshift(rotateElement);

        numOfRotations--;
    }

    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
console.log('............');
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);