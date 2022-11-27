import chai from "chai"
import difference from "../src/difference.js"

const expect = chai.expect;
const normalArray1 = [1,2,3,4];
const normalArray2 = [3,4,5,6];
const emptyArray = [];
const nonArray = 2;
    
describe("difference", () => {
 it("Test with similar arrays", () =>{
    var testDifference = difference(normalArray1, normalArray1);
    //console.log(testDifference);
    expect(difference(normalArray1, normalArray1)).to.eql([]);
 });
  it("Test with two arrays", () =>{
    var testDifference = difference(normalArray1, normalArray2);
    //console.log(testDifference);
    expect(difference(normalArray1, normalArray2)).to.eql([1,2]);
 });
   it("Test with empty arrays", () =>{
    var testDifference = difference(emptyArray, emptyArray);
    //console.log(testDifference);
    expect(difference(emptyArray, emptyArray)).to.eql([]);
 });
    it("Test with non-arrays", () =>{
    var testDifference = difference(nonArray, nonArray);
    //console.log(testDifference);
    expect(difference(nonArray, nonArray)).to.eql([]);
 });
});