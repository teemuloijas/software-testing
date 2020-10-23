const chai = require("chai");
const assert = chai.assert;

describe("Array Test Suite", () => {
    describe("Testing", () => {
        it("Foo should not equal bar", () => {
            assert('foo' !== 'bar', 'Foo is not bar.');
        });
    });
    describe("Anotha test", () => {
        it("Empty array should be an array", () => {
            assert(Array.isArray([]), 'Empty array is an array.');
        });
    });
});