function listOfNames(names) {

    names
        .sort((a, b) => a.localeCompare(b))
        .forEach((element, i) => {

            console.log(`${i + 1}.${element}`);
        });
}

listOfNames(["John",

    "Bob",

    "Christina",

    "Ema"]);