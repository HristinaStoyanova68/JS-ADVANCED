const { expect } = require('chai');
const createCalculator = require('./addSubtract');

describe('Calculator', function () {
    let calc = null;

    beforeEach(() => {
        calc = createCalculator();
    });

    it('returns zero initial value', () => {
        expect(calc.get()).to.equal(0);
    });

    describe('numbers arguments', () => {

        it('can add numbers', () => {
            calc.add(1);
            expect(calc.get()).to.equal(1);
        });

        it('can add more than one numbers', () => {
            calc.add(1);
            calc.add(1);
            expect(calc.get()).to.equal(2);
        });

        it('can subtract numbers', () => {
            calc.subtract(1);
            expect(calc.get()).to.equal(-1);
        });

        it('can add and subtract numbers', () => {
            calc.add(2);
            calc.subtract(1);
            expect(calc.get()).to.equal(1);
        });
    });

    describe('strings arguments', () => {

        it('can add numbers as strings', () => {
            calc.add('1');
            expect(calc.get()).to.equal(1);
        });

        it('can subtract numbers as strings', () => {
            calc.subtract('1');
            expect(calc.get()).to.equal(-1);
        });
    });
});