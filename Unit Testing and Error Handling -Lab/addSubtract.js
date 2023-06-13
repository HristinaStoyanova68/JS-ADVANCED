function createCalculator() {

    let sum = 0;
    return {

        add (value) {
            sum += Number(value);
        },
        subtract (value) {
            sum -= value;
        },
        get () {
            return sum;
        }
    }
    // let value = 0;
    // return {
    //     add: function(num) { value += Number(num); },
    //     subtract: function(num) { value -= Number(num); },
    //     get: function() { return value; }
    // }
}


module.exports = createCalculator;