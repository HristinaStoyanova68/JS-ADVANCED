function attachGradientEvents() {

    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onClick);

    //optional clean result

    // gradient.addEventListener('mouseout', gradientOut);

    // function gradientOut(event) {
    //     document.getElementById('result').textContent = '';
    // }

    function onClick(event) {

        const x = event.offsetX;
        const percent = Math.floor(x / 300 * 100);

        const result = document.getElementById('result');
        result.textContent = percent + '%';
    }
}