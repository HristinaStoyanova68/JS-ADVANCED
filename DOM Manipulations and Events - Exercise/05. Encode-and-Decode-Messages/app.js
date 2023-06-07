function encodeAndDecodeMessages() {
    //capture buttons
    const [encodeBtn, decodeBtn] = [...document.querySelectorAll('main button')];
    const textContainers = [...document.querySelectorAll('main textarea')];

    //attach events

    encodeBtn.addEventListener('click', encodeAndSend);
    decodeBtn.addEventListener('click', decodeAndRead);

    //helper functions

    function transformText(text, callback) {
        return text.split('').map(callback).join('');
    }

    function prevChar(char) {
        return String.fromCharCode(char.charCodeAt() - 1);
    }

    function nextChar(char) {
        return String.fromCharCode(char.charCodeAt() + 1);
    }

    //on click callbacks
    function encodeAndSend(event) {

        textContainers[1].value = transformText(textContainers[0].value, nextChar);
        textContainers[0].value = '';
    }

    function decodeAndRead(event) {
        textContainers[1].value = transformText(textContainers[1].value, prevChar);
    }
}