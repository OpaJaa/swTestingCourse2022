
import chai from "chai"
import filter from "../src/filter.js"

const expect = chai.expect
const users = [
    {'user':'barney','active':true},
    {'user':'fred','active':false}
]
    
describe("Filter", () => {
 it("Test with empty", () =>{
     expect(filter()).to.eql([[]])
 });
 it("Test with correct function", () =>{
     expect(filter(users,({active}) => active)).to.eql([ { user: 'barney', active: true } ])
 });
 it("Test with correct array", () =>{
    expect(filter(users,({ user }) => user)).to.eql([ { user: 'barney', active: true },{"active": false, "user": "fred"} ])
 });
 it("Test with incorrect function", () =>{
    expect(filter(users,({ user }) => 'barney')).to.eql([ { user: 'barney', active: true } ])
 });
 
})