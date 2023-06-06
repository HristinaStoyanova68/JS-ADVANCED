function attachEventsListeners() {

    //config
    //24 hours/1440 minutes/86400 seconds
    const RATIONS = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };
    //console.log(RATIONS);

    //helper functions

    function convert(value, unit) {

        const inDays = value / RATIONS[unit];

        return {
            days: inDays,
            hours: inDays * RATIONS.hours,
            minutes: inDays * RATIONS.minutes,
            seconds: inDays * RATIONS.seconds,
        };
    }

    //capture elements

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    //event lis setup

    document.querySelector('main').addEventListener('click', onConvert);

    //onClick setup

    function onConvert(event) {

        if (event.target.tagName === 'INPUT' && event.target.type === 'button') {
            //get input
            const input = event.target.parentElement.querySelector('input[type= "text"]');

            //get time
            const inputValue = Number(input.value);
            //const inputUnit = input.id;
            const time = convert(inputValue, input.id);

            daysInput.value = time.days;
            hoursInput.value = time.hours;
            minutesInput.value = time.minutes;
            secondsInput.value = time.seconds;
        }
    }
}