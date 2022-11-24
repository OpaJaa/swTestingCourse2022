
import chai from "chai"
import capitalize from "../src/capitalize.js"

const expect = chai.expect

describe("Capitalize", () => {
    it("Test all lowercase in a string", () =>{
        expect(capitalize("hello")).to.equal("Hello")
    });
    it("Test all uppercase in a string", () =>{
        expect(capitalize("HELLO")).to.equal("Hello")
    });
    it("Test camelCase", () =>{
        expect(capitalize("helloWorld")).to.equal("Helloworld")
    });
    it("Test empty string", () =>{
        expect(capitalize("")).to.equal("")
    });
    it("Test one char lowercase", () =>{
        expect(capitalize("a")).to.equal("A")
    });
    it("Test one char uppercase", () =>{
        expect(capitalize("B")).to.equal("B")
    });
    it("Test integer", () =>{
        expect(capitalize(1)).to.equal(RangeError)
    });
    it("Test float", () =>{
        expect(capitalize(1.1)).to.equal(RangeError)
    });
    it("Test boolean", () =>{
        expect(capitalize(true)).to.equal(RangeError)
    });
})