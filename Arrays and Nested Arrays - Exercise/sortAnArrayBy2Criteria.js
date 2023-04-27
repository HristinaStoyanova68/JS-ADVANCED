function sortAnArrayBy2Criteria(array) {

    array
        .sort((a, b) => a.length - b.length || a.localeCompare(b))
        .forEach(element => {

            console.log(element);
        });

}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log('............');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('............');
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);