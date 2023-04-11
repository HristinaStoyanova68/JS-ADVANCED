function wordsUppercase(input) {

    let pattern = /(\w+)/g;
    let inputAsArray = input.split(pattern);
    let result = [];

    for (const elem of inputAsArray) {

        let match = pattern.exec(elem);

        if (match !== null) {

            result.push(elem.toUpperCase());
        }
    }
    console.log(result.join(', '));
}


wordsUppercase('Hi, how are you?');
console.log('.............');
wordsUppercase('hello');