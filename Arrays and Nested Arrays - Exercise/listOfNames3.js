function sortListOfNames(listOfNames) {

    const sortedListOfNames = listOfNames.sort((nameA, nameB) => 
    nameA.localeCompare(nameB)
    );

    sortedListOfNames.forEach((name, index) => {
        console.log(`${index + 1}.${name}`);
    });
}

sortListOfNames(["John", "Bob", "Christina", "Ema"]);