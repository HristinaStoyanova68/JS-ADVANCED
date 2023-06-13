const chai = require('chai');
const expect = chai.expect;

//the function
function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return 'Incorrect index';
    }

    return string.charAt(index);
}

//the tests
describe('retrive character at index from string parameter', function () {
    it('valid input -> (a, 0)', () => {

        expect(lookupChar('a', 0)).to.equal('a');
    });

    it('valid input -> (ab, 0)', () => {

        expect(lookupChar('ab', 1)).to.equal('b');
    });

    it('invalid input -> first param is not a string', () => {

        expect(lookupChar(1, 0)).to.equal(undefined);
    });

    it('invalid input -> second param is not a number', () => {

        expect(lookupChar('a', '1')).to.equal(undefined);
    });

    it('invalid input -> second param is floats', () => {

        expect(lookupChar('a', 1.1)).to.equal(undefined);
    });

    it('invalid input -> second param is negative number', () => {

        expect(lookupChar('a', -1)).to.equal('Incorrect index');
    });

    it('invalid input -> string.length <= index', () => {

        expect(lookupChar('a', 'a'.length + 1)).to.equal('Incorrect index');
    });
});



