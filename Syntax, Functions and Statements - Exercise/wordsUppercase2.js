function wordsUppercase(input) {

    let result = input
        .match(/\w+/g)
        .map(x => x.toUpperCase());

    console.log(result.join(', '));
}

wordsUppercase('Hi, how are you?');
console.log('.............');
wordsUppercase('hello');