function validate() {
    //capture elements
    const emailInput = document.getElementById('email');

    //attach event
    emailInput.addEventListener('change', onChange);

    //callbacks
    function onChange(event) {

        const { target } = event;
        const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        // const isValid = emailRegex.test(target.value);
        

        // if (!isValid) {
        //     target.classList.add('error');
        // } else {
        //     target.classList.remove('error');
        // }

        const operation = emailRegex.test(target.value) ? 'remove' : 'add';
        target.classList[operation]('error');
    }
}