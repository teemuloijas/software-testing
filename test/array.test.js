const chai = require('chai');
const every = require('../lib/src/every.js').default;
const filter = require('../lib/src/filter.js').default;
const map = require('../lib/src/map.js').default;
const chunk = require('../lib/src/chunk').default;
const reduce = require('../lib/src/reduce').default;

console.log({ every });

const assert = chai.assert;
const expect = chai.expect;

describe("Array Test Suite", () => {
    describe("Function: Every", () => {
        it("Should be true when all values are truthy", () => {
            assert(every([1, true, 'item'], n => n) === true, "Is true");
        });
        it("Should be false when all values are falsy", () => {
            expect(every([0, false, null], n => n) === false).to.equal(true);
        });
        it("Should be false when all but one value is truthy", () => {
            expect(every([1,1,0,1,1], n => n) === false).to.equal(true);
        });
    });
    describe("Function: Filter", () => {
        it("Should have all values accepted", () => {
            expect(filter([1,1,1,1,1], n => n)).to.eql([1,1,1,1,1]);
        });
        it("Should have all values rejected", () => {
            expect(filter([0,0,0,0,0], n => n)).to.eql([]);
        });
        it("Should have every other value accepted", () => {
            expect(filter([1,0,1,0,1], n => n)).to.eql([1,1,1]);
        });
    });
    describe("Function: Map", () => {
        it("Should double numbers", () => {
            expect(map([4,8], a => a*2));
        });
        it("Should square numbers", () => {
            expect(map([4,8], a => a*a));
        });
        it("Should map object properties", () => {
            expect(map({b:1, b:2}, a => a.b));
        });
    });
    describe("Function: Chunk", () => {
        it("Should return one chunk", () => {
            expect(chunk(['a', 'b', 'c', 'd'], 2)).to.eql([['a', 'b'], ['c', 'd']]);
        });
        it("Should return 2 chunks", () => {
            expect(chunk(['a', 'b', 'c', 'd'], 3)).to.eql([['a', 'b', 'c'], ['d']]);
        });
    });
    describe("Function: Reduce", () => {
        it("Should the accumulated value (3)", () => {
            expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.eql(3);
        });
        it("Should the accumulated value for each key", () => {
            expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
                  (result[value] || (result[value] = [])).push(key)
                  return result
                }, {})).to.eql({ '1': ['a', 'c'], '2': ['b'] });
        });
    });
});