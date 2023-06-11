function add(number) {

    let sum = 0;
    sum += number;
    
    function calculate(num) {
        sum += num;
        return calculate;
    }

    calculate.toString = () => sum;

    return calculate;
}


console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());