function roadRadar2(steps, footprintLength, speedKmH) {

    let distance = steps * footprintLength;
    let delay = Math.floor(distance / 500) * 60;
    let speed = speedKmH * 1000 / (60 * 60);
    let timeInSeconds = distance / speed + delay;

    let hours = Math.floor(timeInSeconds / (60 * 60)).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(timeInSeconds / 60).toFixed(0).padStart(2, '0');
    let seconds = (timeInSeconds % 60).toFixed(0).padStart(2, '0');
    
    console.log(`${hours}:${minutes}:${seconds}`);

}

roadRadar2(4000, 0.60, 5);
console.log('................');
roadRadar2(2564, 0.70, 5.5);