function fromJSONToHTMLTable(jsonString) {

    let parced = JSON.parse(jsonString);

    let columnNames = Object.keys(parced[0]);
    let values = parced.map(object => Object.values(object));

    let result = '<table>\n';

    appendHeaders(columnNames);
    appendValues(values);

    result += '</table>';

    function appendHeaders(columnNames) {
        result += '   <tr>';

    for (const columnName of columnNames) {
        result += `<th>${escape(columnName)}</th>`;
    }

    result += '</tr>\n';
    }

    function appendValues(values) {
        
        for (const value of values) {
            result += '   <tr>';
            for (const el of value) {
                result += `<td>${escape(el)}</td>`;
            }
            
            result += '</tr>\n';
        }
    
    }

    function escape(value) {
        return value
        .toString()
        .replace('<', '&lt;')
        .replace('&', '&amp;')
        .replace('"', '&quot;')
        .replace('\'', '&#39;')
        .replace(' ', '&nbsp;')
        .replace('>', '&gt;');
    }

    return result;

}

// console.log(fromJSONToHTMLTable(
//     `[{"Name":"Stamat",
//     "Score":5.5},
//     {"Name":"Rumen",
//     "Score":6}]`
// ));
// console.log('...........');
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