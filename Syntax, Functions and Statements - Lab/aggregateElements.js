function aggregateElements(array) {

    //     · Sum(ai) - calculates the sum of all elements from the input array
    let sum1 = 0;
    array.forEach(num => {
        sum1 += num;
    });
    console.log(sum1);

    // · Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
    let sum2 = 0;
    array.forEach(num => {
        sum2 += 1 / num;
    });
    console.log(sum2);
    // · Concat(ai) - concatenates the string representations of all elements from the array
    let sum3 = '';
    array.forEach(num => {
        sum3 += num;
    });
    console.log(sum3);
}

aggregateElements([1, 2, 3]);
console.log('.............');
aggregateElements([2, 4, 8, 16]);