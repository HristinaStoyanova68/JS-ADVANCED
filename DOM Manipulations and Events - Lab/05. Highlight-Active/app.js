function focused() {
    const inputs = Array.from(document.querySelectorAll('input'));

    for (const input of inputs) {

        input.addEventListener('focus', () => {
            // console.log('focused');
            input.parentElement.className = 'focused';
        });
        input.addEventListener('blur', () => {
            //console.log('blurred');
            input.parentElement.className = "";

        });
    }
}