import chai from "chai";
import every from 'COMP.SE.200-2020-assignment/src/every.js';
import filter from 'COMP.SE.200-2020-assignment/src/filter.js';
import map from 'COMP.SE.200-2020-assignment/src/map.js';

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
        // it("Should have all values rejected", () => {
        //     expect(filter([0,0,0,0,0], n => n)).to.eql([]);
        // });
        it("Should have every other value accepted", () => {
            expect(filter([1,0,1,0,1], n => n)).to.eql([1,1,1]);
        });
    });
    // describe("Function: Map", () => {
    //     it("Should double numbers", () => {
    //         expect(map());
    //     });
    //     it("Should square numbers", () => {
    //         expect(map());
    //     });
    //     it("Should map object properties", () => {
    //         expect(map());
    //     });
    // });
});