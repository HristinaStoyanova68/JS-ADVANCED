function encodeAndDecodeMessages() {
    //capture buttons
    const [encodeBtn, decodeBtn] = [...document.querySelectorAll('main button')];
    const [senderTextArea, receiverTextArea] = [...document.querySelectorAll('main textarea')];

    //attach events

    encodeBtn.addEventListener('click', encodeAndSend);
    decodeBtn.addEventListener('click', decodeAndRead);

    //helper functions

    function transformText(text, callback) {
        return text.split('').map(callback).join('');
    }

    function prevChar(char) {
        return String.fromCharCode(char.charCodeAt(0) - 1);
    }

    function nextChar(char) {
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }

    //on click callbacks
    function encodeAndSend(event) {

        receiverTextArea.value = transformText(senderTextArea.value, nextChar);
        senderTextArea.value = '';
    }

    function decodeAndRead(event) {
        receiverTextArea.value = transformText(receiverTextArea.value, prevChar);
    }
}