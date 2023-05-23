function carFactory(input) {

    let car = { ...input };
    if (car.power <= 90) {
        delete car.power;
        car.engine = {
            power: 90,
            volume: 1800,
        };
    } else if (car.power <= 120) {
        delete car.power;
        car.engine = {
            power: 120,
            volume: 2400,
        };
    } else if (car.power <= 200) {
        delete car.power;
        car.engine = {
            power: 200,
            volume: 3500,
        };
    }

    if (car.carriage === 'hatchback') {
        car.carriage = {
            type: 'hatchback',
            color: car.color,
        };
        delete car.color;
    } else if (car.carriage === 'coupe') {
        car.carriage = {
            type: 'coupe',
            color: car.color,
        };
        delete car.color;
    }

    if (car.wheelsize % 2 === 0) {

        const size = car.wheelsize - 1;
        car.wheels = [size, size, size, size];
        delete car.wheelsize;
    } else {

        const size = car.wheelsize;
        car.wheels = [size, size, size, size];
        delete car.wheelsize;
    }

    return car;

}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));
console.log('.............');
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));