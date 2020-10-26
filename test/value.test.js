import chai from "chai";
import eq from 'COMP.SE.200-2020-assignment/src/eq.js';

const assert = chai.assert;

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
});