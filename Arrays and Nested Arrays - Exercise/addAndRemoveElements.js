function addAndRemoveElements(commands) {

    let result = [];
    let num = 1;

    for (const command of commands) {
        if (command === 'add') {
            result.push(num++);

        } else if (command === 'remove') {
            result.pop(num++);
        }
    }

    if (!result.length) {
        console.log("Empty");
    } else {

        console.log(result.join('\n'));
    }
}

addAndRemoveElements(['add',

    'add',

    'add',

    'add']);
console.log('...........');
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
console.log('...........');
addAndRemoveElements(['remove', 'remove', 'remove']);



