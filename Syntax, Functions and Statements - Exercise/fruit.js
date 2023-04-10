function fruit(typeOfFruit, weigthOfFruit, pricePerKg) {

    let weigthPerKg = weigthOfFruit / 1000;
    let totalPrice = weigthPerKg * pricePerKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weigthPerKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}

fruit('orange', 2500, 1.80);
console.log('......');
fruit('apple', 1563, 2.35);