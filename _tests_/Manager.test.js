const Manager = require("../lib/Manager");


describe("Manager class", () => {

    describe("officeNumber ", () => {
        it("returns the number of the office the manager employee works in", () => {
            // Arrange
            const manager = new Manager("Man Name", "IDNo", "email@email", 3);
            // Assert

            expect(manager.officeNumber).toBe(3);
        });
    });

    describe("getRole Method ", () => {
        it("returns the get Role method (in lower case)", () => {
            // Arrange
            const manager = new Manager("Man Name", "IDNo", "email@email", 3);
            // Assert

            expect(manager.getRole()).toBe('manager');
        });
    })


});