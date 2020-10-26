import chai from "chai";
import toString from 'COMP.SE.200-2020-assignment/src/toString.js';
import upperFirst from 'COMP.SE.200-2020-assignment/src/upperFirst.js';
import words from 'COMP.SE.200-2020-assignment/src/words.js';

const assert = chai.assert;
const expect = chai.expect;

describe("String Test Suite", () => {
    describe("Function: ToString", () => {
        it("Should convert null to string", () => {
            expect(toString(null)).to.equal("null");
        });
        it("Should convert -0 to string", () => {
            expect(toString(-0)).to.equal("-0");
        });
        it("Should convert array to string", () => {
            expect(toString([1,2,3])).to.equal("1,2,3");
        });
    });
    describe("Function: UpperFirst", () => {
        it("Should capitalize lowercase", () => {
            expect(upperFirst("george")).to.equal("George");
        });
        it("Should capitalize uppercase", () => {
            expect(upperFirst("GEORGE")).to.equal("GEORGE");
        });
        it("Should capitalize capitalized", () => {
            expect(upperFirst("George")).to.equal("George");
        });
    });

    // Muutettu hieman suunnitelmasta
    describe("Function: Words", () => {
        it("Should return one word", () => {
            expect(words("apples")).to.eql(["apples"]);
        });
        it("Should should return capitalized Apples", () => {
            expect(words("Apples & oranges")).to.eql(["apples", "oranges"]);
        });
        it("Should return multiple words", () => {
            expect(words("apples, oranges & bananas")).to.eql(["apples", "oranges", "bananas"]);
        });
    });
});