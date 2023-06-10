function argumentInfo(...args) {

    const dict = {};

    args.forEach((arg) => {
        const typeOfArg = typeof arg;
        console.log(`${typeOfArg}: ${arg}`)


        dict[typeOfArg] = dict[typeOfArg] ?
            dict[typeOfArg] += 1 :
            dict[typeOfArg] = 1;
    });

    const sortedArg = Object.entries(dict).sort((a, b) => b[1] - a[1]);
    sortedArg.forEach(([key, value]) => console.log(`${key} = ${value}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); }, 'mouse', 555, 43);
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1
