const chai = require('chai');
const expect = chai.expect;

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('check for even or odd functionality', function () {

    it('test for undefined', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });

    it('test is even strings length', () => {
        expect(isOddOrEven('abcd')).to.equal('even');
    });

    it('test is odd strings length', () => {
        expect(isOddOrEven('abc')).to.equal('odd');
    });
});



