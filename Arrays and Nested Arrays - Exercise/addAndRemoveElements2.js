function addAndRemoveElements(array) {

    let num = 1;
    let result = [];

    array.forEach(command => {
        if (command === 'add') {
            result.push(num);
        } else {
            result.pop(num);
        }

        num += 1;
    });

    const output = result.length >= 1 ? result.join('\n') : 'Empty';

    console.log(output);
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
console.log('...........');
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
console.log('...........');
addAndRemoveElements(['remove', 'remove', 'remove']);