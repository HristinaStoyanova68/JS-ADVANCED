function townPopulation(array) {

    let townData = {};

    while (array.length) {

        let [townName, townPopulation] = array.shift().split(' <-> ');

        if (!townData.hasOwnProperty(townName)) {

            townData[townName] = 0;
        }
        townData[townName] += Number(townPopulation);
    }

    console.log(Object.entries(townData)
        .map(([townName, townPopulation]) => `${townName} : ${townPopulation}`)
        .join('\n'));
}

townPopulation(['Sofia <-> 1200000',

    'Montana <-> 20000',

    'New York <-> 10000000',

    'Washington <-> 2345000',

    'Las Vegas <-> 1000000']);
console.log('............');
townPopulation(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000']);