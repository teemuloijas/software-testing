const chai = require('chai');
const eq = require('../lib/src/eq.js').default;
const defaultTo = require('../lib/src/defaultTo.js').default;
const defaultToAny = require('../lib/src/defaultToAny.js').default;

const assert = chai.assert;
const expect = chai.expect;

const obj1 = { 'a' : 1};
const obj2 = { 'a' : 2};

describe("Value Test Suite", () => {
    describe("Function: eq", () => {
        it("Should return true when objects are same", () => {
            assert.isTrue(eq(obj1, obj1));
        });
        it("Should return false when objects are different", () => {
            assert.isNotTrue(eq(obj1, obj2));
        });
        it("Should return false when strings are different", () => {
            assert.isNotTrue(eq("a", "b"));
        });
    });
    describe("Function: DefaultTo", () => {
        it("Should return value when value is not undefined", () => {
            expect(defaultTo(1, 10)).to.equal(1);
        });
        it("Should return defaultValue when value is undefined", () => {
            expect(defaultTo(undefined, 10)).to.equal(10);
        });
    });
    describe("Function: DefaultToAny", () => {
        it("Should return value when value is not undefined", () => {
            expect(defaultToAny(1, 10, 20)).to.equal(1);
        });
        it("Should return first non null defaultValue when value is undefined", () => {
            expect(defaultToAny(undefined, null, 20)).to.equal(20);
        });
    });
});