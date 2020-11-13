const chai = require('chai');
const isArrayLike = require('../lib/src/isArrayLike.js').default;
const isDate = require('../lib/src/isDate.js').default;
const isEmpty = require('../lib/src/isEmpty.js').default;
const isObject = require('../lib/src/isObject.js').default;

const expect = chai.expect;

describe("Type Test Suite", () => {
    describe("Function: IsArrayLike", () => {
        it("Should be array", () => {
            expect(isArrayLike([1, 2, 3])).to.equal(true);
        });
        it("Should not be array", () => {
            expect(isArrayLike(Function)).to.equal(false);
        });
    });
    describe("Function: IsDate", () => {
        it("Should be date", () => {
            expect(isDate(new Date)).to.equal(true);
        });
        it("Should not be date", () => {
            expect(isDate('Mon April 23 2012')).to.equal(false);
        });
    });
    describe("Function: IsEmpty", () => {
        it("Should be empty", () => {
            expect(isEmpty(null)).to.equal(true);
        });
        it("Should not be empty", () => {
            expect(isEmpty([1, 2, 3])).to.equal(false);
        });
    });
    describe("Function: IsObject", () => {
        it("Should be object", () => {
            expect(isObject({})).to.equal(true);
        });
        it("Should not be object", () => {
            expect(isObject(null)).to.equal(false);
        });
    });
});