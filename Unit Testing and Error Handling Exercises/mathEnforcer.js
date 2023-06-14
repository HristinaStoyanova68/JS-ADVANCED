//const { expect } = require("chai");

const chai = require('chai');
const { expect } = chai;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }

        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }

        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }

        return num1 + num2;
    }
};

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('return undefined if param is not a number', () => {
            expect(mathEnforcer.addFive('1')).to.equal(undefined);
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
        });
        it('return added 5 to input if param is a number', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(-1)).to.equal(4);
            expect(mathEnforcer.addFive(1.1)).to.closeTo(6.1, 0.01);
        });
    });
    describe('subtractTen', function () {
        it('return undefined if param is not a number', () => {
            expect(mathEnforcer.subtractTen('1')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
        });
        it('return input minus ten if param is a number', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
            expect(mathEnforcer.subtractTen(1.1)).to.closeTo(-8.9, 0.01);
        });
    });
    describe('sum', function () {
        it('return undefined if any of passed params is not a number', () => {
            expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
            expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
            expect(mathEnforcer.sum('1', '1')).to.equal(undefined);
            expect(mathEnforcer.sum(1, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum(undefined, 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1, null)).to.equal(undefined);
            expect(mathEnforcer.sum(null, 1)).to.equal(undefined);
        });

        it('return sum of passed params if both are numbers', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            // expect(mathEnforcer.sum(-1, 1)).to.equal(0);
            // expect(mathEnforcer.sum(1, -1)).to.equal(0);
            expect(mathEnforcer.sum(1, 1.1)).to.closeTo(2.1, 0.01);
            expect(mathEnforcer.sum(1.1, 1)).to.closeTo(2.1, 0.01);
        });
    });
});
