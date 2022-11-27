import chai from "chai"
import countBy from "../src/countBy.js"

const expect = chai.expect;
const normalCollection = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
  ];
const emptyCollection = [];
    
describe("countBy", () => {
 it("Test with normal collection, working function", () =>{
    var testCountBy = countBy(normalCollection, value => value.active);
    //console.log(testCountBy);
    expect(countBy(normalCollection, value => value.active)).to.equal({'true': 2, 'false': 1});
 });
 it("Test with normal collection, incorrect function", () =>{
    var testCountBy = countBy(normalCollection, wrong => wrong.nothing);
    //console.log(testCountBy);
    expect(countBy(normalCollection, wrong => wrong.nothing)).to.eql({});
 });
 it("Test with empty collection, working function", () =>{
    var testCountBy = countBy(emptyCollection, value => value.active);
    //console.log(testCountBy);
    expect(countBy(emptyCollection, value => value.active)).to.eql({});
 });
 it("Test with empty collection, incorrect function", () =>{
    var testCountBy = countBy(emptyCollection, wrong => wrong.nothing);
    //console.log(testCountBy);
    expect(countBy(emptyCollection, wrong => wrong.nothing)).to.eql({});
 });
});