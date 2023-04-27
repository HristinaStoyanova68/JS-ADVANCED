function printAnArrayWithAGivenDelimiter(array, delimeter) {

    console.log(array.join(delimeter));
}

printAnArrayWithAGivenDelimiter([
    'One',
    'Two',
    'Three',
    'Four',
    'Five'
],
    '-');
console.log('.............');
printAnArrayWithAGivenDelimiter([
    'How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'
],
    '_');