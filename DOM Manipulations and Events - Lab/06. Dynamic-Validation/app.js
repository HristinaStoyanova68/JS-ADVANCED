function validate() {
    const input = document.getElementById('email');
    
    input.addEventListener('change', validationEmail);

    function validationEmail() {

        const inputValue = input.value;

        const isValid = inputValue.match(/^[a-z]+@[a-z]+\.[a-z]+$/);

        if (isValid) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }        
    }
}