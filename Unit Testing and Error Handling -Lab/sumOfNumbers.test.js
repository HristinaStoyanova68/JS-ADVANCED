const { expect } = require('chai');
const sum = require('./sum');

describe('Sum Checker', function () {

    it('should return zeros when all numbers are zeros in array', () => {
        let numbers = [0, 0, 0];
        let expectedSum = 0;
        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum);
    });

    it('should return the sum of the all numbers in the array', () => {
        let numbers = [1, 2, 3, 4];
        let expectedSum = 10;
        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum);
    });

    it('should return the sum with some negative number in the array', () => {
        let numbers = [1, 2, 3, -4];
        let expectedSum = 2;
        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum);
    });
});