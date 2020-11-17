const chai = require('chai');
const countBy = require('../lib/src/countBy.js').default;
const get = require('../lib/src/get.js').default;
const keys = require('../lib/src/keys.js').default;

const expect = chai.expect;

describe("Object Test Suite", () => {
    describe("Function: CountBy", () => {
        it("Should count by number", () => {
            expect(countBy([{ a: 1 }, { a: 0 }, { a: 1 }], u => u.a)).to.eql({ 1: 2, 0: 1 });
        });
        it("Should count by string", () => {
            expect(countBy([{ a: 'a' }, { a: 'b' }, { a: 'c' }], u => u.a)).to.eql({ a: 1, b: 1, c: 1 });
        });
        it("Should count by empty", () => {
            expect(countBy([], u => u.a)).to.eql({});
        });
    });
    describe("Function: Get", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        it("Should count by number", () => {
            expect(get(object, 'a[0].b.c')).to.equal(3);
        });
        it("Should count by string", () => {
            expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
        });
    });
    describe("Function: Keys", () => {
        function Foo() {
            this.a = 1
            this.b = 2
        }
        Foo.prototype.c = 3;
        it("Should count by number", () => {
            expect(keys(new Foo)).to.eql(['a', 'b']);
        });
        it("Should count by string", () => {
            expect(keys('hi')).to.eql(['0', '1']);
        });
    });
});