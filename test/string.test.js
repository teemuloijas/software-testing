const chai = require('chai');
const toString = require('../lib/src/toString.js').default;
const upperFirst = require('../lib/src/upperFirst.js').default;
const words = require('../lib/src/words.js').default;
const camelCase = require('../lib/src/camelCase.js').default;
const capitalize = require('../lib/src/capitalize.js').default;
const endsWith = require('../lib/src/endsWith.js').default;

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
            expect(words("apples & oranges")).to.eql(["apples", "oranges"]);
        });
        it("Should return multiple words", () => {
            expect(words("apples, oranges & bananas")).to.eql(["apples", "oranges", "bananas"]);
        });
    });

    describe("Function: CamelCase", () => {
        it("Should return camelcased fooBar", () => {
            expect(camelCase('Foo Bar')).to.equal("fooBar");
        });
        it("Should return camelcased fooBar", () => {
            expect(camelCase('--foo-bar--')).to.equal("fooBar");
        });
    });

    describe("Function: Capitalize", () => {
        it("Should return capitalized Foobar", () => {
            expect(capitalize('foobar')).to.equal("Foobar");
        });
        it("Should return capitalized fooBar", () => {
            expect(capitalize('FOOBAR')).to.equal("Foobar");
        });
    });

    describe("Function: EndsWith", () => {
        it("Should return true", () => {
            expect(endsWith('abc', 'c')).to.equal(true);
        });
        it("Should return false", () => {
            expect( endsWith('abc', 'b')).to.equal(false);
        });
    });
});