
import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect

describe("Add", () => {
 it("Adds zero to positive number", () =>{
     expect(add(0,3)).to.equal(3)
 });
 it("Adds positive number to zero", () =>{
    expect(add(3,0)).to.equal(3)
 });
 it("Adds zero to negative number", () =>{
    expect(add(0,-3)).to.equal(-3)
 });
 it("Adds negative number to zero", () =>{
   expect(add(-3,0)).to.equal(-3)
 });
 it("Adds positive number to positive number", () =>{
    expect(add(3,6)).to.equal(9)
 });
 it("Adds negative number to negative number", () =>{
    expect(add(-3,-6)).to.equal(-9)
 });
 it("Adds string to positive number", () =>{
    expect(add("abc",6)).to.equal(RangeError)
 });
 it("Adds null to positive number", () =>{
    expect(add(null,6)).to.equal(RangeError)
 });
 it("Adds boolean to positive number", () =>{
    expect(add(true,6)).to.equal(RangeError)
 });
 it("Adds positive decimal number to positive decimal number", () =>{
    expect(add(1.25,2.25)).to.equal(3.5)
 });
 it("Adds positive decimal number to negative decimal number", () =>{
    expect(add(1.5,-2.25)).to.equal(-0.75)
 });
 it("Adds negative decimal number to negative decimal number", () =>{
    expect(add(-1.5,-2)).to.equal(-3.5)
 });
})