function cars(array) {

    function create(name, parentName) {
        if (parentName) {
            return cars[name] = { inheritance: cars[parentName] };
        }
        return cars[name] = {};

    }
    function set(name, key, value) {
        return cars[name][key] = value;
    }
    function print(object) {
        let result = [];

        for (const key in object) {
            if (key !== 'inheritance') {
                result.push(`${key}:${object[key]}`);
            }
        }

        if (object.inheritance) {
            for (const key in object.inheritance) {
                if (key !== 'inheritance') {
                    result.push(`${key}:${object.inheritance[key]}`);
                }
            }

            if (object.inheritance.inheritance) {
                for (const key in object.inheritance.inheritance) {
                    if (key !== 'inheritance') {
                        result.push(`${key}:${object.inheritance.inheritance[key]}`);
                    }
                }
            }
        }
        return console.log(result.join(','));
    }

    let cars = {};

    for (const data of array) {
        const [command, token1, token2, token3] = data.split(' ');

        if (command === 'create') {
            create(token1, token3);
        } else if (command === 'set') {
            set(token1, token2, token3);
        } else if (command === 'print') {
            print(cars[token1]);
        }
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);