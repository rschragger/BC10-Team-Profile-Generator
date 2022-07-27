const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    }
    officeNumber(){
        return this.officeNumber;
    }
}
module.exports = {
    Intern
}


/*
In addition to Employee's properties and methods, Manager will also have the following:

officeNumber

getRole()—overridden to return 'Manager'
*/