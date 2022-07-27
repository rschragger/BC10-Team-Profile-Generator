const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.role = 'Intern'
    }
    getSchool(){
        return this.school;
    }
}
module.exports = {
    Intern
}

/*
In addition to Employee's properties and methods, Intern will also have the following:

school

getSchool()

getRole()—overridden to return 'Intern'
*/