const Engineer = require("../lib/Engineer");


describe("Engineer class", () => {

    describe("officeNumber ", () => {
        it("returns the github of the the engineer employee comes from", () => {
            // Arrange
            const engineer = new Engineer("Man Name", "IDNo", "email@email", "myGitHubID");
            
            // Assert
            expect(engineer.github).toBe('myGitHubID');
        });
    });

    describe("getRole Method ", () => {
        it("returns the get Role method  (in lower case)", () => {
            // Arrange
            const engineer = new Engineer("Man Name", "IDNo", "email@email", "myGitHubID");
            
            // Assert
            expect(engineer.getRole()).toBe('engineer');
        });
    })


});