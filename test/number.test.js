const chai = require('chai');
const add = require('../lib/src/add.js').default;
const difference = require('../lib/src/difference.js').default;
const divide = require('../lib/src/divide.js').default;
const toInteger = require('../lib/src/toInteger.js').default;
const toNumber = require('../lib/src/toNumber.js').default;
const ceil = require('../lib/src/ceil.js').default;
const clamp = require('../lib/src/clamp.js').default;

const expect = chai.expect;

describe("Number Test Suite", () => {
    describe("Function: Add", () => {
        it("Should add two positive numbers", () => {
            expect(add(6, 4.5)).to.equal(10.5);
        });
        it("Should add two negative numbers", () => {
            expect(add(-6, -4.5)).to.equal(-10.5);
        });
        it("Should add a positive number in to negative", () => {
            expect(add(-5, 5)).to.equal(0);
        });
    });

    describe("Function: Difference", () => {
        it("Should subtract two positive numbers", () => {
            expect(difference([2, 1], [2, 3])).to.equal([1]);
        });
        it("Should subtract two negative numbers", () => {
            expect(difference([2, 3], [2, 3])).to.equal([]);
        });
        it("Should subtract a positive number from negative", () => {
            expect(difference([2, 1], [3, 4])).to.equal([2, 1]);
        });
    });
    describe("Function: Divide", () => {
        it("Should divide two positive numbers", () => {
            expect(divide(6, 8)).to.equal(0.75);
        });
        it("Should divide two negative numbers", () => {
            expect(divide(-6, -8)).to.equal(0.75);
        });
        it("Should give NaN when dividing with 0", () => {
            expect(divide(5, 0)).to.eql(NaN);
        });
    });
    describe("Function: ToInteger", () => {
        it("Should convert string to integer", () => {
            expect(toInteger('3.2')).to.equal(3);
        });
        it("Should convert minimum value to integer", () => {
            expect(toInteger(Number.MIN_VALUE)).to.equal(0);
        });
        it("Should convert infinity to integer", () => {
            expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
        });
    });
    describe("Function: ToNumber", () => {
        it("Should convert string to number", () => {
            expect(toNumber('3.2')).to.equal(3.2);
        });
        it("Should convert minimum value to number", () => {
            expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
        });
        it("Should convert infinity to number", () => {
            expect(toNumber(Infinity)).to.equal(Infinity);
        });
    });
    describe("Function: Ceil", () => {
        it("Should round up to next integer", () => {
            expect(ceil(4.006)).to.equal(5);
        });
        it("Should round up to next thousand", () => {
            expect(ceil(6040, -2)).to.equal(6100);
        });
    });
    describe("Function: Clamp", () => {
        it("Should clamp to lower bound", () => {
            expect(clamp(-10, -5, 5)).to.equal(-5);
        });
        it("Should clamp to upper bound", () => {
            expect(clamp(10, -5, 5)).to.equal(5);
        });
    });
});