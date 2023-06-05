function focused() {
    const inputs = Array.from(document.querySelectorAll('input'));

    // for (const input of inputs) {

    //     input.addEventListener('focus', () => {
    //         // console.log('focused');
    //         input.parentElement.className = 'focused';
    //     });
    //     input.addEventListener('blur', () => {
    //         //console.log('blurred');
    //         input.parentElement.className = "";

    //     });
    // }

    for (const input of inputs) {

        input.addEventListener('focus', (event) => {
            // console.log('focused');
            event.target.parentElement.className = 'focused';
        });
        input.addEventListener('blur', (event) => {
            //console.log('blurred');
            event.target.parentElement.className = "";
        });
    }
}