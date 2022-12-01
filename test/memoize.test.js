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
    //console.log(memoizeFunc(object));
    //console.log(memoizeFunc(other));
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
});

