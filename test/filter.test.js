
import chai from "chai"
import filter from "../src/filter.js"

const expect = chai.expect
const users = [
    {'user':'barney','active':true},
    {'user':'fred','active':false}
]
    
describe("Filter", () => {
 it("Test with empty array", () =>{
     expect(filter(users,({ active }) => active)).to.equal([ { user: 'barney', active: true } ])
 });
 /*
 it("Test with incorrect function", () =>{

 });
 it("Test with correct array", () =>{
    expect(filter(users,({ active }) => active)).to.equal([ { user: 'barney', active: true } ])
 });
 it("Test with correct function", () =>{

 });
 */
})