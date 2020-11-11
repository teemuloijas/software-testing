import chai from "chai";
import add from 'lib/src/add.js';
import difference from 'lib/src/difference.js';
import divide from 'lib/src/divide.js';
import toInteger from 'lib/src/toInteger.js';
import toNumber from 'lib/src/toNumber.js';

const assert = chai.assert;
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

    //TODO: CHECK THIS FUNCTION :D
    // describe("Function: Difference", () => {
    //     it("Should subtract two positive numbers", () => {
    //         expect(difference([6, 4.5])).to.equal(1.5);
    //     });
    //     it("Should subtract two negative numbers", () => {
    //         expect(difference(-6, 4.5)).to.equal(-1.5);
    //     });
    //     it("Should subtract a positive number from negative", () => {
    //         expect(difference(-5, 5)).to.equal(-10);
    //     });
    // });
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
});