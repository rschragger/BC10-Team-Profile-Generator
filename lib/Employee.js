class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    getRole() {
        //this.role = 'Employee';
        return this.role.toLowerCase()
    }

    // Prompts the user for a name
    /* Couldn't get this to work because of sync issues-----
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
    }*/
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
}


module.exports =  Employee


/*
name

id

email

getName()

getId()

getEmail()

getRole()—returns 'Employee'
*/