function getManager() {

    const SUCCESS_MSG = 'Success';

    //create dictionares
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,

    };
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    //create error handling
    const getError = (ingredient) => `Error: not enough ${ingredient} in stock`;

    //create actions
    const commands = {
        restock: (ingredient, quantity) => {
            ingredients[ingredient] += Number(quantity);
            return SUCCESS_MSG;
        },
        prepare: (recipe, quantity) => {

            let missingElementEntry;
            let errorMsg;
            for (let index = 0; index < Number(quantity); index++) {
                missingElementEntry = Object.entries(recipes[recipe])
                    .find((x) => ingredients[x[0]] < Number(x[1]));


                if (missingElementEntry) {
                    errorMsg = getError(missingElementEntry[0]);
                    break;
                }
                Object.entries(recipes[recipe])
                    .forEach((x) => {
                        ingredients[x[0]] -= Number(x[1])
                    });

            }

            return errorMsg ? errorMsg : SUCCESS_MSG;
        },
        report: () => {
            return Object.keys(ingredients)
                .reduce((a, b) => {
                    a.push(`${b}=${ingredients[b]}`);
                    return a;
                }, []).join(' ');
        },
    };

    //commands data function

    return function (str) {
        const cmdData = str.split(' ');

        return cmdData.length === 1
            ? commands[cmdData[0]]()
            : commands[cmdData[0]](cmdData[1], cmdData[2]);
    }
}

const manager = getManager();
console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock protein 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("report")); //'protein=0 carbohydrate=4 fat=3 flavour=5'




