import chai from "chai"
import memoize from "../src/memoize.js"

const expect = chai.expect;
const object = { 'a': 1, 'b': 2 };
const other = { 'c': 3, 'd': 4 };

function vals( args ) {   
    var result = [];
    for ( var val in args ) {
        result.push(args[val]);
    }
    return result;
}
 
describe("memoize", () => {
 it("Test with normal objects", () =>{
    const memoizeFunc = memoize(vals);
    var result1 = memoizeFunc(object);
    var result2 = memoizeFunc(other);
    expect(result1).to.eql([1,2]);
    expect(result2).to.eql([3,4]);
 });
 it("Test with wrong type (no function)", () =>{
    expect(()=> {(memoize("Memoize"))}).to.throw('Expected a function');
    expect(()=> {(memoize(1))}).to.throw('Expected a function');
    expect(()=> {(memoize(undefined))}).to.throw('Expected a function');
 });
 it("Test cache-setting", () =>{
    const memoizeFunc = memoize(vals);
    var result1 = memoizeFunc(object);
    var result2 = memoizeFunc(other);
    expect(result1).to.eql([1,2]);
    expect(result2).to.eql([3,4]);
    memoizeFunc.cache.set(object, ['a', 'b'])
    memoizeFunc.cache.set(other, ['c', 'd'])
    expect(memoizeFunc(object)).to.eql(['a','b']);
    expect(memoizeFunc(other)).to.eql(['c','d']);
 });
  it("Test output to remain when modifying object", () =>{
    var anotherObj = {"a" : 5, "b" : 10};
    const memoizeFunc = memoize(vals);
    const referMemo = memoizeFunc(anotherObj);
    anotherObj.a = 10;
    const result1 = memoizeFunc(anotherObj);
    expect(result1).to.eql(referMemo);
    expect(anotherObj).to.eql({"a" : 10, "b" : 10})
 });
});

