//trying to make getName() inside constructor to work as a prompt
// - no success due to issues with async 

const Employee = require('./Employee')
const inquirer = require('inquirer')

/* const employee = async () => {
    return new Employee('', 2, 'reeve@gmail.com').getName()
}


console.log(getName())
*/

employee = new Employee('', 2, 'reeve@gmail.com')
// employee.getName()

console.log( employee.getName())