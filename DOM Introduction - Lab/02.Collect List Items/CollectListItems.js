function extractText() {
    let listElem = document.getElementsByTagName('li');
    let liArray = Array.from(listElem);
    let allText = liArray.map(x => x.textContent);

    let textArea = document.getElementById('result');
    textArea.value = allText.join('\n');
}