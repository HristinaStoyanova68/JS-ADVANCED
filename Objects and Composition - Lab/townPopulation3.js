function townPopulation(array) {

    let map = {};

    for (let index = 0; index < array.length; index++) {
        let [town, population] = array[index].split(' <-> ');
        population = Number(population);

        if (map[town] === undefined) {
            map[town] = 0;
        }

        map[town] += population;       
    }

    for (const [town, population] of Object.entries(map)) {
        
        console.log(`${town} : ${population}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
console.log('............');
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);