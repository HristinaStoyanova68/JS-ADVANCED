function extract(content) {
    let p = document.getElementById('content');
    let text = p.textContent;

    let regex = /\(([^()]*)\)/g;
    let result = [...text.matchAll(regex)].map(x => x[1]);
    let resultString = result.join('; ');
    return resultString;
}