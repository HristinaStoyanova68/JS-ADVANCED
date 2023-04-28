function townPopulation(array) {

    let townData = {};

    while (array.length) {

        let [townName, townPopulation] = array.shift().split(' <-> ');
        townPopulation = Number(townPopulation);

        if (!townData.hasOwnProperty(townName)) {

            townData[townName] = townPopulation;
        } else {
            townData[townName] += townPopulation;
        }
    }

    let entries = Object.entries(townData);

    for (const [townName, townPopulation] of entries) {

        console.log(`${townName} : ${townPopulation}`);
    }
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

    'Istanbul <-> 1000'])