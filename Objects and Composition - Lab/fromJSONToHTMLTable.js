function fromJSONToHTMLTable(jsonString) {

    let array = JSON.parse(jsonString);
   // console.log(array);
    let output = '<table>\n';
    let firstObject = array[0];
    output += '   <tr>';

    for (const key in firstObject) {
        output += `<th>${escapeHTML(key)}</th>`;
    }
    output += '</tr>\n'; 

    for (const object of array) {
        output += '   <tr>';
        for (const key in object) {
            
            output += `<td>${escapeHTML(object[key])}</td>`;
        }
        output += '</tr>\n'; 
    }
    output += '</table>';

    function escapeHTML(value) {

        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    return output;
}

console.log(fromJSONToHTMLTable(
    `[{"Name":"Stamat",
    "Score":5.5},
    {"Name":"Rumen",
    "Score":6}]`
));
console.log('...........');
console.log(fromJSONToHTMLTable(
    `[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
    {"Name":"Gosho",
    "Score":5,
    " Grade":8},
    {"Name":"Angel",
    "Score":5.50, 
    " Grade":10}]`
));