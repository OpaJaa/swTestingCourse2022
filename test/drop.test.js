import chai from "chai"
import drop from "../src/drop.js"

const expect = chai.expect;
const normalArray = [1,2,3,4];
const emptyArray = [];
const nonArray = "array";
    
describe("drop", () => {
 it("Test with normal array, positive number", () =>{
    var testDrop = drop(normalArray, 2);
    //console.log(testDrop);
    expect(drop(normalArray, 2)).to.eql([3,4]);
 });
  it("Test with normal array, bigger number", () =>{
    var testDrop = drop(normalArray, 2);
    //console.log(testDrop);
    expect(drop(normalArray, 5)).to.eql([]);
 });
  it("Test with normal array, negative number", () =>{
    var testDrop = drop(normalArray, -2);
    //console.log(testDrop);
    expect(drop(normalArray, 2)).to.eql([3,4]);
 });
  it("Test with empty array, bigger number", () =>{
    var testDrop = drop(emptyArray, 2);
    //console.log(testDrop);
    expect(drop(emptyArray, 5)).to.eql([]);
 });
   it("Test with non-array, char as number", () =>{
    var testDrop = drop(nonArray, 'r');
    console.log(testDrop);
    expect(drop(nonArray, 'r')).to.eql(['a','r','r','a','y']);
 });
});