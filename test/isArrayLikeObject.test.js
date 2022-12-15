
import chai from "chai"
import isArrayLikeObject from "../src/isArrayLikeObject.js"
import isArrayLike from '../src/isArrayLike.js'
const expect = chai.expect

describe("isArrayLikeObject", () => {
 
 it("Test with integer array", () =>{
     expect(isArrayLikeObject([1,2,3])).to.equal(true)
 });
 it("Test with string array", () =>{
    expect(isArrayLikeObject(['a', 'b', 'c'])).to.equal(true)
});
it("Test with integer", () =>{
    expect(isArrayLikeObject(13)).to.equal(false)
});
it("Test with string", () =>{
   expect(isArrayLikeObject('abc')).to.equal(false)
});
it("Test with empty", () =>{
    expect(isArrayLikeObject()).to.equal(false)
 });
 it("Test with null", () =>{
    expect(isArrayLikeObject(null)).to.equal(false)
 });
 it("Test with function", () =>{
    expect(isArrayLikeObject(isArrayLike([1,2,3]))).to.equal(false)
 });
})