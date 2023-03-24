function dayOfWeek(input) {
    let day = input;

    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    if (days.includes(day)) {
        let index = days.indexOf(day);
        return index + 1;
    } else {
        return 'error';
    }
}

console.log(dayOfWeek('Monday'));
console.log('............');
console.log(dayOfWeek('Friday'));
console.log('............');
console.log(dayOfWeek('Invalid'));