class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return 'Employee'
    }

    // Prompts the user for a letter
    getName() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "fullName",
                    message: "Please enter employee name",

                }
            ])
            .then(data => {
                this.name = data;
            });
    }
}


module.exports = {
Employee
}

/*
name

id

email

getName()

getId()

getEmail()

getRole()—returns 'Employee'
*/