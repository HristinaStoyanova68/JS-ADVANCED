function roadRadar(speed, area) {

    let allowedSpeed = 0;
    let status = '';

    if (area === 'city') {
        allowedSpeed = 50;
    } else if (area === 'residential') {
        allowedSpeed = 20;
    } else if (area === 'interstate') {
        allowedSpeed = 90;
    } else if (area === 'motorway') {
        allowedSpeed = 130;
    }

    if (speed <= allowedSpeed) {

        console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
    } else {

        let difference = speed - allowedSpeed;

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
    }
}

roadRadar(40, 'city');
console.log('..........');
roadRadar(21, 'residential');
console.log('..........');
roadRadar(120, 'interstate');
console.log('..........');
roadRadar(200, 'motorway');