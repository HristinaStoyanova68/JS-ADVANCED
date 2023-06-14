function validate() {

    //const namePattern = /^[a-zA-Z0-9]+$/g;
    //const passPattern = /^\w+$/g;


    //dictionaries
    const html = {
        companyCheck: document.querySelector('#company'),
        submit: document.querySelector('#submit'),
        validDiv: document.querySelector('#valid'),
        companyInfo: document.querySelector('#companyInfo'),
    };

    const inputFields = {
        username: document.querySelector('#username'),
        email: document.querySelector('#email'),
        password: document.querySelector('#password'),
        'confirm-password': document.querySelector('#confirm-password'),
        companyNumber: document.querySelector('#companyNumber'),
    };

    //helper functions
    const checkLength = (inputValue, lowerLen, graterLen) =>
        inputValue.length >= lowerLen && inputValue.length <= graterLen;

    const checkPassword = (inputValue, lowerLen, graterLen, field) => {
        return (
            checkLength(inputValue, lowerLen, graterLen) &&
            /^\w+$/g.test(inputValue) &&
            inputValue === inputFields[field].value
        );
    };

    const validate = {
        username: (inputValue) =>
            checkLength(inputValue, 3, 20) && /^[a-zA-Z0-9]+$/g.test(inputValue),
        email: (inputValue) => /^.*@.*\..*$/g.test(inputValue),
        password: (inputValue) =>
            checkPassword(inputValue, 5, 15, 'confirm-password'),
        'confirm-password': (inputValue) =>
            checkPassword(inputValue, 5, 15, 'password'),
        companyNumber: (inputValue, isChecked) =>
            isChecked ? inputValue >= 1000 && inputValue <= 9999 : true,
    };

    const changeBorder = (isChecked, element) => {
        const style = isChecked ? 'border: none' : 'border-color: red';
        element.style = style;
    };

    //attach eventListeners
    html.companyCheck.addEventListener('change', onChange);
    html.submit.addEventListener('click', onClick);

    //callbacks
    function onChange(event) {
        const displayStyle = event.target.checked === true ? 'block' : 'none';
        html.companyInfo.style.display = displayStyle;
    }

    function onClick(event) {
        event.preventDefault();

        const isChecked = html.companyCheck.checked;
        let oneInvalid = false;

        Object.entries(inputFields).forEach(([name, valueField]) => {
            const valid = validate[name](valueField.value, isChecked);
            changeBorder(valid, inputFields[name]);

            if (!valid) {
                oneInvalid = true;
            }
        });

        const displayStyled = oneInvalid ? 'none' : 'block';
        html.validDiv.style.display = displayStyled;
    }
}
