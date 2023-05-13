function roadRadar2(speed, area) {

    const limitsDictionary = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    const limit = limitsDictionary[area];

    if (speed <= limit) {
        const output = `Driving ${speed} km/h in a ${limit} zone`;

        console.log(output);
        return;
    } else {

        let status = '';
        let difference = speed - limit;

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        const output = `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;

        console.log(output);
    }
}

roadRadar2(40, 'city');
console.log('..........');
roadRadar2(21, 'residential');
console.log('..........');
roadRadar2(120, 'interstate');
console.log('..........');
roadRadar2(200, 'motorway');