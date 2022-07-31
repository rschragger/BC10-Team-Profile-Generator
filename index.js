//Get requires
const fs = require('fs');
const inquirer = require('inquirer');
//const jest = require('jest')

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const makeHtmlPage = require('./lib/makeHTML')

var serialNo = 0;
const employeeList = [];


//example engineer = new Engineer(name, id, email, github) ;

// Functions ************

// Inquirer functions -------------
function choosePath() {
  let questions = [
    {
      type: 'list',
      message: 'What would you like to do now',
      name: 'pathChoice',
      choices: ['Add employee', 'Make HTML', 'End process and construct final HTML'],
      default: 0,
      validate: (pathChoice) => {
        if (pathChoice === undefined) {
          return false //'Require an answer'
        } else { return true }
      }
    },
  ]
  return inquirer
    .prompt(questions)
    .then((response) => {
      if (response.pathChoice === 'Add employee') {
        chooseEmployeeRole()
      } else if (response.pathChoice === 'Make HTML') {
        makeHTML('current')
      } else {
        console.log('Thanks for using this program, please see HTML file produced')
        endFunction()
      }
    })
    .catch((err) => {
      console.log('Error in choosePath()')
      console.log(err)
    })
};

function chooseEmployeeRole() {
  let questions = [
    {
      type: 'list',
      message: 'What employee type is this person?',
      name: 'role',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
  ];
  return inquirer
    .prompt(questions)
    .then((response) => {
      employeeQuestions(response.role)
    })
    .catch((err) => {
      console.log('Error in chooseEmployeeRole()')
      console.log(err)
    })
};

function employeeQuestions(thisRole) {

  let questions = [
    {
      type: 'input',
      name: 'fullName',
      message: 'What is their name?',
      validate: (answer) => {
        return (answer !== '') 
      }
    }, {
      type: 'input',
      name: 'id',
      message: 'What is their ID?',
      validate: (answer) => {
        //https://stackoverflow.com/questions/25469972/getting-the-values-for-a-specific-key-from-all-objects-in-an-array
        //x.map(value => value.id)
        oldVals = employeeList.map(value => value.id);
        return (answer !== '' && (oldVals.includes(answer)!==true)) 
      }
    }, {
      type: 'email',
      name: 'email',
      message: 'What is their email address?',
      validate: function (email) {
        // Regex mail check (return true if valid mail)
        //https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
      }

    }, {
      type: 'input',
      name: 'officeNumber',
      message: 'What is their Office Number?',
      when: thisRole === 'Manager',
      validate: (answer) => {
        return (answer !== '') 
      }
    }, {
      type: 'input',
      name: 'gitHub',
      message: 'What is their GitHub ID?',
      when: thisRole === 'Engineer',
      validate: (answer) => {
        return (answer !== '') 
      }
    }, {
      type: 'input',
      name: 'school',
      message: 'What School are they from?',
      when: thisRole === 'Intern',
      validate: (answer) => {
        return (answer !== '') 
      }
    },
  ];
  // let employee
  return inquirer
    .prompt(questions)
    .then((response) => {
      if (thisRole === 'Manager') {
        let manager = new Manager(response.fullName, response.id, response.email, response.officeNumber);
        employeeList.push(JSON.parse(JSON.stringify(manager)))
        // employeeList.push(manager)

      } else if (thisRole === 'Engineer') {
        let engineer = new Engineer(response.fullName, response.id, response.email, response.gitHub);
        employeeList.push(JSON.parse(JSON.stringify(engineer)))
        //employeeList.push(engineer)

      } else if (thisRole === 'Intern') {
        let intern = new Intern(response.fullName, response.id, response.email, response.school);
        employeeList.push(JSON.parse(JSON.stringify(intern)))
        //employeeList.push(intern)

      }
      // employeeList.push(employee)
      choosePath()
    })
    .catch((err) => {
      console.log('Error in employeeQuestions()')
      console.log(err)
    })
};

// Other Functions ---------------------------
function makeHTML(status) {
  //console.log(makeHtmlPage(employeeList))
  // Save the HTML
  fs.writeFile('./dist/index.html',makeHtmlPage(employeeList),((err)=> console.log(err)))
  console.log('\x1b[42m\n\n HTML file saved\n\x1b[0m\n ')
  if (status === 'current') { choosePath() }
}


//Init and End Functions -------------

function endFunction() {
  makeHTML('end');
  console.log("\x1b[41m\n\n Thank you for using this product\n\x1b[0m\n ")
}

function Init() {
  console.log("\x1b[41m\n\n Welcome to the team builder application.\n Please start by adding in detail for your Team Manager.\n\x1b[0m\n ");
  
  employeeQuestions('Manager');

}

Init()
