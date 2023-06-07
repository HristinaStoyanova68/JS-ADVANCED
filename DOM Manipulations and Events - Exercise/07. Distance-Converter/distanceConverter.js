function attachEventsListeners() {

    const convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convert);

    function convert() {
        const inputElementValue = Number(document.getElementById('inputDistance').value);
        const inputUnitElement = document.getElementById('inputUnits').value;
        const outputUnitElement = document.getElementById('outputUnits').value;

        document.getElementById('outputDistance').value = calculation(inputUnitElement, outputUnitElement, inputElementValue);
    }

    function calculation(inputOption, outputOption, value) {

        let resultInMeters = 0;

        if (inputOption === 'km') {
            resultInMeters = value * 1000;
        } else if (inputOption === 'm') {
            resultInMeters = value * 1;
        } else if (inputOption === 'cm') {
            resultInMeters = value * 0.01;
        } else if (inputOption === 'mm') {
            resultInMeters = value * 0.001;
        } else if (inputOption === 'mi') {
            resultInMeters = value * 1609.34;
        } else if (inputOption === 'yrd') {
            resultInMeters = value * 0.9144;
        } else if (inputOption === 'ft') {
            resultInMeters = value * 0.3048;
        } else if (inputOption === 'in') {
            resultInMeters = value * 0.0254;
        }

        let finalResult = 0;

        if (outputOption === 'km') {
            finalResult = resultInMeters / 1000;
        } else if (outputOption === 'm') {
            finalResult = resultInMeters / 1;
        } else if (outputOption === 'cm') {
            finalResult = resultInMeters / 0.01;
        } else if (outputOption === 'mm') {
            finalResult = resultInMeters / 0.001;
        } else if (outputOption === 'mi') {
            finalResult = resultInMeters / 1609.34;
        } else if (outputOption === 'yrd') {
            finalResult = resultInMeters / 0.9144;
        } else if (outputOption === 'ft') {
            finalResult = resultInMeters / 0.3048;
        } else if (outputOption === 'in') {
            finalResult = resultInMeters / 0.0254;
        }

        return finalResult;
    }
}