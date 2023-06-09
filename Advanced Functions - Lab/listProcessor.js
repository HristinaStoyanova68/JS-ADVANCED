function listProcessor(array) {

    let result = [];
    function closure() {

        return {
            add(str) {
                result.push(str);
            },
            remove(str) {
                result = result.filter(x => x !== str);
            },
            print() {
                console.log(result.join(','));
            }
        }
    }

    const commandsData = array.map(x => x.split(' '));

    for (const [command, str] of commandsData) {
        let test = closure();
        if (command === 'add') {
            test.add(str);
        } else if (command === 'remove') {
            test.remove(str);
        } else if (command === 'print') {
            test.print();
        }
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);

