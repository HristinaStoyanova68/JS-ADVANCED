function calc() {
    let input1 = document.getElementById('num1');
    let input2 = document.getElementById('num2');
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    let sumInput = document.getElementById('sum');
    sumInput.value = num1 + num2;
}
