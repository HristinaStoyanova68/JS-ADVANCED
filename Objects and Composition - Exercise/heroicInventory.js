function heroicInventory(array) {

    const result = [];

    array.forEach(element => {

        const hero = {};
        const dataHeroArray = element.split(' / ');
        hero.name = dataHeroArray[0];
        hero.level = Number(dataHeroArray[1]);

        const items = dataHeroArray[2];
        hero.items = items ? items.split(', ') : [];

        result.push(hero);
    });

    return JSON.stringify(result);
}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
console.log('..................');
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);


