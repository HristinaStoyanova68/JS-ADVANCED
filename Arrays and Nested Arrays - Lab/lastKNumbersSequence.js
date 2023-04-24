function lastKNumbersSequence(nNum, kNum) {

    let arr = [1];

    while (arr.length < nNum) {
        let num = 0;

        if (arr.length < kNum) {
            for (const elem of arr) {
                num += elem;
            }

            arr.push(num);

        } else {

            for (let i = 0; i < kNum; i++) {
                num += arr[(arr.length - 1) - i];
            }
            arr.push(num);
        }
    }

    return arr;
}

console.log(lastKNumbersSequence(6, 3));
console.log('............');
console.log(lastKNumbersSequence(8, 2));