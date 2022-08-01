const Intern = require("../lib/Intern");


describe("Intern class", () => {

    describe("officeNumber ", () => {
        it("returns the school of the the intern employee comes from", () => {
            // Arrange
            const intern = new Intern("Man Name", "IDNo", "email@email", "Computer School");
            
            // Assert
            expect(intern.school).toBe('Computer School');
        });
    });

    describe("getRole Method ", () => {
        it("returns the get Role method (in lower case)", () => {
            // Arrange
            const intern = new Intern("Man Name", "IDNo", "email@email", "Computer School");
            
            // Assert
            expect(intern.getRole()).toBe('intern');
        });
    })


});