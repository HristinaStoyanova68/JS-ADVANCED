function sortAnArrayBy2Criteria(array) {

    const sortedArray = array.sort((a, b) => {
         
        const firstCriteria = a.length - b.length;
        const secondCriteria = a.localeCompare(b);

        return firstCriteria || secondCriteria;
    });

    console.log(sortedArray.join('\n'));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log('............');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('............');
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);