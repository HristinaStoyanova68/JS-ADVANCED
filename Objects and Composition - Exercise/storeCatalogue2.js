function storeCatalogue(array) {

    const sortedArray = array.sort((a, b) => a.localeCompare(b));

    const result = {};

    for (let index = 0; index < sortedArray.length; index++) {
        const element = sortedArray[index].split(' : ').join(': ');
        const firstLetter = element[0];

        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }

        result[firstLetter].push(`  ${element}`);
    }

    let output = [];

    for (const key in result) {
        const element = result[key];
        output = [...output, key, ...element];
    }

    return output.join('\n');
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
console.log('..............');
storeCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);