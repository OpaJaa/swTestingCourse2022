import chai from "chai"
import chunk from "../src/chunk.js"

const expect = chai.expect;
const normalArray = ['a', 'b', 'c', 'd'];
const oddArray = ['a', 'b', 'c', 'd', 'e']
const emptyArray = []
    
describe("Chunk", () => {
 it("Test with normal array, positive length", () =>{
    var testChunk = chunk(normalArray, 2);
    //console.log(testChunk);
    expect(chunk(normalArray, 2)).to.equal([['a', 'b'], ['c', 'd']]);
 });
 it("Test with normal array, longer length", () =>{
    var testChunk = chunk(normalArray, 5);
    //console.log(testChunk);
    expect(chunk(normalArray, 2)).to.equal([['a'],['b'],['c'],['d']]);
 });
 it("Test with odd array, positive length", () =>{
    var testChunk = chunk(oddArray, 4);
    //console.log(testChunk);
    expect(chunk(oddArray, 4)).to.equal([['a'],['b'],['c'],['d', 'e']]);
 });
 it("Test with empty array, positive length", () =>{
    var testChunk = chunk(emptyArray, 2);
    //console.log(testChunk);
    expect(chunk(emptyArray, 2)).to.eql([]);
 });
 it("Test with normal array, no length", () =>{
    var testChunk = chunk(normalArray);
    //console.log(testChunk);
    expect(chunk(normalArray)).to.equal([['a'],['b'],['c'],['d']]);
 });
 it("Test with empty array, no length", () =>{
    var testChunk = chunk(normalArray);
    //console.log(testChunk);
    expect(chunk(normalArray)).to.eql([]);
 });
 it("Test with normal array, negative length", () =>{
    var testChunk = chunk(normalArray);
    //console.log(testChunk);
    expect(chunk(normalArray)).to.equal([['a','b'],['c','d']]);
 });
 it("Test with empty array, negative length", () =>{
    var testChunk = chunk(normalArray, -2);
    //console.log(testChunk);
    expect(chunk(normalArray, -2)).to.eql([]);
 });
 it("Test with normal array, length as string", () =>{
    var testChunk = chunk(normalArray, '1');
    //console.log(testChunk);
    expect(chunk(normalArray, '1')).to.equal([['a'],['b'],['c'],['d']]);
 });
 it("Test with normal array, length as alphaChar", () =>{
    var testChunk = chunk(normalArray, 'a');
    //console.log(testChunk);
    expect(chunk(normalArray, 'a')).to.eql([]);
 });
});