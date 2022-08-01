const Employee = require("../lib/Employee");

describe("Employee class", () => {


    describe("getRole method", () => {
        it("getRole () returns the role of the Employee (in lower case)", () => {
            // Arrange
            const employee = new Employee("Employee Name", "IDNo", "email@email");

            // Assert
            expect(employee.getRole()).toEqual('employee');
        });
    })


});