function cookingByNumbers(number, ...params) {

    number = Number(number);
    for (const param of params) {
        if (param === 'chop') {
            number /= 2;
        } else if (param === 'dice') {
            number = Math.sqrt(number);
        } else if (param === 'spice') {
            number++;
        } else if (param === 'bake') {
            number *= 3;
        } else if (param === 'fillet') {
            number *= 0.8;
        }

        console.log(number);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('.............');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake',

    'fillet');