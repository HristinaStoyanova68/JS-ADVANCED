const { expect } = require('chai');
const isSymmetric = require('./isSymmetric');

describe('Symmetry Checker', function () {

    it('works with symmetric numeric array', () => {
        const arr = [1, 2, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it('returns false for non-symmetric numeric array', () => {
        const arr = [1, 2, 3];
        expect(isSymmetric(arr)).to.be.false;
    });

    it('returns false for non-array', () => {
        const data = 1;
        expect(isSymmetric(data)).to.be.false;
    });

    it('returns true for odd-length array', () => {
        const arr = [1, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it('returns false for array-like argument', () => {
        const data = '1221';
        expect(isSymmetric(data)).to.be.false;
    });

    it('returns false when array is mixed with diff types of arguments', () => {
        const data = [1, 2, '1'];
        expect(isSymmetric(data)).to.be.false;
    });

    it('returns false when array is object', () => {
        const data = { name: 'Pesho' };
        expect(isSymmetric(data)).to.be.false;
    });

    it('returns true with symmetric string array ', () => {
        const arr = ['a', 'b', 'b', 'a'];
        expect(isSymmetric(arr)).to.be.true;
    });
});