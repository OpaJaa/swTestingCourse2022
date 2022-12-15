
import chai from "chai"
import isEmpty from "../src/isEmpty.js";

const expect = chai.expect

describe("isEmpty", () => {
 
 it("Test with null", () =>{
     expect(isEmpty(null)).to.equal(true)
 });
 it("Test empty", () =>{
    expect(isEmpty()).to.equal(true)
 });
 it("Test with true", () =>{
    expect(isEmpty(true)).to.equal(true)
 });
 it("Test with 1", () =>{
    expect(isEmpty(1)).to.equal(true)
 });
 it("Test with empty array", () =>{
    expect(isEmpty([])).to.equal(true)
 });
 it("Test with empty string", () =>{
    expect(isEmpty('')).to.equal(true)
 });
 it("Test with string", () =>{
    expect(isEmpty('abc')).to.equal(false)
 });
 it("Test with array", () =>{
    expect(isEmpty([1,2,3])).to.equal(false)
 });
 it("Test with object", () =>{
    expect(isEmpty({ 'a': 1 })).to.equal(false)
 });
 it("Test with map", () =>{
    expect(isEmpty('a', 1)).to.equal(false)
 });
 it("Test with map", () =>{
    expect(isEmpty()).to.equal(false)
 });
})
